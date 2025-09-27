import HotSlide from "@/Components/HotSlide";
import Rename from "@/Components/Rename";
import Shop from "@/Components/Shop";
import { Contact, Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen  flex-col  p4 
                 bg-[url('/BMW.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-white text-center text-4xl mt-6">
          Welcome to Sonlfem store
        </h1>
        <p className="text-center mt-4 text-white text-lg">
          An Online Store where you get quality products a true online home where mony meets value
        </p>
        <img src="/Home.jpg" alt="Home-img" className="w-74 h-74 rounded-lg object-cover mx-auto mt-8" />
        <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-16 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition-all duration-300">
            Welcome
          </button>
        </div> *
      </div>
      <HotSlide />
      <Shop />
      <Rename/>
    </>
  );
}
