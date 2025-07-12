import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  ClockIcon, 
  MapPinIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const JobDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const job = state?.job;

  if (!job) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Job not found</p>
      </div>
    );
  }

  const handleApply = () => {
    // Handle application logic here
    console.log('Applying for job:', job.id);
    // You might want to navigate to an application form
    // navigate(`/jobs/${job.id}/apply`);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Jobs
      </button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          {/* Job Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600">{job.company}</p>
            </div>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full mt-4 md:mt-0 ${departmentColors[job.department]}`}>
              {job.department}
            </span>
          </div>

          {/* Job Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 text-gray-500 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              {typeIcons[job.type]}
              <span className="ml-2">{job.type}</span>
            </div>
            <div className="flex items-center">
              <CurrencyDollarIcon className="w-5 h-5 text-gray-500 mr-2" />
              <span>{job.salary}</span>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req:any, i:number) => (
                <li key={i} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleApply}
             className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
             >
              Apply Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

// Define these constants or import them if they're shared
const departmentColors:any = {
  Deck: 'bg-blue-100 text-blue-800',
  Engine: 'bg-green-100 text-green-800',
  Catering: 'bg-purple-100 text-purple-800',
  Other: 'bg-gray-100 text-gray-800'
};

const typeIcons:any = {
  'Full-time': <BriefcaseIcon className="w-5 h-5" />,
  'Contract': <ClockIcon className="w-5 h-5" />,
  'Temporary': <BriefcaseIcon className="w-5 h-5" />
};

export default JobDetails;