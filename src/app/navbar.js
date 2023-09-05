import styles from "@/components/styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container">
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Link href={"/"}>
            <span className={styles.logo}>iSkiller</span>
          </Link>
        </div>
        <ul className={styles.links}>
          
          <Link className={styles.link} href={"/about"}>
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
          <Link className={styles.link} href={"/work"}>
            <span className={styles.mask}>
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
          <Link className={styles.link} href={"/contact"}>
            <span className={styles.mask}>
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
        </ul>
      </nav>
    </header>
  );
}
