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
          <div className={styles.processCol}>
            <div className={styles.processCard}>
              <p>Enquiry From Customer</p>
            </div>
          </div>

          <div className={styles.processArrow}>➡</div>

          <div className={styles.processCol}>
            <div className={styles.processCard}>
              <p>Estimation, Manufacturing Process Design</p>
            </div>
          </div>

          <div className={styles.processArrow}>➡</div>

          <div className={styles.processCol}>
            <div className={styles.processCard}>
              <p>Quotation</p>
            </div>
          </div>

          <div className={styles.processArrow}>➡</div>

          <div className={styles.processCol}>
            <div className={styles.processCard}>
              <p>Sample Approval</p>
            </div>
          </div>
        </div>

        <div className={styles.processRow}>
          <div className={styles.processCol}>
            <div className={styles.processCard}>
              <p>JIG, Fixture/Design</p>
            </div>
          </div>

          <div className={styles.processArrow}>➡</div>

          <div className={styles.processCol}>
            <div className={styles.processCard}>
              <p>Production</p>
            </div>
          </div>

          <div className={styles.processArrow}>➡</div>

          <div className={styles.processCol}>
            <div className={styles.processCard}>
              <p>Quality</p>
            </div>
          </div>

          <div className={styles.processArrow}>➡</div>

          <div className={styles.processCol}>
            <div className={styles.processCard}>
              <p>Dispatch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
