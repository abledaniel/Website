import React, { useState } from "react";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/NavBar/navbar";
import "./contact.css";

function ContactPage() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Thanks For Sending A Message!!!");
    }
  };

  // the function valides the form if the message has symbols for email it send an error if it is just a message then it checks if it not empty
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    ["email", "message"].forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        valid = false;
      } else if (field === "email" && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  
  // creates the containers and the restrictions for each container with a submit cutton
  return (
    <div className="contact-page">
      <Navbar />
      <div className="container">
        <h2>Contact Me ⊂◉‿◉つ</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {["email", "message"].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}><strong>{field.charAt(0).toUpperCase() + field.slice(1)}</strong></label>
              {field === "message" ? (
                <textarea id={field} value={formData[field]} onChange={(event) => handleChange(event, field)}/>
              ) : (
                <input type={field === "email" ? "email" : "text"} id={field} value={formData[field]} onChange={(event) => handleChange(event, field)}/>
              )}
              {errors[field] && <div className="error">{errors[field]}</div>}
            </div>
          ))}
          <button type="submit" className="contact-button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
