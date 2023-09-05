"use client";
import styles from "@/components/styles/about.module.css";
import AnimatedText from "@/components/animations/textanimation";

export default function ContactPage() {
  return (
    <section className="container page">
      <div className={styles.contact_grid}>
        <div className={styles.grid_form}>
          <div className={styles.group}>
            <input type="text" required="required" />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label>Your name</label>
          </div>

          <div className={styles.group}>
            <input type="email" required="required" />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label>Your email</label>
          </div>

          <div className={styles.group}>
            <textarea type="textarea" rows="5" required="required"></textarea>
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label>Share your thoughts</label>
          </div>

          <button className={styles.cta}>
            <span>Just send</span>
            <svg viewBox="0 0 13 10" height="15px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>

        </div>

        <div className={styles.contact_text}>
        <AnimatedText text="Love to hear from you" classname="upper-bold-text" />
        </div>
      </div>
    </section>
  );
}
