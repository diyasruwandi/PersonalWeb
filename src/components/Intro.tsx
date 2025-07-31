import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import GlareHover from "../animate/GlareHover";

export default function Intro() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.2,
          duration: 0.3,
        }}
      >
        <div className="flex text-white items-center justify-center text-center p-[11rem_1rem] mt-20">
          <div
            // transition={{duration: }}
            className="max-w-[705px]"
          >
            <h1 className="text-[4.5rem] font-bold mb-6 leading-[1.3]">
              Hallo!{" "}
              <motion.span
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: [0, 20, -15, 10, -10, 5, 0], opacity: 1 }}
                transition={{
                  duration: 1.5,
                  // repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                  // type: "spring",
                  // stiffness: 125,
                  // delay: 0.2,
                  // duration: 0.7,
                }}
                className="inline-block origin-bottom-right"
              >
                👋
              </motion.span>{" "}
              <br />
              Welcome to my personal website.
            </h1>
            <p className="text-[1.3rem] text-white mb-10 leading-[1.6]">
              This website is made as a multipurpose space to document what I
              learn and work on. <br />
            </p>
            <div className="inline-block transition ease duration-300  border-[#333]">
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
