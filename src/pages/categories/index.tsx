import { useState } from "react";
import styles from "./styles.module.css";
import { ICategory } from "@/utils/types";

export default function Categories() {
  const [categories, setCategories] = useState<ICategory | null>(null);

  return (
    <>
      <div className={styles.headers}>
        <h3 className={styles.heading}>Категории товаров</h3>
        <button className={styles.addCategoryButton}>Добавить категорию</button>
      </div>
      <div></div>
    </>
  );
}
