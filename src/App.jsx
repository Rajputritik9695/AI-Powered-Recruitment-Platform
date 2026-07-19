import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import JobListings from './components/JobListings';
import ApplicationModal from './components/ApplicationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyWorkWithUs />
        <JobListings onApplyClick={handleApplyClick} />
      </main>

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        initialJobTitle={selectedJob} 
      />

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Acme Corp</div>
            <div className="footer-mission">
              Follow our journey and stay updated with our latest innovations as we build the future of intelligent technology.
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#open-roles" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" className="footer-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="footer-link" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Acme Corp. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
