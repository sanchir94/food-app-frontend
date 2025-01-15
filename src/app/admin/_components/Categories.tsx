"use client";
import { useEffect, useState } from "react";

type CategoryType = {
  categoryName: string;
  _id: string;
};
export default function Category() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/food-category/");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category._id}>{category.categoryName}</div>
      ))}
    </div>
  );
}
