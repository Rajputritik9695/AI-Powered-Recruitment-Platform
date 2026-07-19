import React, { useState, useRef, useEffect } from 'react';
import { jobs } from '../config/jobs';

const WEBHOOK_URL = "/webhook/68192ba7-63db-4b62-a581-d353974d01dc";

export default function ApplicationModal({ isOpen, onClose, initialJobTitle }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedJobTitle: '',
    yearsOfExperience: '',
    additionalNotes: ''
  });
  
  const [resumeFile, setResumeFile] = useState(null);
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('');
  
  const fileInputRef = useRef(null);

  // Update selected job when modal opens with a specific job
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        selectedJobTitle: initialJobTitle || (jobs.length > 0 ? jobs[0].title : ''),
        yearsOfExperience: '',
        additionalNotes: ''
      });
      setResumeFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setStatus('idle');
      setErrorMsg('');
    }
  }, [isOpen, initialJobTitle]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setErrorMsg('Please upload a valid PDF file.');
      setResumeFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('File size exceeds the 5MB limit.');
      setResumeFile(null);
      return;
    }

    setErrorMsg('');
    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.selectedJobTitle || !resumeFile) {
      setErrorMsg('Please fill in all required fields and upload your resume.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const submitData = new FormData();
    submitData.append("Full Name", formData.fullName);
    submitData.append("Email Address", formData.email);
    submitData.append("Phone Number", formData.phone);
    submitData.append("Select Job Role", formData.selectedJobTitle);
    submitData.append("Upload Resume (PDF)", resumeFile);
    submitData.append("Years of Experience", formData.yearsOfExperience);
    submitData.append("Anything else you'd like us to know?", formData.additionalNotes);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: submitData
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong — please try again.');
      }
    } catch (error) {
      console.error("Webhook submission error:", error);
      setStatus('error');
      setErrorMsg('Something went wrong — please try again.');
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Careers — Apply for a Role</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        
        <div className="modal-body">
          {status === 'success' ? (
            <div className="text-center" style={{ padding: '3rem 0' }}>
              <div style={{ color: 'var(--success)', fontSize: '4rem', marginBottom: '1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Thanks for applying!</h3>
              <p className="text-muted mt-4">
                Our team will review your resume and get back to you soon.
              </p>
              <button className="btn btn-outline" style={{ marginTop: '2rem' }} onClick={onClose}>
                Close Window
              </button>
            </div>
          ) : (
            <>
              <p className="modal-desc">
                Thank you for your interest in joining our team. Fill out the form below and upload your resume — our AI-powered screening system will review your application, and you'll hear back from us shortly.
              </p>
              
              {errorMsg && (
                <div className="alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label">Full Name <span>*</span></label>
                    <input 
                      type="text" 
                      name="fullName"
                      className="form-control" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label">Email Address <span>*</span></label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="form-control" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label">Years of Experience</label>
                    <input 
                      type="number" 
                      name="yearsOfExperience"
                      className="form-control" 
                      value={formData.yearsOfExperience}
                      onChange={handleInputChange}
                      placeholder="e.g. 3"
                      min="0"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Select Job Role <span>*</span></label>
                  <select 
                    name="selectedJobTitle"
                    className="form-control" 
                    value={formData.selectedJobTitle}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select a role...</option>
                    {jobs.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Upload Resume (PDF) <span>*</span></label>
                  <label 
                    className={`file-upload-wrapper ${resumeFile ? 'has-file' : ''}`}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      className="file-input" 
                      accept="application/pdf"
                      onChange={handleFileChange}
                      required={!resumeFile}
                    />
                    <div className="file-upload-content">
                      <div className="file-upload-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="12" y2="12"></line><line x1="15" y1="15" x2="12" y2="12"></line></svg>
                      </div>
                      <div className="file-upload-text">
                        {resumeFile ? resumeFile.name : 'Click to upload or drag and drop'}
                      </div>
                      <div className="file-upload-hint">
                        {resumeFile ? `${(resumeFile.size / 1024 / 1024).toFixed(2)} MB` : 'PDF up to 5MB'}
                      </div>
                    </div>
                  </label>
                </div>

                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label className="form-label">Anything else you'd like us to know?</label>
                  <textarea 
                    name="additionalNotes"
                    className="form-control" 
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Tell us about your recent projects, portfolio links, or why you're a great fit..."
                  ></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                  <button type="button" className="btn btn-outline" onClick={onClose}>
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
