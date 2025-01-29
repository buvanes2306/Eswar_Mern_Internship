import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(formData, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contactData.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
