import '../assets/styles/job-placement.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import { BriefcaseIcon, ClockIcon, AcademicCapIcon, CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import jobPlacementImage from '../assets/images/job-placement-process.jpeg'
import successStoryImage from '../assets/images/seafarer-success.jpg';

const steps = [
  {
    title: "Registration & Profile Creation",
    description: "Complete our online registration and build your professional maritime profile.",
    icon: <BriefcaseIcon className="h-8 w-8 text-blue-500" />,
    duration: "1-2 days"
  },
  {
    title: "Document Verification",
    description: "Our team verifies your certifications, licenses, and work experience.",
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />,
    duration: "2-3 days"
  },
  {
    title: "Skill Assessment",
    description: "We evaluate your competencies through tests and interviews.",
    icon: <AcademicCapIcon className="h-8 w-8 text-purple-500" />,
    duration: "1-2 days"
  },
  {
    title: "Job Matching",
    description: "We match your profile with suitable vacancies from our partner companies.",
    icon: <ArrowPathIcon className="h-8 w-8 text-yellow-500" />,
    duration: "3-5 days"
  },
  {
    title: "Interview Preparation",
    description: "We provide coaching and mock interviews to prepare you for employer screenings.",
    icon: <ClockIcon className="h-8 w-8 text-orange-500" />,
    duration: "2-3 days"
  },
  {
    title: "Placement & Deployment",
    description: "Successful candidates receive contracts and deployment instructions.",
    icon: <CheckCircleIcon className="h-8 w-8 text-blue-500" />,
    duration: "Varies"
  }
];

const requirements = [
  "Valid STCW certifications",
  "Updated medical certificate (ENG 1 or equivalent)",
  "Seafarer's Identification Document (SID)",
  "Passport with minimum 1 year validity",
  "Professional references",
  "Completed training records",
  "Security awareness training certificate"
];

const benefits = [
  "Access to global shipping companies",
  "Competitive salary packages",
  "Transparent employment terms",
  "Career progression guidance",
  "24/7 support during contracts",
  "Replacement guarantee in case of early termination"
];

export default function JobPlacementPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Maritime Job Placement Program</h1>
            <p className="text-xl md:text-2xl mb-8">
              Your complete guide to securing quality employment in the maritime industry
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={textVariant(0.2)} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">6-Step</span> Placement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From registration to deployment, we guide you through every step of your maritime career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className="mt-16 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={jobPlacementImage} 
                  alt="Job placement process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Understanding the Maritime Hiring Cycle
                </h3>
                <p className="text-gray-600 mb-6">
                  The maritime industry operates on specific hiring cycles. Most commercial vessels recruit 2-3 months before 
                  scheduled crew changes. Our placement specialists will help you time your applications perfectly to match 
                  these cycles and maximize your employment opportunities.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Pro Tip:</h4>
                  <p className="text-blue-700">
                    Begin your application process at least 4 months before your desired deployment date to account for 
                    document processing and employer screening periods.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Essential <span className="text-blue-600">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600">
              Prepare these documents to ensure a smooth placement process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {requirements.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-gray-50 p-4 rounded-lg"
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Document Validity Reminder
              </h3>
              <p className="text-blue-700">
                Most maritime certificates have 5-year validity periods, but some require more frequent renewal. 
                Our team will review your documents and notify you of any expiring credentials that need attention 
                before we can proceed with your placement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our <span className="text-blue-600">Placement Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              We go beyond basic recruitment to support your entire maritime career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit}</h3>
                <p className="text-gray-600">
                  {index === 0 && "We partner with over 200 shipping companies worldwide, giving you access to the best opportunities."}
                  {index === 1 && "Our negotiated contracts ensure you receive industry-standard compensation with clear overtime policies."}
                  {index === 2 && "No hidden fees or unexpected deductions - we ensure complete transparency in all employment terms."}
                  {index === 3 && "Regular performance reviews and training recommendations to help you advance your career."}
                  {index === 4 && "Our team is available around the clock to assist with any issues during your contract period."}
                  {index === 5 && "If a position ends prematurely through no fault of your own, we'll find you a comparable replacement."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={textVariant(0.2)} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Success <span className="text-yellow-300">Stories</span>
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Hear from seafarers who advanced their careers through our placement program
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={successStoryImage} 
                    alt="Successful seafarer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3 text-gray-800">
                  <blockquote className="mb-6">
                    <p className="text-xl italic mb-4">
                      "After struggling to find quality contracts on my own, I registered with Maritime Solutions. 
                      Within 3 weeks they secured me a position as Second Engineer on a chemical tanker with a 20% 
                      higher salary than my previous role. Their support during the entire contract period was exceptional."
                    </p>
                    <footer className="font-semibold">
                      <cite className="not-italic">— Michael Rodriguez</cite>, <span className="text-blue-600">Second Engineer</span>
                    </footer>
                  </blockquote>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Previous Position:</p>
                      <p className="font-medium">Third Engineer</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Salary Increase:</p>
                      <p className="font-medium">20% Higher</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Placement Time:</p>
                      <p className="font-medium">3 Weeks</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Vessel Type:</p>
                      <p className="font-medium">Chemical Tanker</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-blue-600 rounded-2xl shadow-xl overflow-hidden text-center"
          >
            <div className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Maritime Career?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our placement specialists are standing by to help you find your perfect position at sea.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                >
                  Apply Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                >
                  Speak to an Advisor
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}