import React from 'react';

export default function WhyWorkWithUs() {
  const benefits = [
    {
      title: "Innovation First",
      desc: "Work with cutting-edge technologies and shape the future of AI.",
      colorClass: "icon-blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      )
    },
    {
      title: "Continuous Growth",
      desc: "Dedicated time and resources for your professional development.",
      colorClass: "icon-green",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
          <polyline points="16 7 22 7 22 13"/>
        </svg>
      )
    },
    {
      title: "Maximum Flexibility",
      desc: "Remote-first culture with flexible hours to fit your lifestyle.",
      colorClass: "icon-purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      title: "Real Impact",
      desc: "Build products that are used by millions across the globe.",
      colorClass: "icon-orange",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      )
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why Work With Us</h2>
        <p className="section-description">
          We believe in empowering our team to do their best work. Here is what you can expect when you join us.
        </p>
        
        <div className="grid grid-cols-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="feature-card">
              <div className={`feature-icon ${benefit.colorClass}`}>
                {benefit.icon}
              </div>
              <h3 className="feature-title">{benefit.title}</h3>
              <p className="feature-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
