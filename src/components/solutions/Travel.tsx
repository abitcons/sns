import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, TrendingUp, ShieldCheck, Database, Settings, Users, Activity, BarChart3, Clock, PieChart, Zap } from 'lucide-react';
import { RefreshCw, 
  Link as LinkIcon, 
  LineChart, 
  Shield, 
  Smartphone, 
  CreditCard, 
} from 'lucide-react';


export default function SNAMTravel() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SNAM Travel - Revolutionizing Corporate Travel Management</title>
        <meta
          name="description"
          content="Streamline corporate travel management with SNAM Travel. Automate approvals, control expenses, and seamlessly integrate with SAP for an efficient travel management solution."
        />
        <meta
          name="keywords"
          content="SNAM Travel, corporate travel management, SAP integration, expense tracking, business travel automation, travel management solutions"
        />
        <link rel="canonical" href="https://www.nationalsol.com/solutions/travel" />
        <meta property="og:title" content="SNAM Travel - Revolutionizing Corporate Travel Management" />
        <meta
          property="og:description"
          content="Discover SNAM Travel: Automate travel requests, manage expenses in real-time, and optimize costs with SAP integration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nationalsol.com/solutions/travel" />
        <meta property="og:image" content="/images/snam-travel-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <motion.h1 className="text-5xl font-bold mb-6">
              SNAM Travel: Your Corporate Travel Revolution
            </motion.h1>
            <motion.p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Empower your organization with SNAM Travel—a modern, integrated solution for corporate travel management that simplifies processes, ensures compliance, and optimizes costs.
            </motion.p>
          </motion.div>
        </div>
      </section>
   {/* Introduction Section */}
   <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6ec6ab]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Next-Gen Travel Management
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Revolutionizing Corporate
                <span className="block text-primary">Travel Management</span>
              </h2>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gradient-to-r from-[#36a0d0]/10 to-[#6ec6ab]/10 p-4 rounded-xl border border-[#5bb6bb]/20"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-[#36a0d0] to-[#5bb6bb] flex items-center justify-center">
                  <svg 
                    className="h-6 w-6 text-white" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#36a0d0]">SAP Certified Solution</div>
                  <div className="text-sm text-gray-600">Verified for enterprise-grade performance and security</div>
                </div>
              </motion.div>
              
              <p className="text-lg text-gray-600">
                SNAM Travel is an innovative SAP-certified solution that transforms how organizations manage their corporate travel processes. Our platform seamlessly integrates with your existing SAP infrastructure to provide a comprehensive travel management ecosystem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { number: '95%', label: 'Process Automation' },
                  { number: '60%', label: 'Cost Reduction' },
                  { number: '24/7', label: 'System Availability' },
                  { number: '100%', label: 'SAP Compatible' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="group relative aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <img
                    src="/images/snam-travel-dashboard.png"
                    alt="SNAM Travel Dashboard"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white text-lg font-semibold">SNAM Travel Dashboard</h3>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-full h-full bg-gradient-to-r from-[#36a0d0]/20 to-[#6ec6ab]/20 rounded-2xl -z-10 transform rotate-3" />
              <div className="absolute top-4 right-4 w-full h-full bg-gradient-to-r from-[#6ec6ab]/20 to-[#36a0d0]/20 rounded-2xl -z-20 transform -rotate-3" />
            </motion.div>
          </div>
        </div>
      </section>
    {/* Features Section */}
    <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6ec6ab]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium mb-6">
              Powerful Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Features of
              <span className="bg-gradient-to-r from-primary to-[#6ec6ab] bg-clip-text text-transparent block">
                SNAM Travel
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a new era of travel management with our innovative features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: RefreshCw,
                title: "Automated Workflows",
                description: "Streamline trip requests and approvals with intelligent automation",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
              },
              {
                Icon: LinkIcon,
                title: "SAP Integration",
                description: "Seamless connection with SAP SuccessFactors and S/4HANA",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
              },
              {
                Icon: LineChart,
                title: "Real-time Tracking",
                description: "Monitor expenses and analytics in real-time",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
              },
              {
                Icon: Shield,
                title: "Enhanced Security",
                description: "Customizable roles and robust security features",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
              },
              {
                Icon: Smartphone,
                title: "Mobile Access",
                description: "Manage travel on-the-go with our mobile interface",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
              },
              {
                Icon: CreditCard,
                title: "Expense Management",
                description: "Simplified expense tracking and reimbursement",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#6ec6ab] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 flex items-center justify-center`}>
                    <feature.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  {/* Hover effect arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Multi-currency support",
                "Policy compliance checks",
                "Custom approval flows",
                "Document management",
                "Travel policy integration",
                "Reporting & analytics"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white font-medium mb-6 backdrop-blur-sm">
            Why Choose SNAM Travel
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Key Benefits for Your Organization
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transform your travel management experience with our comprehensive solution
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              Icon: TrendingUp,
              title: 'Optimize Costs',
              description: 'Track expenses in real-time and reduce unnecessary costs with advanced reporting tools.',
              stats: '30%',
              statsText: 'Average cost reduction',
            },
            {
              Icon: ShieldCheck,
              title: 'Enhanced Compliance',
              description: 'Ensure adherence to corporate policies through automated approval workflows.',
              stats: '100%',
              statsText: 'Policy compliance',
            },
            {
              Icon: LinkIcon,
              title: 'Seamless Integration',
              description: 'Integrate effortlessly with SAP SuccessFactors for unified data management.',
              stats: '24/7',
              statsText: 'System availability',
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                {/* Stats Display */}
                <div className="absolute -top-6 right-8 bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] rounded-xl px-4 py-2 text-white">
                  <div className="text-2xl font-bold">{benefit.stats}</div>
                  <div className="text-sm opacity-80">{benefit.statsText}</div>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <benefit.Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Active Users", value: "10K+" },
            { label: "Countries", value: "50+" },
            { label: "Processing Time", value: "-65%" },
            { label: "Customer Satisfaction", value: "98%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* SAP Integration Section */}
      <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute right-0 top-0 h-full w-1/2 transform translate-x-1/2 text-[#36a0d0]/5" fill="currentColor">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M20 40L40 20M0 20L20 0" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium mb-6">
            SAP Integration
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Seamless SAP SuccessFactors
            <span className="bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] bg-clip-text text-transparent block">
              Integration & Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SNAM Travel is an advanced add-on to SAP SuccessFactors, leveraging its robust API and platform capabilities to provide unparalleled travel management functionality.
          </p>
        </motion.div>

        {/* Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              Icon: Database,
              title: 'Streamlined Data Flow',
              description: 'Integrate travel requests, approvals, and expense tracking directly into your existing SAP SuccessFactors workflow.',
              features: ['Real-time synchronization', 'Automated data mapping', 'Secure data transfer'],
              gradient: 'from-[#36a0d0] to-[#5bb6bb]'
            },
            {
              Icon: LineChart,
              title: 'Real-Time Insights',
              description: 'Enhance decision-making with up-to-date travel and expense data synchronized across all systems.',
              features: ['Live analytics', 'Custom dashboards', 'Predictive insights'],
              gradient: 'from-[#5bb6bb] to-[#6ec6ab]'
            },
            {
              Icon: Settings,
              title: 'Flexible Configuration',
              description: 'Tailor the add-on to meet your organizations specific travel policies and reporting needs.',
              features: ['Custom workflows', 'Policy rules engine', 'Role-based access'],
              gradient: 'from-[#36a0d0] to-[#5bb6bb]'
            },
            {
              Icon: Users,
              title: 'Enhanced Employee Experience',
              description: 'Provide employees with a seamless interface for managing travel directly from their SAP SuccessFactors portal.',
              features: ['Single sign-on', 'Intuitive interface', 'Mobile responsive'],
              gradient: 'from-[#5bb6bb] to-[#6ec6ab]'
            },
          ].map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${integration.gradient} p-4 mb-6`}>
                  <integration.Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {integration.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {integration.description}
                </p>

                {/* Feature list */}
                <div className="space-y-3">
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "99.9%", label: "Integration uptime" },
            { value: "<0.1s", label: "Sync latency" },
            { value: "100%", label: "API coverage" },
            { value: "24/7", label: "Support available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-primary/5 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors duration-300"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0 0 L50 100 L100 0 V100 H0"
              fill="url(#analytics-gradient)"
              fillOpacity="0.05"
            />
            <defs>
              <linearGradient id="analytics-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#36a0d0" />
                <stop offset="50%" stopColor="#5bb6bb" />
                <stop offset="100%" stopColor="#6ec6ab" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Advanced Analytics
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Leverage 
            <span className="bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] bg-clip-text text-transparent px-3">
              Advanced Analytics
            </span>
            for Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock insights with SAP's advanced analytics capabilities integrated into SNAM Travel, helping you make data-driven decisions to optimize your travel processes.
          </p>
        </motion.div>

        {/* Analytics Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              Icon: LineChart,
              title: 'Real-Time Reporting',
              description: 'Access live data to monitor and control travel expenses as they occur.',
              features: [
                'Live expense tracking',
                'Automated report generation',
                'Real-time notifications'
              ],
              stats: { value: '100%', label: 'Real-time accuracy' }
            },
            {
              Icon: BarChart3,
              title: 'Custom Dashboards',
              description: 'Visualize KPIs and trends with intuitive and customizable dashboards.',
              features: [
                'Drag-and-drop widgets',
                'Interactive charts',
                'Custom metrics'
              ],
              stats: { value: '50+', label: 'Dashboard templates' }
            },
            {
              Icon: PieChart,
              title: 'Predictive Insights',
              description: 'Anticipate future trends to plan and budget effectively.',
              features: [
                'ML-powered forecasting',
                'Trend analysis',
                'Budget optimization'
              ],
              stats: { value: '95%', label: 'Prediction accuracy' }
            }
          ].map((analytics, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Icon */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] p-4">
                    <analytics.Icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Stats badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#5bb6bb] to-[#6ec6ab] rounded-full px-4 py-2 text-white text-sm">
                    <div className="font-bold">{analytics.stats.value}</div>
                    <div className="text-xs opacity-80">{analytics.stats.label}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {analytics.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {analytics.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {analytics.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Activity, value: "500K+", label: "Data points analyzed daily" },
            { icon: TrendingUp, value: "99.9%", label: "Analysis accuracy" },
            { icon: Clock, value: "<2s", label: "Average response time" },
            { icon: Zap, value: "24/7", label: "Real-time monitoring" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#36a0d0]/5 to-[#6ec6ab]/5 rounded-xl p-6 text-center hover:from-[#36a0d0]/10 hover:to-[#6ec6ab]/10 transition-colors duration-300"
            >
              <metric.icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

     {/* CTA Section */}
     <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Travel Management Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join leading organizations in simplifying travel management with SNAM Travel’s advanced features and SAP integration.
          </p>
          <button
            className="px-8 py-3 bg-[#36a0d0] text-white rounded-lg font-semibold hover:bg-opacity-90"
            onClick={() => window.location.href = 'https://store.sap.com/dcp/en/product/display-2001016814_live_v1/snam-travel'}
          >
            Visit SAP Store
          </button>
        </div>
      </section>
    </>
  );
}
