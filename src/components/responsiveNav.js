'use client';
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/navbar.module.css";
import Link from "next/link";

export default function ResponsiveNav({ open, closeMenu }) {
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.menu_container}
          variants={item}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100vh", opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit="exit"
        >
          <div className={styles.btn_close} onClick={closeMenu}>
            X
          </div>

          <Link className={styles.link} href={"/about"} onClick={closeMenu}>
            <span className={styles.mask}>
              <div className={styles.link_container}>
                <span className={`${styles.title} ${styles.link_title1}`}>
                  About
                </span>
                <span className={`${styles.title} ${styles.link_title2}`}>
                  About
                </span>
              </div>
            </span>
          </Link>

          <Link className={styles.link} href={"/work"} onClick={closeMenu}>
            <span className={styles.mask} variants={item}>
              <div className={styles.link_container}>
                <span className={`${styles.title} ${styles.link_title1}`}>
                  Work
                </span>
                <span className={`${styles.title} ${styles.link_title2}`}>
                  Work
                </span>
              </div>
            </span>
          </Link>

          <Link className={styles.link} href={"/contact"} onClick={closeMenu}>
            <span className={styles.mask} variants={item}>
              <div className={styles.link_container}>
                <span className={`${styles.title} ${styles.link_title1}`}>
                  Contact
                </span>
                <span className={`${styles.title} ${styles.link_title2}`}>
                  Contact
                </span>
              </div>
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
