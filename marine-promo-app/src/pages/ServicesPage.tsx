import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import {  staggerContainer, textVariant } from '../utils/motion';
import oceanBg from '../assets/images/ocean-bg.jpg';
import wavePattern from '../assets/images/wave.png';
import CrewManagement from '../assets/images/CrewManagement.jpg';
import VesselManagment from '../assets/images/VesselManagement.jpg';
import TrainingPlacement from '../assets/images/TrainingPlacement.jpg';

const services = [
  {
    title: "Crew Placement",
    description: "We connect qualified seafarers with reputable shipping companies worldwide.",
    icon: "👨‍✈️",
    features: [
      "Deck Officers",
      "Engine Officers",
      "Ratings",
      "Specialized Crew"
    ],
    image: CrewManagement,
    route: '/crewmanagement',
    color: "#3a86ff"
  },
  {
    title: "Vessel Management",
    description: "Comprehensive technical and crew management services for ship owners.",
    icon: "🚢",
    features: [
      "Technical Supervision",
      "Maintenance Planning",
      "Dry Dock Management",
      "Safety Compliance"
    ],
    image: VesselManagment,
    route: '/vesselmanagement',
    color: "#8338ec"
  },
  {
    title: "Training & Certification",
    description: "STCW courses and specialized maritime training programs.",
    icon: "🎓",
    features: [
      "STCW Basic Training",
      "Advanced Firefighting",
      "ECDIS Certification",
      "DP Training"
    ],
    image: TrainingPlacement,
     route: '/certification',
    color: "#ff006e"
  }
];

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-10"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img 
          src={wavePattern} 
          alt="wave pattern" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Section */}
      <section 
        className="services-hero relative h-[70vh] min-h-[500px] flex items-center justify-center text-center px-4 overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.7), rgba(0, 20, 40, 0.9)), url(${oceanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >

        {/* Animated bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            initial={{ 
              y: Math.random() * 500 + 500,
              x: Math.random() * 1000 - 500,
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5
            }}
            animate={{ 
              y: -100,
              opacity: [0.2, 0.5, 0],
              transition: { 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
          />
        ))}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hero-content max-w-4xl mx-auto relative z-10"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={textVariant(0.3)}
          >
            Maritime <span className="text-blue-300">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8"
            variants={textVariant(0.5)}
          >
            Comprehensive solutions for your maritime career and vessel operations
          </motion.p>
          <motion.div variants={textVariant(0.7)}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="services-container py-20 px-4 max-w-7xl mx-auto relative"
      >

        <motion.div variants={textVariant(0.1)} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-blue-600">Professional</span> Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            whileInView={{ x: [-20, 0], opacity: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            Delivering excellence in maritime services with over 20 years of industry experience
          </motion.p>
        </motion.div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              {...service}
            />
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated circles */}
          <motion.div 
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-400 opacity-20"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-blue-300 opacity-20"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <h3 className="text-3xl font-bold text-white mb-4">Need Custom Maritime Solutions?</h3>
          <p className="text-blue-100 mb-6 text-lg">We tailor our services to meet your specific requirements</p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}