"use client";
import { motion } from "framer-motion";
import ViewInTexts from "@/components/animations/viewText";
import styles from "@/components/styles/about.module.css";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import transition from "@/components/animations/transition";

function WorkPage() {
  const dataCart = [
    {
      title: "Anime Time",
      number: "/01",
      link: "https://anime-mu-liart.vercel.app/",
      used: ["NextJs 13", "Typescript", "Jikan Api", "Swiper Js"],
    },
    {
      title: "E-commerce",
      number: "/02",
      link: "https://e-commerce-beta-kohl.vercel.app/",
      used: ["NextJs 13", "Typescript", "Fakestore Api", "Tailwind css"],
    },
    {
      title: "GUM",
      number: "/03",
      link: "https://gum.squareone.uz/",
      used: ["NextJs 13", "i18 react", "FloorPlanner", "Yandex Maps"],
    },
    {
      title: "Blog CMS",
      number: "/04",
      link: "https://blog-brown-omega.vercel.app/",
      used: ["NextJs 12", "Sass", "GraphQL", "Tailwind css", "GraphQL CMS"],
    },
    {
      title: "Hangman",
      number: "/05",
      link: "https://hangman-zeta-three.vercel.app/",
      used: ["React vite", "Typescript"],
    },
    {
      title: "Hulu Clone",
      number: "/06",
      link: "https://hulu-clone-seven-blush.vercel.app/",
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
    <PageWrapper>
      <section className="container page">
        <div className={styles.work_grid}>
          {dataCart.map((card, index) => (
            <Link href={card.link} key={index} className="open">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={container}
                className={styles.work_card}
                viewport={{ once: true }}
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
    </PageWrapper>
  );
}

export default transition(WorkPage);
