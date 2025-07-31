import { useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="mt-16">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-white bg-black p-1"
    >
      <Tab setPosition={setPosition}><a href="#home">About</a></Tab>
      <Tab setPosition={setPosition}><a href="#projects">Projects</a></Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      {/* <Tab setPosition={setPosition}>Blog</Tab> */}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};