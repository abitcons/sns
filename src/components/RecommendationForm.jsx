import React, { useState } from 'react';
const solutionsData = [
    {
        ID: 1,
        Name: 'SAP SuccessFactors',
        Description: 'Leading cloud-based HCM suite enhancing HR processes, talent management, and employee engagement.',
        Link: '/solutions/hr',
        capabilities: [
            'Core HR and Payroll Management',
            'Talent Management Suite',
            'Employee Experience Management',
            'HR Analytics',
            'Workforce Planning',
            'Time and Attendance Tracking',
            'Employee Engagement',
            'Performance Management'
        ],
        integrations: ['SNAM Travel', 'SNAM Muqeem', 'SNAM Yaqeen', 'AI-Powered Recruitment', 'AI-Driven Analytics'],
        useCases: [
            'Streamline HR operations',
            'Enhance employee experience',
            'Automate HR processes',
            'Improve talent acquisition',
            'Track employee performance',
            'Manage payroll efficiently'
        ],
        keywords: [
            'SAP', 'human capital management', 'HR automation', 'talent management', 'employee experience', 'workforce planning',
            'performance optimization', 'HR analytics', 'employee portal', 'HR compliance'
        ]
    },
    {
        ID: 2,
        Name: 'SNAM Muqeem',
        Description: 'Unified HR and residency services platform for visa and Iqama management, integrated with SAP.',
        Link: '/solutions/snam-muqeem',
        capabilities: [
            'Automated Reminders',
            'Regulatory Compliance',
            'Resident Management',
            'Visa Processing',
            'Document Management',
            'Status Tracking',
            'Integration with Government Services'
        ],
        integrations: ['SAP SuccessFactors', 'SNAM Yaqeen'],
        useCases: [
            'Streamline residency management',
            'Ensure compliance with Saudi regulations',
            'Automate visa renewals',
            'Track residency status',
            'Optimize Resident workforce management'
        ],
        keywords: [
            'visa automation', 'residency compliance', 'Iqama management', 'government integration',
            'regulatory tracking', 'Resident workforce solutions'
        ]
    },
    {
        ID: 3,
        Name: 'SNAM Travel',
        Description: 'Streamline corporate travel with SAP integration, cost management, and compliance.',
        Link: '/solutions/snam-travel',
        capabilities: [
            'Travel Request Management',
            'Expense Tracking',
            'Policy Compliance',
            'Cost Optimization',
            'Automated Approvals',
            'Real-time Reporting',
            'Integration with SAP'
        ],
        integrations: ['SAP SuccessFactors'],
        useCases: [
            'Optimize business travel processes',
            'Track and control travel expenses',
            'Ensure adherence to travel policies',
            'Accelerate reimbursement cycles',
            'Leverage analytics for travel decisions'
        ],
        keywords: [
            'corporate travel', 'expense automation', 'travel compliance', 'SAP integration',
            'business travel optimization', 'real-time travel insights'
        ]
    },
    {
        ID: 4,
        Name: 'AI-Powered Recruitment',
        Description: 'Transform hiring processes with AI-driven matching, screening, and analytics.',
        Link: '/solutions/ai-powered-recruitment',
        capabilities: [
            'AI-Driven Candidate Matching',
            'Automated Screening',
            'Predictive Analytics',
            'Resume Parsing',
            'Interview Scheduling',
            'Talent Pool Management',
            'Assessment Integration'
        ],
        integrations: ['SAP SuccessFactors', 'SNAM Yaqeen'],
        useCases: [
            'Enhance recruitment efficiency',
            'Find top talent faster',
            'Reduce hiring costs',
            'Improve candidate engagement'
        ],
        keywords: [
            'AI hiring', 'intelligent recruitment', 'job matching', 'talent analytics', 'predictive hiring'
        ]
    }
];
const RecommendationForm = () => {
    const [userInput, setUserInput] = useState('');
    const [recommendationResult, setRecommendationResult] = useState(null);
    const [error, setError] = useState('');
    const findRecommendation = (input) => {
        const words = input.toLowerCase().split(/\s+/);
        const sapSolutions = solutionsData.filter(solution => solution.Name.startsWith('SAP'));
        const scoredSolutions = sapSolutions.map(solution => {
            let score = 0;
            solution.keywords.forEach(keyword => {
                words.forEach(word => {
                    if (keyword.includes(word))
                        score += 1;
                });
            });
            return { ...solution, score };
        }).sort((a, b) => b.score - a.score);
        if (scoredSolutions.length === 0 || scoredSolutions[0].score === 0) {
            return null;
        }
        const primarySolution = scoredSolutions[0];
        const complementarySolutions = solutionsData.filter(sol => sol.integrations.includes(primarySolution.Name)).map(sol => {
            let score = 0;
            sol.keywords.forEach(keyword => {
                words.forEach(word => {
                    if (keyword.includes(word))
                        score += 1;
                });
            });
            return { ...sol, score };
        }).sort((a, b) => b.score - a.score).slice(0, 2);
        return { primarySolution, complementarySolutions };
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput.trim()) {
            setError('Please provide business requirements.');
            return;
        }
        const result = findRecommendation(userInput);
        if (result) {
            setRecommendationResult(result);
            setError('');
        }
        else {
            setRecommendationResult(null);
            setError('No matching solutions found. Try refining your input.');
        }
    };
    return (<div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-center text-3xl font-bold mb-6">Find Your Solution</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea className="w-full p-4 border rounded" placeholder="Describe your needs..." value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Get Recommendation
                </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {recommendationResult && (<div className="mt-8">
                    <h2>Main Solution</h2>
                    <p>{recommendationResult.primarySolution.Name}</p>
                    <h2>Complementary Solutions</h2>
                    {recommendationResult.complementarySolutions.map((sol, index) => (<p key={index}>{sol.Name}</p>))}
                </div>)}
        </div>);
};
export default RecommendationForm;
