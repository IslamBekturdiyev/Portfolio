"use client";
import AnimatedText from "@/components/animations/textanimation";
import SliderSkills from "@/components/sliderSkills";
import styles from "@/components/styles/about.module.css";

export default function AboutPage() {
  const sliderData = [
    {
      name: "html",
      src: "/icons/html.png",
    },
    {
      name: "css",
      src: "/icons/css3.png",
    },
    {
      name: "javascript",
      src: "/icons/javascript.png",
    },
    {
      name: "typescript",
      src: "/icons/typescript.png",
    },
    {
      name: "react",
      src: "/icons/react.png",
    },
    {
      name: "redux",
      src: "/icons/redux.png",
    },
    {
      name: "nextjs",
      src: "/icons/NextJs.png",
    },
    {
      name: "graphql",
      src: "/icons/graphql.png",
    },
    {
      name: "bootstrap",
      src: "/icons/bootstrap.png",
    },
    {
      name: "tailwind",
      src: "/icons/tailwind.png",
    },
    {
      name: "framer-motion",
      src: "/icons/framer.png",
    },
    {
      name: "npm",
      src: "/icons/npm.png",
    },
    {
      name: "git",
      src: "/icons/git.png",
    },
    {
      name: "github",
      src: "/icons/github.png",
    },
    {
      name: "html",
      src: "/icons/html.png",
    },
    {
      name: "css",
      src: "/icons/css3.png",
    },
    {
      name: "javascript",
      src: "/icons/javascript.png",
    },
    {
      name: "typescript",
      src: "/icons/typescript.png",
    },
    {
      name: "react",
      src: "/icons/react.png",
    },
    {
      name: "redux",
      src: "/icons/redux.png",
    },
    {
      name: "nextjs",
      src: "/icons/NextJs.png",
    },
    {
      name: "graphql",
      src: "/icons/graphql.png",
    },
    {
      name: "bootstrap",
      src: "/icons/bootstrap.png",
    },
    {
      name: "tailwind",
      src: "/icons/tailwind.png",
    },
    {
      name: "framer-motion",
      src: "/icons/framer.png",
    },
    {
      name: "npm",
      src: "/icons/npm.png",
    },
    {
      name: "git",
      src: "/icons/git.png",
    },
    {
      name: "github",
      src: "/icons/github.png",
    },
  ];

  return (
    <section className="container page">
      <div className={styles.contents}>
        <div className={styles.about_content}>
          <AnimatedText text="Greeting" classname="medium-bold-text" />

          <AnimatedText text="I'm Islambek" classname="big-bold-text" />

          <div className={styles.about_bottom}>
            <div>
              <p className={styles.about_subhead}>
                a frontend wizard on a mission to weave pixel-perfect designs
                and captivating user experiences.
              </p>
            </div>

            <button className={styles.cta}>
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* slider */}
        <SliderSkills data={sliderData} />
      </div>
    </section>
  );
}
