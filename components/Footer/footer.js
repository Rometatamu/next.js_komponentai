import styles from './style.module.css';

const Footer = ({text}) => {
  return (
    <footer className={styles.main}>
        <p>{text}</p>
    </footer>
  );
};

export default Footer;