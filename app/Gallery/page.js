"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from "./gallery.module.scss";

const images = [
  { src: '/images/panel1.jpg', category: 'Electrical Panels' },
  { src: '/images/panel2.jpg', category: 'Electrical Panels' },
  { src: '/images/panel3.jpg', category: 'Electrical Panels' },
  { src: '/images/panel4.jpg', category: 'Electrical Panels' },
  { src: '/images/panel6.jpg', category: 'Electrical Panels' },

  { src: '/images/gates1.jpg', category: 'Gates' },
  { src: '/images/gates2.jpg', category: 'Gates' },
  { src: '/images/gates3.jpg', category: 'Gates' },
  { src: '/images/gates4.jpg', category: 'Gates' },

  { src: '/images/clampwasher1.jpg', category: 'Clamp Washers' },
  { src: '/images/clampwasher2.jpg', category: 'Clamp Washers' },
  { src: '/images/clampwasher3.jpg', category: 'Clamp Washers' },
  { src: '/images/clampwasher4.jpg', category: 'Clamp Washers' },

  { src: '/images/tools1.jpg', category: 'Press Tools' },
  { src: '/images/tools2.jpg', category: 'Press Tools' },
  { src: '/images/tools3.jpg', category: 'Press Tools' },
  { src: '/images/tools4.jpg', category: 'Press Tools' },

  { src: '/images/nameplate1.jpg', category: 'Name Plates and Tags' },
  { src: '/images/nameplate2.jpg', category: 'Name Plates and Tags' },
  { src: '/images/nameplate3.jpg', category: 'Name Plates and Tags' },
];

const Gallery = () => {
  const [category, setCategory] = useState('All');

  const filteredImages = category === 'All'
    ? images
    : images.filter((image) => image.category === category);

  return (
    <div id="gallery" className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <h1 className={styles.galleryHeader}>GALLERY</h1>
        
        <div className={styles.buttonContainer}>
          {['All', 'Electrical Panels', 'Gates', 'Clamp Washers', 'Press Tools', 'Name Plates and Tags'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`${styles.button} ${category === cat ? styles.activeButton : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.imageContainer}>
          {filteredImages.map((image, index) => (
            <div key={index} className={styles.imageCollections}>
              <Image 
                src={image.src}
                alt={image.category}
                width={300} 
                height={200}
                className={styles.image}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
