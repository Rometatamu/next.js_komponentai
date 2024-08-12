import styles from "../styles/Home.module.css";
import Header from "../components/Header/header";
import Footer from '../components/Footer/footer';
import Cards from "../components/Cards/cards";
import {useState} from "react";

const MainPage = () => {
 const [header, setHeader]=useState("Kokios gi čia vietos?");
 const [footer, setFooter]=useState("© Visos teisės saugomos.");
  
  return (
    <div className={styles.MainPage}>
      <Header text={header} setHeader={setHeader}/>
      <Cards/>
      <Footer text={footer}/>
    </div>
  );
};

export default MainPage;