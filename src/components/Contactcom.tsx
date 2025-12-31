// src/components/Contact.tsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_5n0kb9f",       // EmailJS service ID
        "template_vklkfus",      // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YF9XBVPcppmilkWF4"        // EmailJS public key
      );

      setStatus("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <p id="title">Send us your thoughts</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" className="btn send-btn">
          Send Message
        </button>
      </form>

      {status && <p className="status">{status}</p>

      }

      <div className="social-links">
        <a href="mailto:obosohio@gmail.com">📧 Email</a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
          💻 GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;