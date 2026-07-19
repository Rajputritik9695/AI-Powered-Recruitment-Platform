import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container">
          <h1 className="hero-title">Building the future of intelligent technology</h1>
          <p className="hero-subtitle">
            Join our team of passionate builders, engineers, and creators to help shape the next generation of AI-powered solutions.
          </p>
          <div className="text-center">
            <a href="#open-roles" className="btn btn-primary">
              View Open Roles
            </a>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stats-container">
          <div className="stat-item">
            <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
            6 Open Roles
          </div>
          <div className="stat-item">
            <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            AI-Powered Resume Screening
          </div>
          <div className="stat-item">
            <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            Competitive Compensation
          </div>
          <div className="stat-item">
            <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            Fast Response Times
          </div>
        </div>
      </div>
    </>
  );
}
