"use client";
import { motion } from "framer-motion";
import ViewInTexts from "@/components/animations/viewText";
import styles from "@/components/styles/about.module.css";
import Link from "next/link";

export default function WorkPage() {
  const dataCart = [
    {
      title: "Anime Time",
      number: "/01",
      link: '/',
      used: ["NextJs 13", "Typescript", "Jikan Api", "Swiper Js"],
    },
    {
      title: "E-commerce",
      number: "/02",
      link: '/',
      used: ["NextJs 13", "Typescript", "Fakestore Api", "Tailwind css"],
    },
    {
      title: "GUM",
      number: "/03",
      link: '/',
      used: ["NextJs 13", "i18 react", "FloorPlanner", "Yandex Maps"],
    },
    {
      title: "Blog CMS",
      number: "/04",
      link: '/',
      used: ["NextJs 12", "Sass", "GraphQL", "Tailwind css", "GraphQL CMS"],
    },
    {
      title: "Hangman",
      number: "/05",
      link: '/',
      used: ["React vite", "Typescript"],
    },
    {
      title: "Hulu Clone",
      number: "/06",
      link: '/',
      used: ["NextJs 12", "TMDb Api", "React Flip"],
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <section className="container page">
      <div className={styles.work_grid}>
        {dataCart.map((card, index) => (
          <Link href={card.link} key={index} className="open">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={container}
              className={styles.work_card}
            >
              <div className={styles.work_card_header}>
                <ViewInTexts text={card.title} />
                <ViewInTexts text={card.number} />
              </div>
              <div className={styles.work_card_body}>
                {card.used.map((skills, i) => (
                  <ViewInTexts text={skills} key={i} />
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
