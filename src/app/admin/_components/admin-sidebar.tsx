import { HandPlatter } from "lucide-react";
import { Dock } from "lucide-react";
import { Car } from "lucide-react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <Button variant="ghost">
            <Dock /> Food menu
          </Button>
          <Button variant="ghost">
            <Car /> Orders
          </Button>
          <Button variant="ghost">
            <Settings /> Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
