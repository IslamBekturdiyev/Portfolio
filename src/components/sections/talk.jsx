import Link from "next/link";
import ViewInTexts from "../animations/viewText";
import styles from "../styles/anima.module.css";
import { motion } from "framer-motion";

export default function Talk() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        className={styles.last_section_main}
        viewport={{ once: true }}
      >
        <ViewInTexts
          text="Want to start a project"
          classname="smallest-grey-text"
        />
        <ViewInTexts text="Let's Talk" classname="big-bold-text" />
        <Link href="/contact" className="button">
          <button className={styles.cta} href="/contact">
            <span>Get in touch</span>
            <svg viewBox="0 0 13 10" height="15px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </motion.div>

      <footer>
        <div className={styles.footer_box}>
          <div className={styles.right_info}>
            <span className={styles.logo}>iSkiller</span>
            <div className={styles.footer_text}>
              <p>Meet iSkiller, an innovative Frontend Developer</p>
              <p>based in the lively city of Tashkent, Uzbekistan.</p>
            </div>
            <p>Socials</p>
          </div>

          <div className={styles.left_info}>
            <p>Uzbekistan, Tashkent</p>
            <p>islambekturdiyev@gmail.com</p>
            <p>+998 (94) 044 33 66</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
