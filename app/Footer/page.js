"use client"; 

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import styles from "./Footer.module.scss";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth", 
        block: "start",
      });
    }

  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerIcon}>
          <a onClick={() => scrollToSection("home")}>
            <Image src="/assert/logowhite.png" alt="Logo" width={400} height={80} />
          </a>

        </div>

        <div className={styles.footerLinks}>

          <div className={styles.footerLinkHead}>
            <h2>Quick Links</h2>

            <ul>
              <li className={styles.li}>
                <a onClick={() => scrollToSection("home")}>Home</a>
              </li>

              <li className={styles.li}>
                <a onClick={() => scrollToSection("about")}>About</a>
              </li>

              <li className={styles.li}>
                <a onClick={() => scrollToSection("products")}>Our Products</a>
              </li>

              <li className={styles.li}>
                <a onClick={() => scrollToSection("gallery")}>Gallery</a>
              </li>
              
              <li className={styles.li}>
                <a onClick={() => scrollToSection("contact")}>Contact</a>
              </li>
            </ul>
          
          </div>
        </div>

        <div className={styles.footerContactInfo}>
          <div className={styles.contactInfoHead}>
            <h2>Contact Info</h2>
          </div>

          <div className={styles.contactInfoAddress}>
              <p>Email: <a href="mailto:raanatechfabs@gmail.com">raanatechfabs@gmail.com</a></p>
              <p>Phone: <a href="tel:91-9941825559">+91-9941825559</a></p>
          </div>

          <div className={styles.contactInfoContent}>
            <ul>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaWhatsapp />
              </li>
              <li>
                <BsTwitterX />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerRights}>
        <p>
          © Raana Tech Fabs. All rights reserved | Design by <Link href='https://svjtechnologies.com/'> SVJ Technologies</Link> 
        </p>
      </div>

    </div>
  );
};

export default Footer;
