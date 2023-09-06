"use client";
import ResponsiveNav from "@/components/responsiveNav";
import styles from "@/components/styles/navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <ResponsiveNav open={open} closeMenu={closeMenu} />
      <header className="container">
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <Link href={"/"}>
              <span className={styles.logo}>iSkiller</span>
            </Link>
          </div>

          <div className={styles.button} onClick={isOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fillRule="currentColor"
              className="bi bi-justify"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
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
    </>
  );
}
