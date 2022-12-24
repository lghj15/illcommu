import About from "../routes/about";
import React from "react";
import face from "../assets/ohjeong.jpg";
import face2 from "../assets/ohjeong2.jpg";
import styles from "../style/Home.module.css";
import { ReactComponent as Kian } from "../assets/kian_logo.svg";
import { Link } from "react-router-dom";
function Ohjeong() {
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
        summary="팔장애에 여드름 개많은 병신"
        fuckPoint="와우중 연하남 남친 놔두고 전태민이랑 단둘이 롯데월드 간  장애인 통합반 왜 안가는지 의문"
      />
    </>
  );
}
export default Ohjeong;
