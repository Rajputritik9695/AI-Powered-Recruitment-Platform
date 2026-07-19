import React from 'react';
import { jobs } from '../config/jobs';

const getCategoryIcon = (category) => {
  switch(category) {
    case 'Cloud':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
      );
    case 'Security':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      );
    case 'AI':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
      );
    case 'Data':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
      );
    case 'Technical':
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
      );
  }
}

export default function JobListings({ onApplyClick }) {
  return (
    <section className="section bg-alt" id="open-roles">
      <div className="container">
        <h2 className="section-title">Open Roles</h2>
        <p className="section-description">
          Ready to make an impact? Explore our current openings below and find the perfect fit for your skills.
        </p>
        
        <div className="grid grid-cols-2">
          {jobs.map((job) => (
            <div key={job.id} className="job-card" data-category={job.category}>
              <div className="job-header">
                <div className="job-title-wrapper">
                  <span className="job-cat-icon">
                    {getCategoryIcon(job.category)}
                  </span>
                  <h3 className="job-title">{job.title}</h3>
                </div>
                <span className={`job-category cat-${job.category}`}>{job.category}</span>
              </div>
              
              <p className="job-desc">{job.description}</p>
              
              <div className="job-skills">
                <strong>Required Skills: </strong>
                <span>{job.requiredSkills}</span>
              </div>
              
              <div className="job-footer">
                <div className="job-experience">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  {job.minExperience}+ Years Exp.
                </div>
                
                <button 
                  className="btn btn-primary"
                  onClick={() => onApplyClick(job.title)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
