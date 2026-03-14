import { useState, useEffect } from 'react';
import { Building2, Shield, ChevronRight, Cpu, TreePine, CheckCircle2, AlertCircle, FileCheck, Settings, TrendingUp, Landmark, Eye, Bus, Wind, Lightbulb, CloudCog } from 'lucide-react';
const SmartCities = () => {
    // Animation on scroll with proper typing
    const [isVisible, setIsVisible] = useState({
        'product-intro': false,
        'product-features': false,
        ...Array.from({ length: 4 }, (_, i) => ({ [`challenge-${i}`]: false })).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
        ...Array.from({ length: 3 }, (_, i) => ({ [`toolbox-${i}`]: false })).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
        ...Array.from({ length: 4 }, (_, i) => ({ [`step-${i}`]: false })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
    });
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsVisible(prev => ({
                    ...prev,
                    [entry.target.id]: entry.isIntersecting
                }));
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('[data-animate]').forEach((element) => {
            observer.observe(element);
        });
        return () => observer.disconnect();
    }, []);
    return (<div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Smart Cities Solutions</h1>
          <p className="text-xl text-gray-600 mb-12">Transforming urban landscapes with intelligent technology</p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {cityStats.map((stat, index) => (<div key={index} className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${isVisible[`stat-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} id={`stat-${index}`} data-animate>
                <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-4"/>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cityFeatures.map((feature, index) => (<div key={index} className={`p-6 bg-gray-50 rounded-lg transition-all duration-500 ${isVisible[`feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} id={`feature-${index}`} data-animate>
                <feature.icon className="w-8 h-8 text-blue-500 mb-4"/>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cityChallenges.map((item, index) => (<div key={index} className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${isVisible[`challenge-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} id={`challenge-${index}`} data-animate>
                <item.icon className="w-8 h-8 text-blue-500 mb-4"/>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.challenge}</p>
                <div className="flex items-center text-blue-500">
                  <ChevronRight className="w-5 h-5 mr-2"/>
                  <p>{item.solution}</p>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Smart Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {citySolutions.map((solution, index) => (<div key={index} className={`p-6 bg-gray-50 rounded-lg transition-all duration-500 ${isVisible[`solution-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} id={`solution-${index}`} data-animate>
                <solution.icon className="w-8 h-8 text-blue-500 mb-4"/>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2"/>
                      <span className="text-sm">{benefit}</span>
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (<div key={index} className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${isVisible[`step-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} id={`step-${index}`} data-animate>
                <div className="text-2xl font-bold text-blue-500 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>))}
          </div>
        </div>
      </section>
    </div>);
};
// City Statistics Data
const cityStats = [
    {
        icon: TrendingUp,
        value: "30%",
        label: "Efficiency Increase"
    },
    {
        icon: CheckCircle2,
        value: "50+",
        label: "Smart Projects"
    },
    {
        icon: Landmark,
        value: "10+",
        label: "Cities Served"
    },
    {
        icon: Shield,
        value: "100%",
        label: "Data Security"
    }
];
// City Features
const cityFeatures = [
    {
        icon: Building2,
        title: "Smart Infrastructure",
        description: "Intelligent building management and monitoring systems"
    },
    {
        icon: TreePine,
        title: "Sustainable Design",
        description: "Eco-friendly urban planning and development"
    },
    {
        icon: Cpu,
        title: "IoT Integration",
        description: "Connected devices for real-time urban monitoring"
    },
    {
        icon: Eye,
        title: "Urban Analytics",
        description: "Data-driven insights for city management"
    }
];
// City Challenges and Solutions
const cityChallenges = [
    {
        icon: AlertCircle,
        title: "Urban Mobility",
        challenge: "Growing traffic congestion and transportation inefficiencies.",
        solution: "AI-powered traffic management and smart public transport systems"
    },
    {
        icon: FileCheck,
        title: "Resource Management",
        challenge: "Inefficient use of energy and water resources in urban areas.",
        solution: "Smart metering and automated resource distribution systems"
    },
    {
        icon: Settings,
        title: "Infrastructure",
        challenge: "Aging infrastructure requiring constant maintenance.",
        solution: "IoT-based predictive maintenance and real-time monitoring"
    },
    {
        icon: Shield,
        title: "Public Safety",
        challenge: "Ensuring citizen safety and emergency response efficiency.",
        solution: "Integrated surveillance and emergency response systems"
    }
];
// Smart City Solutions
const citySolutions = [
    {
        icon: Bus,
        title: "Smart Mobility",
        description: "Intelligent transportation solutions",
        benefits: [
            "Real-time traffic management",
            "Smart parking systems",
            "Public transport optimization",
            "Vehicle fleet management"
        ]
    },
    {
        icon: Lightbulb,
        title: "Smart Utilities",
        description: "Efficient resource management",
        benefits: [
            "Smart grid systems",
            "Water management",
            "Waste management",
            "Energy optimization"
        ]
    },
    {
        icon: CloudCog,
        title: "Urban Operations",
        description: "City management platform",
        benefits: [
            "Infrastructure monitoring",
            "Emergency response",
            "Public safety",
            "Asset management"
        ]
    },
    {
        icon: Wind,
        title: "Environmental Control",
        description: "Sustainable city solutions",
        benefits: [
            "Air quality monitoring",
            "Green space management",
            "Climate adaptation",
            "Pollution control"
        ]
    }
];
// Implementation Steps
const implementationSteps = [
    {
        title: "Assessment",
        description: "Comprehensive analysis of current urban infrastructure and needs assessment."
    },
    {
        title: "Planning",
        description: "Detailed implementation strategy and technology integration planning."
    },
    {
        title: "Deployment",
        description: "Phased rollout of smart city solutions and infrastructure."
    },
    {
        title: "Optimization",
        description: "Continuous monitoring, maintenance, and system optimization."
    }
];
export default SmartCities;
