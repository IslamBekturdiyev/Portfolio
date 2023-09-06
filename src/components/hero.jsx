"use client";
import CircleText from "@/components/animations/circleText";
import ScrollText from "@/components/animations/scrollText";
import AnimatedText from "@/components/animations/textanimation";
import Services from "@/components/sections/services";
import Talk from "@/components/sections/talk";
import Socials from "@/components/socials";
import styles from "@/components/styles/page.module.css";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import transition from "./animations/transition";

function Hero() {
  return (
    <PageWrapper>
      <main>
        <div className={`container ${styles.Home_content}`}>
          <div className={styles.head_home}>
            <p className="smallest-grey-text">Hello people!</p>
            <div className={styles.circle}>
              <CircleText />
            </div>
          </div>

          <div className={styles.main_home}>
            <AnimatedText
              text="Let's explore the art of web"
              classname="big-bold-text"
            />
          </div>
        </div>

        <div className={styles.socials}>
          <Socials />
        </div>

        <div className={styles.carousel}>
          <ScrollText baseVelocity={-2}>
            Creative • Positive • Flexible • Energetic •
          </ScrollText>
          <ScrollText baseVelocity={2}>
            Creative • Positive • Flexible • Energetic •
          </ScrollText>
        </div>

        <section className="container section">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: -20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="big-bold-text"
          >
            Services
          </motion.h2>
          <Services />
        </section>

        <section className="container">
          <Talk />
        </section>
      </main>
    </PageWrapper>
  );
}

export default transition(Hero);
