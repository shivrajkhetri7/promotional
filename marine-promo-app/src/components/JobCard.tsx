import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeIn } from '../utils/motion';
import { ClockIcon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

interface JobCardProps {
  index: number;
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: 'Full-time' | 'Contract' | 'Temporary';
    department: 'Deck' | 'Engine' | 'Catering' | 'Other';
    posted: string;
    salary: string;
    description: string;
    requirements: string[];
    responsibilities?: string[];
    benefits?: string[];
    urgent?: boolean;
    featured?: boolean;
  };
}

const departmentColors = {
  Deck: 'bg-blue-100 text-blue-800',
  Engine: 'bg-green-100 text-green-800',
  Catering: 'bg-purple-100 text-purple-800',
  Other: 'bg-gray-100 text-gray-800'
};

const typeIcons = {
  'Full-time': <BriefcaseIcon className="w-4 h-4" />,
  'Contract': <ClockIcon className="w-4 h-4" />,
  'Temporary': <BriefcaseIcon className="w-4 h-4" />
};

const JobCard = ({ index, job }: JobCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/jobs/${job.id}`, { state: { job } });
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Badges */}
      <div className="absolute top-0 left-2 flex flex-col gap-2">
        {job.urgent && (
          <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
            Urgent
          </span>
        )}
        {job.featured && (
          <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full uppercase tracking-wide">
            Featured
          </span>
        )}
      </div>

      {/* Card Header */}
      <div className="p-6 pt-8 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
            <p className="text-gray-600 font-medium">{job.company}</p>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${departmentColors[job.department]}`}>
            {job.department} 
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>

        {/* Job Meta */}
        <div className="mt-auto space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <MapPinIcon className="w-4 h-4 mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            {typeIcons[job.type]}
            <span className="ml-2">{job.type}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon className="w-4 h-4 mr-2" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <ClockIcon className="w-4 h-4 mr-2" />
            <span>Posted {job.posted}</span>
          </div>
        </div>

        {/* Requirements Preview */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
          <ul className="space-y-1">
            {job.requirements.slice(0, 3).map((req, i) => (
              <motion.li
                key={i}
                className="flex items-center text-sm text-gray-600"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                <span className="line-clamp-1">{req}</span>
              </motion.li>
            ))}
            {job.requirements.length > 3 && (
              <li className="text-xs text-gray-500 mt-1">
                +{job.requirements.length - 3} more requirements
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6">
        <motion.button
          whileHover={{
            scale: 1.02,
            backgroundColor: '#3a86ff',
            color: '#fff'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewDetails}
          className="w-full py-2 border border-blue-500 text-blue-500 font-medium rounded-lg transition-all"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default JobCard;