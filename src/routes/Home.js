import styles from "../style/Home.module.css";
import { ReactComponent as Kian } from "../assets/kian_logo.svg";
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className={styles.header}>
        기안중 장애인 커뮤니티
        <Link to="/">
          <Kian width="65" height="65" className={styles.kian} />
        </Link>
      </header>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/ohjeong">
          오정은
        </Link>
        <Link className={styles.link} to="/chuntae">
          전태민
        </Link>
        <Link className={styles.link} to="/ohho">
          오호성
        </Link>
      </nav>
    </div>
  );
}

export default Home;
