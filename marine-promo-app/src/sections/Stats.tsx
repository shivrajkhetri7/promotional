import { motion } from 'framer-motion';
import { FaShip, FaUserTie, FaGlobe, FaAward } from 'react-icons/fa';
import '../assets/styles/stats.css'; // We'll create this next

const stats = [
  {
    id: 1,
    value: "10K+",
    label: "Maritime Professionals",
    icon: <FaUserTie />,
    color: "#3b82f6" // blue-500
  },
  {
    id: 2,
    value: "500+",
    label: "Shipping Partners",
    icon: <FaShip />,
    color: "#2563eb" // blue-600
  },
  {
    id: 3,
    value: "150+",
    label: "Global Locations",
    icon: <FaGlobe />,
    color: "#10b981" // green-500
  },
  {
    id: 4,
    value: "98%",
    label: "Success Rate",
    icon: <FaAward />,
    color: "#f59e0b" // amber-500
  }
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="stats-header"
        >
          <h2 className="stats-title">Trusted by the Maritime Industry</h2>
          <p className="stats-description">
            Join thousands of professionals and companies navigating their careers with us
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="stat-card"
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <h3 className="stat-value" style={{ color: stat.color }}>
                {stat.value}
              </h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}