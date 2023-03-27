import Image from "next/image";
import { ICategory } from "@/utils/types";

export const CategoryCard = (category: ICategory) => {
  return (
    <div>
      <h3>{category.name}</h3>
      <Image alt={`Картинка категории ${category.name}`} src={category.images.original.uri}></Image>
    </div>
  );
};
