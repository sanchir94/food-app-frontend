import { ShoppingCart } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { User } from "lucide-react";
import { Dishess } from "./Dishess";
import "./styles.css";
import { CategoriesUsers } from "./categoriesUser";

export default function App() {
  return (
    <div>
      <div className="w-[full] h-[68px] bg-[#18181B] flex  items-center justify-between  ">
        <img className="w-[146px] h-[44px] ml-16 " src="hoollogo.png" />
        <div className="text-white flex  mr-16 gap-4 ">
          <ShoppingCart />
          <User />
        </div>
      </div>
      <img className="w-full h-[780px]" src="hoolzurag.png" />
      <div className="bg-[#404040]">
        <CategoriesUsers />
        <Dishess />
      </div>

      <footer className="bg-[#18181B] w-full h-[auto]">
        <div className="  w-full h-[92px] bg-[#EF4444] text-white text-[30px] font-[600] flex items-center justify-center overflow-hidden ">
          <div className="text-animation-infinite-scroll w-screen flex gap-[300px]">
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
            <p>Fresh fast delivery</p>
          </div>
        </div>
        <div className=" mt-52 w-[1450px] h-[228px] flex justify-around  mx-auto px-8">
          <div className="flex items-start justify-start ml-[-140px]">
            <img src="footerlogo.png" alt="NomNom Logo" />
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[16px] text-[#71717A]  font-[400]">
              NOMNOM
            </span>
            <div className="text-[16px] text-[#FAFAFA]  flex flex-col gap-2">
              <span>Home</span>
              <span>Contact us</span>
              <span>Delivery zone</span>
            </div>
          </div>

          <div className=" gap-4 flex flex-col ">
            <span className="text-[16px] text-[#71717A]  font-[400] w-[full]  ">
              MENU
            </span>
            <ul className="flex flex-col text-[16px] text-[#FAFAFA] w-[400px] ">
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-2 w-[50%]">
                  <li>Appetizers</li>
                  <li>Salads</li>
                  <li>Pizzas</li>
                  <li>Lunch favorites</li>
                  <li>Main dishes</li>
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                  <li>Side dishes</li>
                  <li>Brunch</li>
                  <li>Desserts</li>
                  <li>Beverages</li>
                  <li>Fish & Seafood</li>
                </div>
              </div>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] text-[#71717A] font-[400]">
              FOLLOW US
            </span>
            <div className="flex gap-4 justify-center mt-4">
              <Instagram className="text-white" />
              <Facebook className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-36">
          <div className="w-[1450px] h-[84px] border-t-2 border-gray-500 flex justify-around text-[#71717A] text-[14px] ">
            <div className="mt-5 flex justify-start gap-20 w-[1450px]">
              <p> Copy right 2024 © Nomnom LLC </p>
              <p> Privacy policy </p>
              <p>Terms and conditoin</p>
              <p>Cookie policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
