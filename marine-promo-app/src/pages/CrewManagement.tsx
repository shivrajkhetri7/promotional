import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import { Users, ClipboardList, Clock, Shield, BarChart2, Settings } from 'lucide-react';
import crewManagementBg from '../assets/images/crew-management-bg.jpg';

const services = [
  {
    title: "Crew Planning",
    icon: <Users className="w-8 h-8 text-blue-500" />,
    description: "Strategic workforce planning to optimize crew rotations",
    features: [
      "Vessel-specific crew requirements",
      "Leave rotation management",
      "Succession planning"
    ]
  },
  {
    title: "Compliance Tracking",
    icon: <ClipboardList className="w-8 h-8 text-green-500" />,
    description: "Ensure all crew certifications and documents are current",
    features: [
      "Automated expiry alerts",
      "Document repository",
      "Regulatory reporting"
    ]
  },
  {
    title: "Performance Management",
    icon: <BarChart2 className="w-8 h-8 text-purple-500" />,
    description: "Monitor and improve crew performance metrics",
    features: [
      "KPIs tracking",
      "Appraisal system",
      "Training needs analysis"
    ]
  },
  {
    title: "Safety Management",
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    description: "Implement and monitor safety protocols",
    features: [
      "Incident reporting",
      "Safety audits",
      "Emergency preparedness"
    ]
  },
  {
    title: "Crew Scheduling",
    icon: <Clock className="w-8 h-8 text-red-500" />,
    description: "Efficient scheduling across your fleet",
    features: [
      "Automated relief planning",
      "Port rotation optimization",
      "Travel coordination"
    ]
  },
  {
    title: "System Integration",
    icon: <Settings className="w-8 h-8 text-yellow-500" />,
    description: "Seamless integration with your existing systems",
    features: [
      "API connectivity",
      "Data synchronization",
      "Custom workflow automation"
    ]
  }
];

export default function CrewManagementPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center px-4 overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.8), rgba(0, 20, 40, 0.9)), url(${crewManagementBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={textVariant(0.3)}
          >
            Professional <span className="text-blue-300">Crew Management</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8"
            variants={textVariant(0.5)}
          >
            Comprehensive solutions for efficient vessel crew operations
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            Request Demo
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.1)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Crew Management</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end services to optimize your maritime workforce
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center text-sm text-gray-600"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Crew Management?</h2>
                <p className="text-gray-600 mb-6">
                  We help shipping companies reduce operational costs while maintaining compliance and crew satisfaction.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Operational Efficiency</h3>
                      <p className="text-gray-600">Reduce crew change costs by up to 30% through optimized planning</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Regulatory Compliance</h3>
                      <p className="text-gray-600">Never miss certification renewals with our automated tracking system</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-blue-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Key Metrics We Improve</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-700 p-4 rounded-lg">
                    <p className="text-3xl font-bold mb-2">25%</p>
                    <p className="text-blue-100">Reduction in crew change costs</p>
                  </div>
                  <div className="bg-blue-700 p-4 rounded-lg">
                    <p className="text-3xl font-bold mb-2">99%</p>
                    <p className="text-blue-100">Document compliance rate</p>
                  </div>
                  <div className="bg-blue-700 p-4 rounded-lg">
                    <p className="text-3xl font-bold mb-2">40%</p>
                    <p className="text-blue-100">Faster crew deployment</p>
                  </div>
                  <div className="bg-blue-700 p-4 rounded-lg">
                    <p className="text-3xl font-bold mb-2">90%+</p>
                    <p className="text-blue-100">Crew retention rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to optimize your crew operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our maritime HR specialists are ready to assist you
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}