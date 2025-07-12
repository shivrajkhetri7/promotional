import '../assets/styles/jobs-components.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import JobCard from '../components/JobCard';
import SearchFilter from '../components/SearchFilter';
import oceanBg from '../assets/images/ocean-careers-bg.jpg';
import shipSilhouette from '../assets/images/silhouette.jpg';
import { useNavigate } from 'react-router-dom';

// Types
type JobType = {
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
  urgent?: boolean;
  featured?: boolean;
};

const JobsPage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    type: '',
    location: ''
  });

  // Fetch jobs data (in a real app, this would be an API call)
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockJobs: JobType[] = [
          {
            id: 1,
            title: "Chief Engineer",
            company: "Global Shipping Co.",
            location: "International Waters",
            type: "Full-time",
            department: "Engine",
            posted: "2 days ago",
            salary: "$8,000 - $12,000/month",
            description: "We're seeking an experienced Chief Engineer to oversee all engineering operations aboard our container vessels.",
            requirements: [
              "STCW Certification",
              "Chief Engineer License (Unlimited)",
              "5+ years experience",
              "Experience with diesel-electric systems"
            ],
            urgent: true
          },
          {
            id: 2,
            title: "Deck Officer",
            company: "Oceanic Cruises",
            location: "Mediterranean",
            type: "Contract",
            department: "Deck",
            posted: "1 week ago",
            salary: "$5,500 - $7,500/month",
            description: "Deck Officer needed for luxury cruise liner operating in the Mediterranean season.",
            requirements: [
              "Officer of the Watch Certificate",
              "2+ years experience",
              "Passenger ship experience preferred"
            ],
            featured: true
          },
          {
            id: 3,
            title: "Marine Electrician",
            company: "Portside Technical",
            location: "Singapore",
            type: "Full-time",
            department: "Engine",
            posted: "3 days ago",
            salary: "$4,000 - $6,000/month",
            description: "Skilled marine electrician needed for repair and maintenance of vessel electrical systems.",
            requirements: [
              "Marine Electrical Certification",
              "3+ years experience",
              "HV/LV system knowledge"
            ]
          },
          {
            id: 4,
            title: "Chief Cook",
            company: "Merchant Marine",
            location: "Worldwide",
            type: "Contract",
            department: "Catering",
            posted: "5 days ago",
            salary: "$3,500 - $4,500/month",
            description: "Experienced chief cook needed for bulk carrier with international crew.",
            requirements: [
              "Food Safety Certification",
              "2+ years ship experience",
              "International cuisine knowledge"
            ]
          },
          {
            id: 5,
            title: "DP Operator",
            company: "Offshore Solutions",
            location: "North Sea",
            type: "Temporary",
            department: "Deck",
            posted: "1 day ago",
            salary: "$450/day",
            description: "Dynamic Positioning Operator needed for 3-month offshore project.",
            requirements: [
              "DPO Certificate",
              "1+ years DP experience",
              "Offshore experience preferred"
            ],
            urgent: true
          },
          {
            id: 6,
            title: "Junior Engineer",
            company: "Coastal Shipping",
            location: "Domestic Routes",
            type: "Full-time",
            department: "Engine",
            posted: "2 weeks ago",
            salary: "$3,200 - $4,000/month",
            description: "Entry-level position for recently certified marine engineers.",
            requirements: [
              "Engineering Watch Certificate",
              "Fresh graduates welcome",
              "Willingness to learn"
            ]
          }
        ];

        setJobs(mockJobs);
        setFilteredJobs(mockJobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term and filters
  useEffect(() => {
    let results = jobs;

    if (searchTerm) {
      results = results.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.department) {
      results = results.filter(job => job.department === filters.department);
    }

    if (filters.type) {
      results = results.filter(job => job.type === filters.type);
    }

    if (filters.location) {
      results = results.filter(job => 
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredJobs(results);
  }, [searchTerm, filters, jobs]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      department: '',
      type: '',
      location: ''
    });
  };

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
        className="jobs-hero relative h-[60vh] min-h-[500px] flex items-center justify-center text-center px-4 overflow-hidden"
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
            Maritime <span className="text-blue-300">Careers</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8"
            variants={textVariant(0.5)}
          >
            Find your next opportunity at sea with our global maritime job listings
          </motion.p>
        </motion.div>
      </section>

      {/* Jobs Listing Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="jobs-container py-16 px-4 max-w-7xl mx-auto relative"
      >

        <motion.div variants={textVariant(0.1)} className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            Current <span className="text-blue-600">Job Openings</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            whileInView={{ x: [-20, 0], opacity: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            Browse through our latest maritime job opportunities worldwide
          </motion.p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 bg-white rounded-xl shadow-md p-6"
        >
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center h-64"
          >
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </motion.div>
        )}

        {/* Jobs Grid */}
        {!loading && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <JobCard 
                  key={job.id}
                  index={index}
                  job={job}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No jobs found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Floating CTA */}
        {!loading && filteredJobs.length > 0 && (
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Can't find what you're looking for?</h3>
            <p className="text-blue-100 mb-6 text-lg">Register with us to be notified of new opportunities</p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
              onClick={()=>navigate('/talent')}
            >
              Join Our Talent Pool
            </motion.button>
          </motion.div>
        )}
      </motion.section>
    </motion.main>
  );
};

export default JobsPage;