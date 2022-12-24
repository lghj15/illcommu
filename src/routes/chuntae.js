import About from "../routes/about";
import React from "react";
import face from "../assets/chuntae.jpg";
import face2 from "../assets/chuntae2.jpg";
import styles from "../style/Home.module.css";
import { ReactComponent as Kian } from "../assets/kian_logo.svg";
import { Link } from "react-router-dom";
function Chuntae() {
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
        summary="걍 눈깔 장애 안면마비 병신 오정은이랑 어울리는 개찐따"
        fuckPoint="뭐만하면 존나 꼽기고 2반 앞 가서 야 현성아 이지랄 하면서 무시하면 질질 쳐 짬 병신"
      />
    </>
  );
}
export default Chuntae;
