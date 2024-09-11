
import Image from "next/image";
import styles from "./Product.module.scss";

const Product = () => {
  return (
    <section id="products" className={styles.product}>
      <h1 className={styles.productHeader}>OUR PRODUCTS</h1>

      <div id={styles.productContainer}>

        <div className={styles.productRow}>

          <div className={styles.box}>
            <Image
              src="/images/product1.jpg" 
              alt="Clamps (SS & MS)"
              width={300}
              height={200} 
            />

            <div className={styles.overlay}>
              <h3>Clamps (SS & MS)</h3>
              <p>
                Our perfection-finagled clamps are designed to give dependable
                support & stability for a variety of operations.
              </p>
            </div>

          </div>

          <div className={styles.box}>
            <Image
              src="/images/product2.jpeg"
              alt="WASHER"
              width={300}
              height={200}
            />

            <div className={styles.overlay}>
              <h3>WASHER</h3>
              <p>
                Our washers, available in both pristine sword & mild
                sword, are essential factors for colorful artificial
                processes.
              </p>
            </div>

          </div>

          <div className={styles.box}>
            <Image
              src="/images/product3.jpg"
              alt="Fuse Terminal Board"
              width={300}
              height={200}
            />
            
            <div className={styles.overlay}>
              <h3>Fuse Terminal Board</h3>
              <p>
                Efficiently manage electrical connections with our fuse terminal
                boards & set cage clamps.
              </p>
            </div>

          </div>

          <div className={styles.box}>
            <Image
              src="/images/product4.jpg"
              alt="Junction Box, Cable Box"
              width={300}
              height={200}
            />

            <div className={styles.overlay}>
              <h3>Junction Box, Cable Box</h3>
              <p>
                Safeguard your electrical connections with our durable junction
                boxes and cable boxes.
              </p>
            </div>
          
          </div>

        </div>

        <div className={styles.productRow}>
          <div className={styles.box}>
            <Image
              src="/images/product5.jpg"
              alt="Panel Board"
              width={300}
              height={200}
            />

            <div className={styles.overlay}>
              <h3>Panel Board</h3>
              <p>
                Streamline your control and distribution systems with our
                well-crafted panel boards.
              </p>
            </div>
            
          </div>

          <div className={styles.box}>
            <Image
              src="/images/product6.jpg"
              alt="Name Plate"
              width={300}
              height={200}
            />

            <div className={styles.overlay}>
              <h3>Name Plate</h3>
              <p>
                Customize your outfit and products with our name plates available
                in aluminum, pristine sword, and mild sword.
              </p>
            </div>

          </div>

          <div className={styles.box}>
            <Image
              src="/images/product7.jpg"
              alt="Aluminum Tag"
              width={300}
              height={200}
            />

            <div className={styles.overlay}>
              <h3>Aluminum Tag</h3>
              <p>
                Our aluminum markers are perfect for labeling and relating
                colorful particulars.
              </p>
            </div>
          
          </div>

          <div className={styles.box}>
            <Image
              src="/images/product8.jpg"
              alt="Punches (Alphabetic & Numerical)"
              width={300}
              height={200}
            />
          
            <div className={styles.overlay}>
              <h3>Punches (Alphabetic & Numerical)</h3>
              <p>
                Achieve clear and precise markings with our high-quality
                punches.
              </p>
            </div>
         
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Product;
