import { motion } from 'framer-motion';
import { FaShip, FaUsers, FaGlobeAmericas, FaAward, FaChartLine } from 'react-icons/fa';
import { RiAnchorLine } from 'react-icons/ri';
import '../assets/styles/about.css';
import MARITIME_WROLD from '../assets/images/maritime-world.jpg';

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* Decorative wave at top */}
      <div className="about-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#0a1f3a"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#0a1f3a"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#0a1f3a"></path>
        </svg>
      </div>

      <div className="about-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <h2 className="about-title">
            <span className="text-gradient">Navigating Maritime Careers Since 2010</span>
          </h2>
          <p className="about-subtitle">
            Connecting talent with opportunity across the global maritime industry
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="about-mission">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mission-content"
          >
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              At MaritimePro, we bridge the gap between skilled maritime professionals and leading 
              shipping companies worldwide. Our mission is to provide exceptional recruitment 
              services while advancing careers and strengthening the maritime workforce.
            </p>
            <div className="mission-highlights">
              <div className="highlight-item">
                <RiAnchorLine className="highlight-icon" />
                <span>15+ Years Industry Experience</span>
              </div>
              <div className="highlight-item">
                <FaUsers className="highlight-icon" />
                <span>10,000+ Professionals Placed</span>
              </div>
              <div className="highlight-item">
                <FaGlobeAmericas className="highlight-icon" />
                <span>150+ Countries Served</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mission-image"
          >
            <div className="image-frame">
              <img 
                src={MARITIME_WROLD}
                className="mission-image-content" 
                alt="Maritime professionals working" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/default-about.jpg';
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="about-values">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="values-title"
          >
            Our Core Values
          </motion.h3>

          <div className="values-grid">
            {[
              {
                icon: <FaShip />,
                title: "Excellence at Sea",
                description: "We uphold the highest standards in maritime recruitment and career services."
              },
              {
                icon: <FaUsers />,
                title: "People First",
                description: "Our professionals are at the heart of everything we do."
              },
              {
                icon: <FaAward />,
                title: "Integrity",
                description: "Honest, transparent dealings with all our clients and candidates."
              },
              {
                icon: <FaGlobeAmericas />,
                title: "Global Perspective",
                description: "Worldwide network with local market expertise."
              },
              {
                icon: <FaChartLine />,
                title: "Continuous Growth",
                description: "Committed to the ongoing development of maritime professionals."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="value-card"
                whileHover={{ y: -10 }}
              >
                <div className="value-icon" style={{ color: "#1a73e8" }}>
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="about-history">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="history-content"
          >
            <h3 className="history-title">Our Journey</h3>
            <div className="timeline">
              {[
                {
                  year: "2010",
                  event: "Founded in Singapore with 5 team members"
                },
                {
                  year: "2014",
                  event: "Expanded to European markets"
                },
                {
                  year: "2017",
                  event: "Launched specialized training programs"
                },
                {
                  year: "2020",
                  event: "Reached 5,000 successful placements"
                },
                {
                  year: "2023",
                  event: "Recognized as Top Maritime Recruiter by IMO"
                }
              ].map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-event">{item.event}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}