import React from "react";
import Image from "next/image";
import styles from "./Home.module.scss";

function HomePage(){
 return(
   
  <section id="home" className={styles.home}>
    <div className={styles.homeContainer}>

      <div className={styles.homeRow}>

        <div className={styles.homeCol}>
          <h3>Welcome to Raana Tech Fabs</h3>
          <h4>Discover Quality and Precision with Raana Tech Fabs - Your Fabrication Expert</h4>
            <p>
              At Raana Tech Fabs, we're devoted to delivering top-notch
              fabrication engineering results to meet your every need. With a
              strong presence in Chennai, we take pride in offering a wide range
              of high-quality products designed to enhance your systems and
              businesses.
            </p>
        </div>

        <div className={styles.homeCol}>
          <Image
            src="/assert/Home.jpg"
            alt="Home"
            layout="responsive"
            width={100} // This represents the percentage of width (100%)
            height={80} // This represents the percentage of height, which will scale accordingly
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>

     
      <div className={styles.homeRowSecond}>
        <h2 className={styles.homeQn}><p>What We Do?</p></h2>

        <div className={styles.homeCol}>
          <p>
            Nestled in the heart of Chennai, we take pride in being recognized
            as the best fabrication engineering company in the region. Our
            commitment to excellence is evident in the meticulous fabrication
            of panel boards, alphabetic punches, numerical punches, fuse
            terminal boards, and clamps.
          </p>
        </div>

        <div className={styles.homeCol}>
          <p>
            We don't just meet industry standards; we set them. Explore the
            possibilities of precision fabrication with us, where every
            project is a testament to our dedication to quality and
            craftsmanship. Whether you are seeking reliable fabrication
            services or bespoke solutions tailored to your needs, Raana Tech
            Fabs is your trusted partner in turning ideas into reality.
          </p>
        </div>

      </div>
    </div>
  </section>

 )

}

export default HomePage;