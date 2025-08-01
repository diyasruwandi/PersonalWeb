const GumroadButton = ({
  children = "Buy Now",
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        text-white bg-black border border-black rounded 
        px-8 py-3 transition duration-200 
        hover:bg-pink-300 hover:text-black 
        hover:-translate-x-1 hover:-translate-y-1 
        hover:shadow-[4px_4px_0_0_black] 
        active:translate-x-0 active:translate-y-0 
        active:shadow-none
      `}
    >
      {children}
    </button>
  );
};

export default GumroadButton;
