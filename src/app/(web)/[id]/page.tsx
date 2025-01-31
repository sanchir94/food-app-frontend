"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "next/navigation";
import { Dishess } from "../Dishess";
import { CategoriesUsers } from "../categoriesUser";
import { ShoppingCart, User } from "lucide-react";

export default function Home() {
  const params = useParams();
  return (
    <div>
      <div className="w-[full] h-[68px] bg-[#18181B] flex  items-center justify-between  ">
        <img className="w-[146px] h-[44px] ml-16 " src="hoollogo.png" />
        <div className="text-white flex  mr-16 gap-4 ">
          <ShoppingCart />
          <User />
        </div>
      </div>
      <div className="  pl-6 pr-10 py-6 flex flex-col gap-6 overflow-scroll bg-[#404040]">
        <div className=" flex flex-col gap-6">
          <CategoriesUsers />
          <Dishess />
        </div>
      </div>
    </div>
  );
}
