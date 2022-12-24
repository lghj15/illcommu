import React from "react";
import styles from "../style/about.module.css";
function About({ face, face2, summary, fuckPoint }) {
  return (
    <div>
      <img src={face} width="300" height="300" />
      <img src={face2} width="300" height="300" />
      <div className={styles.description}>
        <p className={styles.summary}>{summary}</p>
        <p className={styles.fuckPoint}>{fuckPoint}</p>
      </div>
    </div>
  );
}
export default About;
