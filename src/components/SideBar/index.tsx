import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

enum Path {
  CATEGORY = "/categories",
  PRODUCTS = "/products",
  REQUESTS = "/requests",
  ATTRIBUTES = "/attributes",
}

export const SideBar = () => {
  const { asPath } = useRouter();

  return (
    <nav className={styles.container}>
      <Link className={`${styles.link} ${asPath.includes(Path.CATEGORY) ? styles.active : ""}`} href={Path.CATEGORY}>
        Категории
      </Link>
      <Link className={`${styles.link} ${asPath.includes(Path.PRODUCTS) ? styles.active : ""}`} href={Path.PRODUCTS}>
        Товары
      </Link>
      <Link className={`${styles.link} ${asPath.includes(Path.REQUESTS) ? styles.active : ""}`} href={Path.REQUESTS}>
        Заявки
      </Link>
      <Link
        className={`${styles.link} ${asPath.includes(Path.ATTRIBUTES) ? styles.active : ""}`}
        href={Path.ATTRIBUTES}
      >
        Аттрибуты
      </Link>
    </nav>
  );
};
