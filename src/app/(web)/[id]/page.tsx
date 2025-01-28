"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useParams } from "next/navigation";

import { Dishess } from "../Dishess";
import { CategoriesUsers } from "../categoriesUser";

export default function Home() {
  const params = useParams();
  return (
    <div className=" w-[100%] pl-6 pr-10 py-6 flex flex-col gap-6 overflow-scroll">
      <div className=" flex flex-col gap-6">
        <div className="flex justify-end">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <CategoriesUsers />
      </div>
      <div>
        <Dishess />
      </div>
    </div>
  );
}
