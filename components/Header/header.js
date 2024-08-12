import styles from "./styles.module.css";


const Header = ({text, setHeader}) => {
  const handleClick=()=>{
    setHeader(prevText=>prevText==="Kokios gi čia vietos?"? "Varėna -nedidelis miestas Pietų Lietuvoje. Gamtos ir ramybės oazė." : "Kokios gi čia vietos?");
  };
  return (
    <header className={styles.main}>
        <h1>{text}</h1>
        <button onClick={handleClick}>Paspausk</button>
    </header>
  );
};

export default Header;