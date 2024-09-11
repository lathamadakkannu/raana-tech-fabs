import React from "react";
import styles from './About.module.scss'; 

function About() {
  return (
    <section id="about" className={styles.about}>
      <h1 className={styles.aboutHeader}>ABOUT US</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutRow}>

          <div className={styles.aboutCol}>
            <p>
              As adept manufacturers specializing in fabrication engineering, we
              excel in crafting customized solutions such as Gates and Name
              plates with precision. Our expertise extends seamlessly to elegant
              shutter works, showcasing our proficiency in design and execution.
              Distinguished as specialized manufacturers of press components and
              press tools, our experience spans over 15 years. Our team
              comprises educated professionals dedicated to delivering
              excellence in every project.
            </p>

            <p>
              At our company, we take pride in accepting a diverse range of job
              work and work orders. Our commitment to timely delivery and
              unwavering dedication to maintaining the highest quality standards
              sets us apart. Trust us for your fabrication needs, where skill
              meets experience for exceptional results.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
