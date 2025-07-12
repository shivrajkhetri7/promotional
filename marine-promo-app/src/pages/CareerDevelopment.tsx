import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import { BookOpen, GraduationCap, Briefcase, Globe, Users, Award } from 'lucide-react';
import trainingImage from '../assets/images/maritime-training.jpg';

const programs = [
  {
    title: "STCW Training",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    description: "Mandatory safety training for all seafarers",
    duration: "5-10 days",
    level: "Entry"
  },
  {
    title: "Officer Certification",
    icon: <GraduationCap className="w-8 h-8 text-green-500" />,
    description: "Advanced programs for deck and engine officers",
    duration: "6-24 months",
    level: "Intermediate"
  },
  {
    title: "DP Operator Courses",
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    description: "Dynamic Positioning operator training and certification",
    duration: "4-8 weeks",
    level: "Advanced"
  },
  {
    title: "Management Level",
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    description: "Preparation for Chief Mate/Master and Chief Engineer roles",
    duration: "3-6 months",
    level: "Management"
  },
  {
    title: "Specialized Training",
    icon: <Users className="w-8 h-8 text-red-500" />,
    description: "Crowd management, security awareness, and other specialized skills",
    duration: "1-2 weeks",
    level: "Varies"
  },
  {
    title: "Company-Specific",
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    description: "Customized training programs for shipping companies",
    duration: "Custom",
    level: "All Levels"
  }
];

const testimonials = [
  {
    quote: "The Chief Engineer course completely transformed my career. Within a year I was promoted to Second Engineer.",
    name: "Michael Rodriguez",
    position: "Second Engineer"
  },
  {
    quote: "Our entire bridge team completed the ECDIS training and saw immediate improvements in navigation safety.",
    name: "Captain Sarah Lim",
    position: "Master Mariner"
  },
  {
    quote: "The DP training gave me the qualifications needed to work on offshore support vessels with a 40% salary increase.",
    name: "David Chen",
    position: "DP Operator"
  }
];

export default function CareerDevelopment() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={textVariant(0.3)}
          >
            Maritime <span className="text-yellow-300">Career Development</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            variants={textVariant(0.5)}
          >
            Advance your maritime career with our comprehensive training and certification programs
          </motion.p>
          <motion.div variants={textVariant(0.7)}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Browse Programs
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.1)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Training Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From entry-level certifications to advanced specialized training
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full mt-1">
                    {program.level} Level
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{program.duration}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Training Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Training Methodology</h2>
                <p className="text-gray-600 mb-6">
                  We combine theoretical knowledge with practical, hands-on training to ensure you're fully prepared for real-world maritime challenges.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">Simulator-based training with state-of-the-art equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">Industry-experienced instructors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">Internationally recognized certifications</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={trainingImage} 
                  alt="Maritime training" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from maritime professionals who advanced their careers with our programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to advance your maritime career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our career advisors can help you choose the right training path
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Contact an Advisor
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}