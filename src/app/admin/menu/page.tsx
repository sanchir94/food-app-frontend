"use client";
import { useEffect, useState } from "react";
import { Categories } from "../_components/Categories";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dishes } from "../_components/Dishes";
export default function Menu() {
  return (
    <div className="w-[100%] pl-6 pr-10 py-6">
      <div className=" flex flex-col gap-6">
        <div className="flex justify-end">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Categories />
      </div>
      <div>
        <Dishes />
      </div>
    </div>
  );
}
