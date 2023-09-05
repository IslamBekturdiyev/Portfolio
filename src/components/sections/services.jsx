"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../styles/anima.module.css";


export default function Services() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.1 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]) // what was [0, 1], we want [0.5, 1]
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]) // what was [0, 1], we want [0.5, 1]

    return (

      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className={styles.container_services}
      >
        <div  className={styles.services_box}>
          <h2 className="small-bold-black-text">Design</h2>
          <p className="smallest-grey-text">Turning ideas into stunning designs</p>
        </div>
        <div className={styles.services_box}>
          <h2 className="small-bold-black-text">Code</h2>
          <p className="smallest-grey-text">Transforming designs into code realities</p>
        </div>
        <div className={styles.services_box}>
          <h2 className="small-bold-black-text">Content</h2>
          <p className="smallest-grey-text">Weaving words that engage and inspire</p>
        </div>
        <div className={styles.services_box}>
          <h2 className="small-bold-black-text">Content</h2>
          <p className="smallest-grey-text">Weaving words that engage and inspire</p>
        </div>
      </motion.div>
    );
}
