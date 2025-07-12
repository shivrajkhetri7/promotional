import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import oceanBg from '../assets/images/ocean-careers-bg.jpg';
import crew1 from '../assets/images/crew-1.jpg';
import crew2 from '../assets/images/crew-2.jpg';
import crew3 from '../assets/images/crew-3.jpg';
import crew4 from '../assets/images/crew-4.jpg';
import crew5 from '../assets/images/crew-5.jpg';
import crew6 from '../assets/images/crew-6.jpg';
import '../assets/styles/talent-pool.css';

const crewPhotos = [
  { id: 1, src: crew1, alt: "Deck crew working together" },
  { id: 2, src: crew2, alt: "Captain on bridge" },
  { id: 3, src: crew3, alt: "Engine room team" },
  { id: 4, src: crew4, alt: "Navigation training" },
  { id: 5, src: crew5, alt: "Safety drill practice" },
  { id: 6, src: crew6, alt: "Crew enjoying downtime" },
];

const benefits = [
  {
    icon: "🚢",
    title: "Priority Job Alerts",
    description: "Be first to know about new opportunities matching your profile"
  },
  {
    icon: "📩",
    title: "Direct Recruitment",
    description: "Get contacted directly by employers seeking your skills"
  },
  {
    icon: "📈",
    title: "Career Advancement",
    description: "Access to training programs and promotion opportunities"
  },
  {
    icon: "🌎",
    title: "Global Opportunities",
    description: "Connect with employers worldwide"
  }
];

export default function TalentPoolPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Hero Section */}
      <section 
        className="talent-hero relative h-[60vh] min-h-[500px] flex items-center justify-center text-center px-4 overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.7), rgba(0, 20, 40, 0.9)), url(${oceanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
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
            Join Our <span className="text-blue-300">Talent Pool</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8"
            variants={textVariant(0.5)}
          >
            Connect with top maritime employers and advance your career at sea
          </motion.p>
          <motion.div variants={textVariant(0.7)}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Register Now
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="benefits-section py-16 px-4 max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.1)} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            Why Join Our <span className="text-blue-600">Talent Pool</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            whileInView={{ x: [-20, 0], opacity: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            Get access to exclusive opportunities and career development resources
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="benefit-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Photo Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="gallery-section py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-blue-600">Maritime</span> Community
          </motion.h2>
          
          <div className="photo-grid grid grid-cols-2 md:grid-cols-3 gap-4">
            {crewPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Registration Form Section */}
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="form-section py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div variants={textVariant(0.1)} className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="text-blue-300">Join</span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto"
              whileInView={{ x: [-20, 0], opacity: [0.8, 1] }}
              transition={{ duration: 0.5 }}
            >
              Complete your profile to get started with our talent pool
            </motion.p>
          </motion.div>

          <motion.form
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            className="bg-white rounded-xl shadow-2xl p-8 md:p-10 text-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Position/Rank</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Chief Engineer"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Years of Experience</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select</option>
                  <option>0-2 years</option>
                  <option>3-5 years</option>
                  <option>6-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 mb-2">Upload CV/Resume</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-gray-500 mb-2">Drag and drop your file here or</p>
                <button 
                  type="button"
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  Browse Files
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all"
              onClick={() => alert('Thank you for joining our talent pool!')}
            >
              Join Talent Pool
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </motion.main>
  );
}