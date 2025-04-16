import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../Home/HomeNavbar';
import AnimatedButton from '../Signup/AnimatedButton';
import './ComposeMail.css';

function ComposeMail() {
  const navigate = useNavigate();
  const [mailData, setMailData] = useState({
    to: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    setMailData({
      ...mailData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mail data:', mailData);
    navigate('/home');
  };

  return (
    <>
      <HomeNavbar />
      <div className="back-button" onClick={() => navigate('/home')}>
        <i className="fas fa-arrow-left"></i>
        Back
      </div>
      <div className="compose-container">
        <h2>Compose Mail</h2>
        <form onSubmit={handleSubmit} className="compose-form">
          <div className="form-group">
            <input
              type="email"
              name="to"
              placeholder="To"
              value={mailData.to}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={mailData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="body"
              placeholder="Write your message here..."
              value={mailData.body}
              onChange={handleChange}
              required
              rows="10"
            />
          </div>
          <AnimatedButton type="submit" text="Send" />
        </form>
      </div>
    </>
  );
}

export default ComposeMail;