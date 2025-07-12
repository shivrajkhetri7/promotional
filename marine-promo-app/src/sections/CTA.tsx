import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import '../assets/styles/cats.css';

export default function CTA() {
  const [showForm, setShowForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'seafarer' // Default role
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsRegistered(true);
    }, 1500);
  };

  const resetForm = () => {
    setShowForm(false);
    setTimeout(() => {
      setIsRegistered(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'seafarer'
      });
    }, 500);
  };

  return (
    <section className="cta-section">
      {/* Wave design at top (keep existing code) */}
      <div className="cta-wave">{/* ... */}</div>

      <div className="cta-container">
        <div className="cta-content">
          {/* Keep existing title, subtitle */}

          <div className="cta-buttons">
            <motion.a
              href="/jobs"
              // Keep existing motion props
              className="cta-button primary"
            >
              Browse Jobs <FaArrowRight />
            </motion.a>
            
            <motion.button
              onClick={() => setShowForm(true)}
              // Keep existing motion props
              className="cta-button secondary"
            >
              Register Now <FaArrowRight />
            </motion.button>
          </div>

          {/* Keep contact links */}
        </div>
      </div>

      {/* Registration Form Popup */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full relative"
            >
              <button 
                onClick={resetForm}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>

              <div className="p-8">
                {!isRegistered ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 mb-2">I am a</label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="role"
                              value="seafarer"
                              checked={formData.role === 'seafarer'}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            Seafarer
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="role"
                              value="employer"
                              checked={formData.role === 'employer'}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            Employer
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Register
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-green-500 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for registering. We'll contact you shortly.
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}