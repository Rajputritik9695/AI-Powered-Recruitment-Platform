import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="header-logo">Acme Corp</a>
        <nav className="header-nav">
          <a href="#" className="header-link">Home</a>
          <a href="#about" className="header-link">About</a>
          <a href="#open-roles" className="header-link">Careers</a>
          <a href="#" className="header-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
