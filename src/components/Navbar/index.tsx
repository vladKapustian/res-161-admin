import Image from "next/image";
import styles from "./styles.module.css";
import image from "public/Button.svg";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navbar}>
        <p className={styles.logo}>РостЭнергоСтрой</p>
        <div className={styles.userControlls}>
          <p className={styles.username}>admin@gmail.com</p>
          <Image alt="" className={styles.exitIcon} src={image}></Image>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
