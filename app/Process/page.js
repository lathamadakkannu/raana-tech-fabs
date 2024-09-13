"use client";

import React from "react";
import styles from "./Process.module.scss"; 

const Process = () => {
  return (
    <section id="process" className={styles.process}>
      <h2 className={styles.processHeader}>
        <p>OUR FABRICATION PROCESS</p>
      </h2>

      <div className={styles.processContainer}>
        <div className={styles.processRow}>
          <div className={styles.processCard}>
            <p>Enquiry From Customer</p>
            <h5 className={styles.processCount}>1</h5>
          </div>

          <div className={styles.processCard}>
            <p>Estimation, Manufacturing Process Design</p>
            <h5 className={styles.processCount}>2</h5>
          </div>

          <div className={styles.processCard}>
            <p>Quotation</p>
            <h5 className={styles.processCount}>3</h5>
          </div>

          <div className={styles.processCard}>
            <p>Sample Approval</p>
            <h5 className={styles.processCount}>4</h5>
          </div>
        </div>

        <div className={styles.processRow}>
          <div className={styles.processCard}>
            <p>JIG, Fixture/Design</p>
            <h5 className={styles.processCount}>5</h5>
          </div>

          <div className={styles.processCard}>
            <p>Production</p>
            <h5 className={styles.processCount}>6</h5>
          </div>

          <div className={styles.processCard}>
            <p>Quality</p>
            <h5 className={styles.processCount}>7</h5>
          </div>

          <div className={styles.processCard}>
            <p>Dispatch</p>
            <h5 className={styles.processCount}>8</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
