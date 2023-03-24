import { useState } from "react";
import { SideBar } from "@/components/SideBar";
import styles from "./styles.module.css";

export default function Categories() {
  const [categories, setCategories] = useState<ICategories>(null);

  return (
    <div className={styles.headers}>
      <h3 className={styles.heading}>Категории товаров</h3>
      <button className={styles.addCategoryButton}>Добавить категорию</button>
    </div>
  );
}
