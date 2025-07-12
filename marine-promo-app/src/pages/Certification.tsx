import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import { FileText, Shield, Anchor, Clock, Globe, BookOpen } from 'lucide-react';
import certificationBg from '../assets/images/certificate-bg.webp';

const certifications = [
  {
    title: "STCW Basic Training",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    description: "Mandatory safety training for all seafarers",
    duration: "5 days",
    validity: "5 years"
  },
  {
    title: "Advanced Firefighting",
    icon: <FileText className="w-8 h-8 text-red-500" />,
    description: "For officers and designated firefighting personnel",
    duration: "4 days",
    validity: "5 years"
  },
  {
    title: "Medical Care Onboard",
    icon: <Anchor className="w-8 h-8 text-green-500" />,
    description: "For officers in charge of medical care",
    duration: "5 days",
    validity: "5 years"
  },
  {
    title: "ECDIS Certification",
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    description: "Electronic Chart Display and Information Systems",
    duration: "5 days",
    validity: "5 years"
  },
  {
    title: "DP Operator Courses",
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    description: "Dynamic Positioning operator training",
    duration: "4-8 weeks",
    validity: "5 years"
  },
  {
    title: "Company-Specific",
    icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
    description: "Customized training for specific vessel types",
    duration: "Varies",
    validity: "Varies"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Assessment",
    description: "We review your current certifications and experience"
  },
  {
    step: "2",
    title: "Recommendation",
    description: "Our advisors suggest the required certifications"
  },
  {
    step: "3",
    title: "Training",
    description: "Complete the necessary courses at our accredited centers"
  },
  {
    step: "4",
    title: "Certification",
    description: "Receive your official certificates and documentation"
  },
  {
    step: "5",
    title: "Deployment",
    description: "Get placed on vessels matching your new qualifications"
  }
];

export default function Certification() {
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
          backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.8), rgba(0, 20, 40, 0.9)), url(${certificationBg})`,
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
            Maritime <span className="text-blue-300">Certification</span> Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8"
            variants={textVariant(0.5)}
          >
            Get certified and stay compliant with international maritime standards
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            Check Requirements
          </motion.button>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.1)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Internationally recognized training programs for maritime professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-500">Duration:</p>
                  <p className="font-medium">{cert.duration}</p>
                </div>
                <div>
                  <p className="text-gray-500">Validity:</p>
                  <p className="font-medium">{cert.validity}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Certification Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get you certified and ready for deployment
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <div className="md:w-1/2 p-6">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 hidden md:block">
                    {/* Spacer for alternating layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need help with your maritime certifications?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our certification specialists can guide you through the process
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Contact Specialist
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Download Requirements
            </motion.button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}