import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      process.env.REACT_APP_SERVICE_ID,
     process.env.REACT_APP_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("❌ Failed to send message. Try again.");
        console.log(error);
      }
    );
};


  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Let's Connect</h2>
          <p>
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="contact-info">
            <p>
              <strong>Email:</strong> amankrsingh2079@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Prayagraj, India
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/amankrsingh207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kumar-singh-055b53261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button type="submit" className="btn-send">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
