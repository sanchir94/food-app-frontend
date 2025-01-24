"use client";
import { useState, useEffect } from "react";
type CategoryType = {
  categoryName: string;
  _id: string;
};

export default function CategoriesUsers() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const categoryName = prompt("Enter new category name");
    const response = await fetch("http://localhost:8000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };
  async function fetchAll() {
    const res = await fetch(`http://localhost:8000/food-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="text-[30px] font-[600] text-white ml-16 h-[150px] ">
      <h4>Category</h4>
      <div className="flex flex-wrap items-center mt-8 gap-4">
        {categories?.map((category) => (
          <div
            key={category._id}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full bg-white text-black text-sm font-medium"
          >
            {category.categoryName}
          </div>
        ))}
      </div>
    </div>
  );
}
