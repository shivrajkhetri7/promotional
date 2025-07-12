import '../assets/styles/jobHighlights.css';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import lenis from 'lenis';
import { FaShip, FaFilter, FaSearch, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';
import Lenis from 'lenis';


type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  category: string;
  requirements: string[];
  featured: boolean;
};

const jobCategories = [
  "All",
  "Deck Officers",
  "Engine Officers",
  "Ratings",
  "Specialized Crew",
  "Shore Staff"
];

const mockJobs: Job[] = [
  {
    id: 1,
    title: "Chief Engineer",
    company: "Oceanic Tankers Ltd",
    location: "International Waters",
    type: "Contract",
    salary: "$8,000 - $12,000/month",
    posted: "2 days ago",
    category: "Engine Officers",
    requirements: ["COC Class 1", "5+ years experience", "Tanker experience"],
    featured: true
  },
  {
    id: 2,
    title: "Second Officer",
    company: "Global Container Lines",
    location: "Asia-Europe Route",
    type: "Permanent",
    salary: "$5,000 - $7,000/month",
    posted: "1 week ago",
    category: "Deck Officers",
    requirements: ["COC Class 2", "ECDIS Certified"],
    featured: false
  },
  {
    id: 3,
    title: "Electrical Officer",
    company: "Royal Cruise Lines",
    location: "Caribbean",
    type: "Contract",
    salary: "$6,500 - $8,500/month",
    posted: "3 days ago",
    category: "Engine Officers",
    requirements: ["COC Class 2", "High Voltage Certification"],
    featured: true
  },
  {
    id: 4,
    title: "Deck Cadet",
    company: "Pacific Maritime Academy",
    location: "Training Vessel",
    type: "Training",
    salary: "Stipend Provided",
    posted: "5 days ago",
    category: "Deck Officers",
    requirements: ["STCW Certified", "Enrolled in program"],
    featured: false
  },
  {
    id: 5,
    title: "Port Captain",
    company: "Harbor Management Inc",
    location: "Houston, USA",
    type: "Permanent",
    salary: "$120,000 - $150,000/year",
    posted: "2 weeks ago",
    category: "Shore Staff",
    requirements: ["Master Mariner License", "10+ years experience"],
    featured: true
  },
  {
    id: 6,
    title: "Able Seaman",
    company: "Arctic Shipping Co",
    location: "Northern Routes",
    type: "Contract",
    salary: "$3,500 - $4,500/month",
    posted: "1 day ago",
    category: "Ratings",
    requirements: ["AB Certification", "Ice navigation experience"],
    featured: false
  }
];

export default function JobHighlights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");


  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const jobsRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    if (jobsRef.current) {
      const wrapper = jobsRef.current as HTMLElement;
      const content = wrapper.querySelector('.jobs-scroll') as HTMLElement | null;
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

        function raf(time: any) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Clean up
        return () => {
          lenis.destroy();
        };
      }
    }

    // Simulate API fetch
    setTimeout(() => {
      setJobs(mockJobs);
      setLoading(false);
    }, 1000);

    // No cleanup needed here since Lenis instance is only created if jobsRef.current and content exist
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = activeCategory === "All" || job.category === activeCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="job-highlights-section"
    >
      <div className="section-header">
        <motion.div variants={textVariant(0.1)}>
          <h2 className="section-title">Featured Maritime Jobs</h2>
          <p className="section-subtitle">Explore career opportunities across the global merchant navy</p>
        </motion.div>
      </div>

      <div className="job-filters">
        <motion.div
          variants={fadeIn('right', 'spring', 0.1, 0.75)}
          className="search-container"
        >
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search jobs or companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'spring', 0.1, 0.75)}
          className="category-filters"
        >
          <FaFilter className="filter-icon" />
          {jobCategories.map((category) => (
            <button
              key={category}
              className={`category-tag ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading maritime jobs...</p>
        </div>
      ) : (
        <div className="jobs-wrapper" ref={jobsRef}>
          <div className="jobs-scroll">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                  className={`job-card ${job.featured ? 'featured' : ''}`}
                  whileHover={{ y: -10 }}
                >
                  <div className="card-header">
                    {job.featured && (
                      <div className="featured-badge">Featured</div>
                    )}
                    <FaShip className="job-icon" />
                    <div className="job-meta">
                      <span className="job-type">{job.type}</span>
                      <span className="job-posted">{job.posted}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <h3>{job.title}</h3>
                    <p className="company">{job.company}</p>

                    <div className="job-details">
                      <div className="detail-item">
                        <FaMapMarkerAlt />
                        <span>{job.location}</span>
                      </div>
                      <div className="detail-item">
                        <FaMoneyBillWave />
                        <span>{job.salary}</span>
                      </div>
                      <div className="detail-item">
                        <FaCalendarAlt />
                        <span>{job.category}</span>
                      </div>
                    </div>

                    <div className="requirements">
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="card-footer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="apply-button"
                    >
                      Apply Now
                    </motion.button>
                    <button className="save-button">
                      Save Job
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-results">
                <h3>No jobs found matching your criteria</h3>
                <p>Try adjusting your filters or search term</p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
}