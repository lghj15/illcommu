import About from "../routes/about";
import React from "react";
import face from "../assets/ohho.jpg";
import face2 from "../assets/ohho2.jpg";
import styles from "../style/Home.module.css";
import { ReactComponent as Kian } from "../assets/kian_logo.svg";
import { Link } from "react-router-dom";
function Ohho() {
  return (
    <>
      <header className={styles.header}>
        기안중 장애인 커뮤니티
        <Link to="/">
          <Kian width="65" height="65" className={styles.kian} />
        </Link>
      </header>
      <About
        face={face}
        face2={face2}
        summary="자칭 유명인 현실은 구독자 200명 따리 유튜버 킵토리"
        fuckPoint="애들이 지 놀리는지도 모르고 싸인 받아간다고 좋아하는 병신"
      />
    </>
  );
}
export default Ohho;
