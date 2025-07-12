import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, FunnelIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filters: {
    department: string;
    type: string;
    location: string;
  };
  onFilterChange: (name: string, value: string) => void;
  onReset: () => void;
}

const departmentOptions = [
  { value: '', label: 'All Departments' },
  { value: 'Deck', label: 'Deck' },
  { value: 'Engine', label: 'Engine' },
  { value: 'Catering', label: 'Catering' },
  { value: 'Other', label: 'Other' }
];

const typeOptions = [
  { value: '', label: 'All Types' },
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Contract', label: 'Contract' },
  { value: 'Temporary', label: 'Temporary' }
];

const SearchFilter = ({ 
  searchTerm, 
  onSearchChange, 
  filters, 
  onFilterChange, 
  onReset 
}: SearchFilterProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hasFilters, setHasFilters] = useState(false);

  useEffect(() => {
    const filterApplied = Object.values(filters).some(val => val !== '') || searchTerm !== '';
    setHasFilters(filterApplied);
  }, [filters, searchTerm]);

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search jobs by title, company or keywords"
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
          value={searchTerm}
          onChange={onSearchChange}
        />
        {hasFilters && (
          <motion.button
            onClick={onReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <ArrowPathIcon className="h-5 w-5 text-gray-400 hover:text-blue-500" />
          </motion.button>
        )}
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <FunnelIcon className="h-5 w-5 mr-2 text-gray-400" />
          Filters
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)}></div>
            <motion.div 
              className="relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Filters */}
              <div className="mt-4 px-4 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Department</h3>
                  <div className="space-y-2">
                    {departmentOptions.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`mobile-department-${option.value}`}
                          name="department"
                          type="radio"
                          className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                          checked={filters.department === option.value}
                          onChange={() => onFilterChange('department', option.value)}
                        />
                        <label htmlFor={`mobile-department-${option.value}`} className="ml-3 text-sm text-gray-700">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Job Type</h3>
                  <div className="space-y-2">
                    {typeOptions.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`mobile-type-${option.value}`}
                          name="type"
                          type="radio"
                          className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                          checked={filters.type === option.value}
                          onChange={() => onFilterChange('type', option.value)}
                        />
                        <label htmlFor={`mobile-type-${option.value}`} className="ml-3 text-sm text-gray-700">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Location</h3>
                  <input
                    type="text"
                    placeholder="Filter by location"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    value={filters.location}
                    onChange={(e) => onFilterChange('location', e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Desktop Filters */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              id="department"
              name="department"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.department}
              onChange={(e) => onFilterChange('department', e.target.value)}
            >
              {departmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <select
              id="type"
              name="type"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.type}
              onChange={(e) => onFilterChange('type', e.target.value)}
            >
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Filter by location"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={filters.location}
              onChange={(e) => onFilterChange('location', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;