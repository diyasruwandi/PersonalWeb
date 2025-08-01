import { useState } from "react";

export default function SubscriptionCard() {
  const [hoverBanner, setHoverBanner] = useState(false);

  return (
    <div className="w-80 p-8 bg-white border-[8px] border-black shadow-[15px_15px_0px_black] rotate-[-2deg] transition-all duration-300 relative overflow-hidden hover:rotate-0 hover:scale-[1.02] hover:shadow-[20px_20px_0px_black] active:animate-shake">
      {/* Banner */}
      <div
        className={`absolute top-1 right-[-95px] bg-black text-white px-4 py-3 w-[350px] text-center rotate-45 font-bold text-[18px] tracking-[2px] transition-colors duration-500 overflow-hidden`}
        onMouseEnter={() => setHoverBanner(true)}
        onMouseLeave={() => setHoverBanner(false)}
        style={{ transition: "background 0.5s ease" }}
      >
        <span
          className={`absolute w-full left-[13%] top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            hoverBanner ? "opacity-0 -translate-y-full" : "opacity-100"
          }`}
        >
          WARNING !
        </span>
        <span
          className={`absolute w-full left-[13%] top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            hoverBanner ? "opacity-100 -translate-y-[40%]" : "opacity-0 translate-y-[60%]"
          }`}
        >
          JOIN US
        </span>
      </div>

      {/* Title */}
      <span className="text-xl font-bold text-black uppercase mb-2 border-b-2 border-black inline-block w-1/2">
        atosperson
      </span>

      {/* Subtitle */}
      <p className="text-base text-gray-700 leading-relaxed mb-5 pb-2">
        Don’t blame me if you suddenly feel like coding after browsing around here.
      </p>

      {/* Form */}
      <form className="flex flex-col gap-5">
        <button
          type="submit"
          className="p-3 border-4 border-black text-lg font-bold transition-all duration-300 focus:outline-none focus:scale-105 hover:bg-black hover:text-white hover:-translate-y-1 shadow-[0_5px_0_black] active:translate-y-0 active:shadow-none active:animate-shake"
        >
            I KNEW THAT
            </button>
        <button
          type="submit"
          className="border-4 border-black bg-black text-white py-3 text-lg font-bold uppercase cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_5px_0_black] active:translate-y-0 active:shadow-none active:animate-shake"
        >
          OKAY
        </button>
      </form>
    </div>
  );
}
