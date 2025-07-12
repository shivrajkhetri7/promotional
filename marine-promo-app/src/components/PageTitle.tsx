import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Maritime Careers & Crew Management',
  '/services': 'Our Services | Maritime Professionals',
  '/jobs': 'Job Opportunities | Maritime Careers',
  '/jobs/:id': 'Job Details | Maritime Careers',
  '/contact': 'Contact Us | Maritime Professionals',
  '/about': 'About Us | Maritime Careers',
  '/jobplacement': 'Job Placement Services | Maritime Careers',
  '/feeds': 'Shipping Industry News | Maritime Professionals',
  '/development': 'Career Development | Maritime Careers',
  '/crewmanagement': 'Crew Management Solutions',
  '/certification': 'Maritime Certification Programs',
  '/insights': 'Industry Insights | Maritime Professionals',
  '/talent': 'Join Our Talent Pool | Maritime Careers'
};

export default function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const matchedPath = Object.keys(pageTitles).find(path => {
      if (path.includes(':id')) {
        return location.pathname.startsWith(path.split(':id')[0]);
      }
      return path === location.pathname;
    });

    const title = matchedPath ? pageTitles[matchedPath] : 'Maritime Careers';
    document.title = title;
  }, [location]);

  return null;
}