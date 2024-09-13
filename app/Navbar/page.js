"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { LuMenuSquare } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";
import styles from "./Navber.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(id);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "aboutUs", "products", "process", "gallery", "contactUs"];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }

        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }

      if (window.scrollY > 50) {
        setScrolled(true);
      } 
      else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>

      <div className={styles.logoContainer}>
        
        <div className={styles.logo}>
          <Link href="/#home">
            <Image
              src={scrolled ? "/assert/logowhite.png" : "/assert/logo.png"}
              alt="Logo"
              width={350}
              height={80}
            />
          </Link>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? (
            <FaRegWindowClose />
          ) : (
            <LuMenuSquare />
          )}
        </div>
      </div>

      <ul className={`${styles.ul} ${menuOpen ? styles.active : ""}`}>
        {["home", "about Us", "products", "process", "gallery", "contact Us"].map((section) => (
          <li key={section} className={styles.li}>
            
            <a
              className={activeSection === section ? styles.active : ""}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("products", "Our Products")}
            </a>

          </li>
        ))}
      </ul>
    </nav>
    
  );
};

export default Navbar;
