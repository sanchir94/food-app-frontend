"use client";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CategoryType } from "./dishes";

export const CategoriesUsers = () => {
  const [foodCategory, setFoodCategory] = useState<CategoryType[]>();
  const [newCategory, setNewCategory] = useState<string>();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:8000/food-category");
      const data = await response.json();
      setFoodCategory(data);
    };

    fetchCategory();
  }, []);

  const addCategory = () => {
    fetch("http://localhost:8000/food-category/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ categoryName: newCategory }),
    });
    setNewCategory("");
  };

  return (
    <div className=" w-full p-6 rounded-xl  flex flex-col gap-4 text-white ">
      <h4 className=" text-xl font-semibold  ">Category</h4>
      <div className="flex flex-wrap gap-3 ">
        {foodCategory?.map((category) => {
          return (
            <Link href={`${category._id}`} key={category._id}>
              <Badge
                variant="outline"
                className=" rounded-full border py-2 px-4 flex gap-2 text-sm font-medium bg-white"
              >
                {category.categoryName}
              </Badge>
            </Link>
          );
        })}
        <Dialog>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent className="flex flex-col gap-6 w-[460px] p-6">
            <DialogHeader className="pb-4">
              <DialogTitle>Add new category</DialogTitle>
            </DialogHeader>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="categoryName">Category name</Label>
            </div>
            <DialogFooter>
              <DialogClose asChild></DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
