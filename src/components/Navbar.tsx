import { motion } from "framer-motion";
// import GlareHover from "../animate/GlareHover";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full backdrop-blur-lg z-10 text-white flex px-20 py-6 justify-between items-center"
    >
      <div className="text-[1.3rem] font-medium">Yaszweb</div>
      <ul className="flex gap-8 list-none">
        <li>
          <a href="#home" className="text-white hover:text-pink-300">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:text-pink-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#gallery" className="text-white hover:text-pink-300">
            Gallery
          </a>
        </li>
      </ul>
      <div>
      </div>
    </motion.nav>
  );
}
