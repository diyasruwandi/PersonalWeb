import React from "react";

type ButtonSketchProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const ButtonSketch: React.FC<ButtonSketchProps> = ({
  children = "Click Me",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        text-[1.5rem] text-[#fafafa] uppercase
        px-5 py-2.5 rounded-[10px] border-2 border-[#fafafa] 
        bg-[#252525] shadow-[3px_3px_0px_#fafafa]
        cursor-pointer mt-9 mb-9
        active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
        transition duration-150 ease-in-out
      `}
    >
      {children}
    </button>
  );
};

export default ButtonSketch;
