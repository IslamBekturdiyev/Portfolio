import Image from "next/image";
import styles from "./styles/sliderSkills.module.css";

export default function SliderSkills({ data }) {


  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        {data.map((card, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src={`${card.src}`}
              height="100"
              width="250"
              alt={card.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
