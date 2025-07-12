import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { RiSailboatLine } from 'react-icons/ri';
import '../assets/styles/footer.css'; // Make sure to create this CSS file

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Our Services", "Careers", "Blog", "Testimonials"]
    },
    {
      title: "Services",
      links: ["Crew Placement", "Vessel Management", "Training", "Certification", "Consulting"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "FAQs", "Shipping Status", "Documentation"]
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="footer-section"
    >
      {/* Wave design at top */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#0a1f3a"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#0a1f3a"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#0a1f3a"
          ></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <RiSailboatLine className="footer-logo-icon" />
              <span className="footer-logo-text">Maritime<span>Pro</span></span>
            </div>
            <p className="footer-description">
              Connecting maritime professionals with global opportunities since 2010. 
              Our mission is to bridge the gap between talent and opportunity in the merchant navy.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="footer-links">
              <h3 className="footer-title">{section.title}</h3>
              <ul>
                {section.links.map((link, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a href="#">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <ul>
              <li>
                <MdLocationOn className="contact-icon" />
                <span>123 Maritime Plaza, Oceanview City, CA 90210</span>
              </li>
              <li>
                <MdPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <MdEmail className="contact-icon" />
                <span>contact@maritimepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} MaritimePro. All rights reserved.</p>
            <p>Proudly serving the maritime community</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}