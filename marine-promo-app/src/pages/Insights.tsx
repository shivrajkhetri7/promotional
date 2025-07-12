import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import { BarChart2, Globe, BookOpen, TrendingUp, Clipboard, Anchor } from 'lucide-react';
import insightsBg from '../assets/images/insights-bg.jpg';

const reports = [
  {
    title: "Global Fleet Analysis",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    description: "Comprehensive overview of vessel supply and demand dynamics",
    category: "Market Trends"
  },
  {
    title: "Bulk Carrier Outlook",
    icon: <BarChart2 className="w-8 h-8 text-green-500" />,
    description: "Quarterly analysis of dry bulk market fundamentals",
    category: "Sector Report"
  },
  {
    title: "Regulatory Update",
    icon: <Clipboard className="w-8 h-8 text-purple-500" />,
    description: "Latest IMO and regional regulatory changes",
    category: "Compliance"
  },
  {
    title: "Port Congestion",
    icon: <Anchor className="w-8 h-8 text-orange-500" />,
    description: "Global port congestion and turnaround times",
    category: "Operations"
  },
  {
    title: "Technology Trends",
    icon: <TrendingUp className="w-8 h-8 text-red-500" />,
    description: "Emerging technologies in maritime operations",
    category: "Innovation"
  },
  {
    title: "Crew Market",
    icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
    description: "Seafarer supply, demand and wage trends",
    category: "Manning"
  }
];

const updates = [
  {
    date: "15 Nov 2023",
    title: "New EEXI regulations impact on vessel operations",
    excerpt: "Analysis of how the Energy Efficiency Existing Ship Index is affecting different vessel types"
  },
  {
    date: "8 Nov 2023",
    title: "Container freight rates show seasonal softening",
    excerpt: "Latest container shipping market trends and forecast for Q1 2024"
  },
  {
    date: "1 Nov 2023",
    title: "Alternative fuels adoption accelerates",
    excerpt: "Progress report on LNG, methanol and other alternative fuel adoption across fleets"
  }
];

export default function Insights() {
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
          backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.8), rgba(0, 20, 40, 0.9)), url(${insightsBg})`,
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
            Maritime <span className="text-blue-300">Industry Insights</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8"
            variants={textVariant(0.5)}
          >
            Data-driven analysis and intelligence for maritime professionals
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            Subscribe to Updates
          </motion.button>
        </motion.div>
      </section>

      {/* Reports Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.1)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-blue-600">Reports</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular maritime market intelligence publications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  {report.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{report.title}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full mt-1">
                    {report.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{report.description}</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
              >
                View Report
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Latest Updates Section */}
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
              Latest <span className="text-blue-600">Industry Updates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent developments and analysis from our maritime experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-sm text-gray-500 mb-2">{update.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{update.title}</h3>
                <p className="text-gray-600 mb-4">{update.excerpt}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Maritime Intelligence Directly
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Subscribe to our weekly newsletter for the latest market insights
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 rounded-r-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm text-blue-200 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}