from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

# Initialize Flask App
app = Flask(__name__)

# Enable CORS
CORS(app)

# Step 1: Load and Prepare Data
data = {
    'ID': [1, 2, 3, 4, 5, 6, 7],
    'Name': [
        'SNAM Travel',
        'SNAM Muqeem',
        'SNAM Yaqeen',
        'SNAM AI',
        'SAP SuccessFactors',
        'SAP S/4HANA',
        'Data Analytics Services'
    ],
    'Description': [
        'Streamline travel processes with SAP integration, compliance, and cost optimization.',
        'Unified HR and Muqeem services platform, automating visa and Iqama processes.',
        'Facilitate HR digital transformation with real-time employee data management.',
        'AI tools for HR, predictive analytics, and generative AI integration.',
        'Comprehensive HR management, including payroll, performance, and compliance.',
        'Advanced ERP system for digital transformation and operational efficiency.',
        'Leverage data insights for better decision-making and business strategies.'
    ]
}

df = pd.DataFrame(data)

# Step 2: Feature Extraction
vectorizer = TfidfVectorizer(stop_words='english')
tfidf_matrix = vectorizer.fit_transform(df['Description'])

# Step 3: Calculate Similarity
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

# Function to Recommend Items
def recommend(item_id, num_recommendations=3):
    idx = df[df['ID'] == item_id].index[0]
    similarity_scores = list(enumerate(cosine_sim[idx]))
    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
    top_matches = similarity_scores[1:num_recommendations+1]

    recommendations = []
    for i, score in top_matches:
        recommendations.append({
            'ID': int(df.iloc[i]['ID']),  # Convert int64 to int
            'Name': df.iloc[i]['Name'],
            'Score': score
        })
    return recommendations

# New Function to Recommend Based on User Input
@app.route('/recommend-by-input', methods=['POST'])
def recommend_by_input():
    try:
        user_input = request.json.get('input', '')
        if not user_input:
            return jsonify({"error": "Input is required"}), 400

        # Process user input and calculate similarity
        user_vector = vectorizer.transform([user_input])
        similarity_scores = linear_kernel(user_vector, tfidf_matrix).flatten()

        # Get top recommendations
        top_indices = similarity_scores.argsort()[-3:][::-1]
        recommendations = [
            {
                'ID': int(df.iloc[i]['ID']),
                'Name': df.iloc[i]['Name'],
                'Score': round(similarity_scores[i], 3)
            }
            for i in top_indices
        ]

        return jsonify(recommendations)
    except Exception as e:
        return jsonify({"error": str(e)})

# API Endpoint for Recommendations
@app.route('/recommend', methods=['GET'])
def get_recommendations():
    try:
        item_id = int(request.args.get('item_id'))
        num_recommendations = int(request.args.get('num_recommendations', 3))
        recommendations = recommend(item_id, num_recommendations)
        return jsonify(recommendations)
    except Exception as e:
        return jsonify({"error": str(e)})

# Add a Root Route
@app.route('/')
def home():
    return "Welcome to the Recommendation System API. Use /recommend or /recommend-by-input endpoint."

# Debugging: Print all routes
if __name__ == '__main__':
    print("Registered Routes:")
    print(app.url_map)
    app.run(debug=True)
