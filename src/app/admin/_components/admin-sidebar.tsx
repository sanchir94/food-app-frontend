import { HandPlatter } from "lucide-react";
import { Dock } from "lucide-react";
import { Car } from "lucide-react";
import { Settings } from "lucide-react";

import Link from "next/link";
export default function SideBar() {
  return (
    <div className="w-[205px] min-h-[1024px] bg-white">
      <div className="flex items-center justify-center ">
        <div className="items-center justify-center flex size-[40px] text-red-500">
          <HandPlatter />
        </div>
        <div>
          <p className="text-[18px] font-[600] leading-[28px]">NomNom</p>
          <p className="text-[12px] font-[400] leading-[16px] text-[#71717A]">
            Swift delivery
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[200px] h-auto p-4 items-start ml-5">
          <Link href="/admin">
            <button className="flex items-center gap-2 mt-4">
              <Dock /> Food menu
            </button>
          </Link>
          <Link href="/admin/orders">
            <button className="flex items-center gap-2 mt-4">
              <Car /> Orders
            </button>
          </Link>
          <button className="flex items-center gap-2 mt-4">
            <Settings /> Settings
          </button>
        </div>
      </div>
    </div>
  );
}
