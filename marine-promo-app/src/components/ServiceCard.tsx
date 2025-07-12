import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import '../assets/styles/service-card.css'
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
  color?: string;
  route?: string;
}

const ServiceCard = ({ index, title, description, icon, features, image, color,route }: ServiceCardProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
      whileHover={{ y: -10 }}
    >
      <div 
        className="h-48 relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-70"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-8xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {!image && icon}
          </motion.span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mt-auto">
          <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <motion.li 
                key={i}
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
        
        <motion.button
          whileHover={{ 
            scale: 1.03,
            backgroundColor: color,
            color: '#fff'
          }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 border border-blue-500 text-blue-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-all self-start"
          style={{ borderColor: color, color: color }}
          onClick={()=>navigate(route || '/services')}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;