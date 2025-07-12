import '../../assets/styles/serviceSection.css';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import Lenis from 'lenis';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Job Placement",
    description: "Connecting qualified maritime professionals with top shipping companies worldwide.",
    icon: "🚢",
    color: "#1a73e8",
    route: '/jobplacement'
  },
  {
    title: "Shipping Feeds",
    description: "Real-time updates on shipping routes, vessel movements, and industry news.",
    icon: "📡",
    color: "#0d47a1",
    route: '/feeds'
  },
  {
    title: "Career Development",
    description: "Training programs and certification courses to advance your maritime career.",
    icon: "📈",
    color: "#4caf50",
    route: '/development'
  },
  {
    title: "Crew Management",
    description: "Comprehensive crew planning and management solutions for vessel operators.",
    icon: "👨‍✈️",
    color: "#ff9800",
    route: '/crewmanagement'
  },
  {
    title: "Certification",
    description: "Assistance with maritime certifications and compliance documentation.",
    icon: "📜",
    color: "#9c27b0",
    route: '/certification'
  },
  {
    title: "Industry Insights",
    description: "Exclusive market reports and analysis for maritime professionals.",
    icon: "🔍",
    color: "#e91e63",
    route: '/insights'
  }
];

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Initialize Lenis for smooth horizontal scrolling
    if (servicesRef.current) {
      const wrapper = servicesRef.current;
      const content = wrapper.querySelector('.services-scroll');
      if (content) {
        const lenis = new Lenis({
          wrapper,
          content,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'horizontal',
          gestureOrientation: 'horizontal',
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
          lenis.destroy();
        };
      }
    }
  }, []);

  const handleLearnMore = (route: string) => {
    navigate(route);
  };

  return (
    <motion.section
              variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="services-section"
    >
      <div className="section-header">
        <motion.h2 
          variants={fadeIn('up', 'spring', 0.1, 0.75)}
          className="section-title"
        >
          Our Maritime Services
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 'spring', 0.2, 0.75)}
          className="section-subtitle"
        >
          Comprehensive solutions for your maritime career and operations
        </motion.p>
      </div>

      <div className="services-wrapper" ref={servicesRef}>
        <div className="services-scroll">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn('right', 'spring', index * 0.1, 0.75)}
              className="service-card"
              style={{ '--card-color': service.color } as React.CSSProperties}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLearnMore(service.route)}
            >
              <div className="card-inner" >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-footer">
                  <button 
                    className="learn-more"
                  >
                    Learn More
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}