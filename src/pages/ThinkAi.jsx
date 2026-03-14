import { useState, useEffect } from 'react';
import { Brain, Shield, Lock, ChevronRight, Bot, Database, Zap, CheckCircle2, AlertCircle, FileCheck, Settings, TrendingUp, Server, Eye, ArrowUpRight, BarChart3 } from 'lucide-react';
const SmartNationalSolutions = () => {
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
    return (<div className="min-h-screen">
      {/* Hero Section - Kept Original */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Unleash Your Business Data's True Potential with ThinkAI
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Transform your business intelligence with advanced AI solutions tailored for Saudi organizations. We don't sell products; we sell results and solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://thinkai.sa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#36a0d0] rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all">
              Request Demo <ChevronRight className="ml-2 w-5 h-5"/>
            </a>
            <a href="/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div id="product-intro" data-animate className={`transform transition-all duration-700 ${isVisible['product-intro'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <img src="/Logo/ThinkAI.svg" alt="ThinkAI Logo" className="h-12 w-auto"/>
                  
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Next-Generation Business Intelligence Platform
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  ThinkAI transforms your business data into actionable insights, empowering Saudi organizations to make smarter, data-driven decisions for unmatched productivity and success.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {quickStats.map((stat, index) => (<div key={index} className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <stat.icon className="w-6 h-6 text-[#36a0d0] mb-2"/>
                      <div className="font-semibold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>))}
                </div>
              </div>
              <div id="product-features" data-animate className={`grid grid-cols-2 gap-6 transform transition-all duration-700 ${isVisible['product-features'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                {productFeatures.map((feature, index) => (<div key={index} className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <feature.icon className="w-8 h-8 text-[#36a0d0] mb-4 group-hover:scale-110 transition-transform"/>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Transforming Challenges into Opportunities</h2>
            <p className="text-white/90 text-lg">
              Discover how ThinkAI addresses key business intelligence challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challengeSolutions.map((item, index) => (<div key={index} id={`challenge-${index}`} data-animate className={`group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform ${isVisible[`challenge-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 mb-4">{item.challenge}</p>
                    <div className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="w-5 h-5"/>
                      <p>{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Interactive Features Showcase */}
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Your AI Toolbox</h2>
      <p className="text-gray-600 text-lg">
        Comprehensive suite of AI-powered tools for your business success
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {toolboxFeatures.map((feature, index) => (<div key={index} id={`toolbox-${index}`} data-animate className={`group h-full flex flex-col relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all transform ${isVisible[`toolbox-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
          
          <div className="flex-none mb-4">
            <feature.icon className="w-12 h-12 text-[#36a0d0] transform group-hover:scale-110 transition-transform"/>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
          </div>
          
          <ul className="space-y-2 mt-auto">
            {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center gap-2 text-gray-600">
                <ArrowUpRight className="w-4 h-4 text-[#36a0d0] flex-shrink-0"/>
                <span>{benefit}</span>
              </li>))}
          </ul>
        </div>))}
    </div>
  </div>
    </section>

    
    {/* Implementation Process */}
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Journey</h2>
      <p className="text-gray-600 text-lg">
        Simple, efficient, and tailored to your needs
      </p>
    </div>
    
    <div className="relative">
      {/* Connecting line - stays within the first and last card */}
      <div className="hidden md:block absolute top-[50%] h-[2px] bg-[#36a0d0] z-0" style={{
            left: 'calc(12.5% + 1rem)',
            right: 'calc(12.5% + 1rem)',
        }}/>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {implementationSteps.map((step, index) => (<div key={index} id={`step-${index}`} data-animate className={`relative transform transition-all duration-700 ease-out h-full
              ${isVisible[`step-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              ${index > 0 ? `delay-${index * 200}` : ''}`}>
            <div className="h-[200px] bg-white rounded-xl p-6 
                          shadow-[0_4px_20px_-4px_rgba(54,160,208,0.1)] 
                          transition-all duration-300 
                          hover:shadow-[0_8px_30px_-4px_rgba(54,160,208,0.2)] 
                          hover:-translate-y-1 z-10
                          flex flex-col">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] 
                            text-white px-4 py-1 rounded-full text-sm font-medium z-20
                            shadow-[0_4px_12px_-2px_rgba(54,160,208,0.3)]">
                Step {index + 1}
              </div>

              <div className="mt-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 line-clamp-3">{step.description}</p>
              </div>
            </div>
          </div>))}
      </div>
    </div>
  </div>
    </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] p-12">
           
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Start your AI journey today with ThinkAI and unlock your organization's full potential
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://smartnationalsolutions.sa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#36a0d0] rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all">
                  Get Started Now <ChevronRight className="ml-2 w-5 h-5"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
// Quick Stats Data
const quickStats = [
    {
        icon: TrendingUp,
        value: "40% ROI",
        label: "Average First Year"
    },
    {
        icon: CheckCircle2,
        value: "95%",
        label: "Client Satisfaction"
    },
    {
        icon: Database,
        value: "200+",
        label: "Active Deployments"
    },
    {
        icon: Shield,
        value: "100%",
        label: "Data Security"
    }
];
// Product Features
const productFeatures = [
    {
        icon: Brain,
        title: "Smart Analytics",
        description: "Advanced AI algorithms deliver deep business insights"
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Saudi-compliant data protection and encryption"
    },
    {
        icon: Zap,
        title: "Real-time Processing",
        description: "Instant insights and analytics for quick decisions"
    },
    {
        icon: Eye,
        title: "Visual Analytics",
        description: "Interactive dashboards with industry-specific views"
    }
];
// Challenge Solutions Data
const challengeSolutions = [
    {
        icon: AlertCircle,
        title: "AI Accuracy & Reliability",
        challenge: "Over-reliance on AI can lead to inaccuracies due to biases in training data.",
        solution: "ThinkAI implements robust validation and bias detection systems."
    },
    {
        icon: FileCheck,
        title: "Legal Compliance",
        challenge: "Organizations must navigate complex legal requirements to ensure compliance.",
        solution: "Built-in compliance features aligned with Saudi regulations."
    },
    {
        icon: Lock,
        title: "Data Privacy",
        challenge: "Departments handle sensitive business information requiring protection.",
        solution: "Enterprise-grade encryption and secure access controls."
    },
    {
        icon: Settings,
        title: "Data Quality",
        challenge: "Incorrect or irrelevant data can lead to poor decision-making.",
        solution: "Advanced data validation and quality assurance systems."
    }
];
// Toolbox Features Data
const toolboxFeatures = [
    {
        icon: Brain,
        title: "Intelligent Analytics",
        description: "Powered by advanced AI algorithms",
        benefits: [
            "Predictive insights",
            "Pattern recognition",
            "Anomaly detection",
            "Custom AI models"
        ]
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        description: "Real-time business analytics",
        benefits: [
            "Interactive dashboards",
            "Performance metrics",
            "Trend analysis",
            "Custom reporting"
        ]
    },
    {
        icon: Bot,
        title: "Smart Automation",
        description: "Streamline your business processes",
        benefits: [
            "Workflow automation",
            "Task optimization",
            "Resource allocation",
            "Performance tracking"
        ]
    },
    {
        icon: Server,
        title: "Data Management",
        description: "Comprehensive data handling solution",
        benefits: [
            "Data integration",
            "Quality assurance",
            "Secure storage",
            "Easy retrieval"
        ]
    }
];
// Implementation Steps
const implementationSteps = [
    {
        title: "Discovery",
        description: "We analyze your needs and create a tailored implementation plan."
    },
    {
        title: "Integration",
        description: "Seamless setup with your existing systems and data sources."
    },
    {
        title: "Training",
        description: "Comprehensive training for your team in Arabic and English."
    },
    {
        title: "Support",
        description: "Ongoing local support and optimization services."
    }
];
export default SmartNationalSolutions;
