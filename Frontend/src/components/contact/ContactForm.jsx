import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AnimatedButton from "../Signup/AnimatedButton";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/home");
  };

  return (
    <div className="contact-container left-120 mt-8">
      <h2>Any Queries?</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            type="password"
            name="password"
            placeholder="Your Query"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <AnimatedButton type="submit" text="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;
