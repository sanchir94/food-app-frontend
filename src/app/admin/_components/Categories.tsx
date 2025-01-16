"use client";
import { useEffect, useState } from "react";

type CategoryType = {
  categoryName: string;
  _id: string;
};
export default function Category() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const categoryName = prompt("Enter Category Name");
    const response = await fetch("http://localhost:8000/food-category/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryName,
      }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };

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

      <button className="bg-red-800 p-4" onClick={addCategory}>
        new
      </button>
    </div>
  );
}
