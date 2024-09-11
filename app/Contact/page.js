"use client";
import React, { useState } from "react";
import styles from "./Contact.module.scss"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

 
  return (
    <div className={styles.contact} id="contact">
      <h1 className={styles.ContactHead} >Contact</h1>

      <div className={styles.contactContainer}>
        <div className={styles.contactAddress}>

          <div className={styles.contactAddressContent}>

            <div className={styles.addressContent}>
              <p className={styles.head}>Contact Number</p>
              <p className={styles.content}>+91-9941825559</p>
            </div>

            <div className={styles.addressContent}>
              <p className={styles.head}>Location</p>
              <p className={styles.content}>No.19/10A, Logaiyanaidu Street, Mannurpet, Chennai - 600 050</p>
            </div>

            <div className={styles.addressContent}>
              <p className={styles.head}>Email</p>
              <p className={styles.content}>raanatechfabs@gmail.com</p>
            </div>
            
            <div className={styles.addressContent}>
              <p className={styles.head}>Working Hours</p>
              <p className={styles.content}>Mon-Sat (9am-6pm)</p>
            </div>
          </div>
          
          <div className={styles.contactAddressMap}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.888338193032!2d80.171721!3d13.100955000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526392d7fdcf3b%3A0x821f2515e5fe352f!2sRAANA%20TECH%20FABS!5e0!3m2!1sen!2sin!4v1725878036139!5m2!1sen!2sin"  
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map">
            </iframe>
          </div>
        </div>

        <div className={styles.contactForm}>
          <div className={styles.contactFormHead}>
            <h2>Get In Touch</h2>
          </div>

          <form className={styles.contactFormContent} onSubmit={handleSubmit}>
            <div className={styles.formContent}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
           
            <div className={styles.formContent}>
              <label htmlFor="mobile">Mobile:</label>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
           
            <div className={styles.formContent}>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
           
            <div className={styles.formContent}>
              <label htmlFor="message">Message:</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
           
            <button type="submit" className="formBtn">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
