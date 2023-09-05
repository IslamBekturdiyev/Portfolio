import styles from "../styles/page.module.css";
import ReactCurvedText from "react-curved-text";
export default function CircleText() {
  return (
    <>
      <div className={styles.rotate_text}>
        <ReactCurvedText
          width={100}
          height={100}
          cx={50}
          cy={50}
          rx={29}
          ry={28}
          startOffset={3}
          reversed={false}
          text="- scroll down - scroll down"
          textProps={{ style: { fontSize: 14 } }}
          textPathProps={null}
          tspanProps={{ dy: 20 }}
          ellipseProps={null}
          svgProps={{ style: { transform: "rotate(11deg)" } }}
        />
      </div>
      <svg
        className={styles.mouse}
        width="49"
        height="80"
        viewBox="0 0 49 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="12.5"
          y="18.5"
          width="23"
          height="43"
          rx="11.5"
          stroke="black"
          strokeWidth="3"
        />
        <circle cx="24" cy="50" r="6" fill="black" />
      </svg>
    </>
  );
}
