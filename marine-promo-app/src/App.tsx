import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import LenisProvider from './components/LenisProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import JobsPage from './pages/JobsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import JobPlacement from './pages/JobPlacement';
import ScrollToTop from './components/ScrollToTop';
import ShippingFeeds from './pages/ShippingFeeds';
import CareerDevelopment from './pages/CareerDevelopment';
import CrewManagementPage from './pages/CrewManagement';
import Certification from './pages/Certification';
import Insights from './pages/Insights';
import JobDetails from './pages/JobDetails';
import TalentPoolPage from './pages/TalentPool';
import PageTitle from './components/PageTitle';

function App() {
  return (
    <LenisProvider>
      <Router>
        <ScrollToTop />
        <PageTitle />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="app-container"
        >
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobplacement" element={<JobPlacement />} />
            <Route path="/feeds" element={<ShippingFeeds />} />
            <Route path="/development" element={<CareerDevelopment />} />
            <Route path="/crewmanagement" element={<CrewManagementPage />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/talent" element={<TalentPoolPage />} />
          </Routes>

          <Footer />
        </motion.div>
      </Router>
    </LenisProvider>
  );
}

export default App;