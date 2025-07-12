import "../assets/styles/testimonialsSection.css"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import DEFAULT_IMAGE from '../assets/images/default.png';

const testimonials = [
  {
    id: 1,
    name: "Captain James Wilson",
    role: "Master Mariner, Oceanic Tankers",
    content: "MaritimePro connected me with the perfect vessel after just two weeks of searching. Their industry knowledge and network are unmatched in the maritime recruitment space.",
    rating: 5,
    image: "captain.jpg"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Chief Engineer, Global Container Lines",
    content: "The training programs recommended by MaritimePro helped me upgrade my certifications and land a promotion. Their career guidance is worth its weight in gold.",
    rating: 5,
    image: "engineer.jpg"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Deck Officer, Royal Cruise Lines",
    content: "I've used several maritime job platforms, but none compare to the quality of opportunities MaritimePro provides. They truly understand seafarers' needs.",
    rating: 4,
    image: "officer.jpg"
  },
  {
    id: 4,
    name: "Elena Petrov",
    role: "Port Manager, Black Sea Shipping",
    content: "For shore-based maritime positions, MaritimePro offers the most comprehensive listings. We've hired three excellent candidates through their platform this year.",
    rating: 5,
    image: "manager.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const testimonialsRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="testimonials-section"
      ref={testimonialsRef}
    >
      <div className="section-header">
        <motion.div variants={textVariant(0.1)}>
          <h2 className="section-title">Seafarer Testimonials</h2>
          <p className="section-subtitle">Hear from maritime professionals who've advanced their careers with us</p>
        </motion.div>
      </div>

      <div className="testimonials-container">
        <motion.div 
          className="testimonial-track"
          animate={{
            x: -currentIndex * 100 + '%'
          }}
          transition={{ type: 'spring', damping: 30 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <img 
                    // src={`../../assets/images/testimonials/${testimonial.image}`} 
                    src={DEFAULT_IMAGE}
                    alt={testimonial.name} 
                    onError={(e:any) => {
                      e.target.src = {DEFAULT_IMAGE};
                    }}
                  />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={i < testimonial.rating ? 'filled' : ''}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="testimonial-controls">
        <button onClick={prevTestimonial} className="nav-button">
          <FaChevronLeft />
        </button>
        
        <div className="pagination-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        
        <button onClick={nextTestimonial} className="nav-button">
          <FaChevronRight />
        </button>
      </div>
    </motion.section>
  );
}