import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  // const handleClick = (url: string | null | undefined) => {
  //   if (url) {
  //     window.open(url, "_blank");
  //   } else {
  //     navigate("/404");
  //   }
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}
      id="project"
      className="py-24 px-4 relative mt-5"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className=" text-white text-3xl  font-bold mb-4 text-center">
          {t("projects.title1")}<span className="text-pink-300"> {t("projects.title2")}</span>
        </h2>

        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
           {t("projects.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projek) => (
            <div
              key={projek.id}
              className="group bg-card rounded-xl shadow-xl card-hover"
            >
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img
                  src={projek.image}
                  alt={projek.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 bg-black rounded-b-xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projek.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border-slate-700 bg-slate-900 font-medium rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-white text-xl font-semibold mb-1">
                  {projek.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {projek.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => navigate("/404")
                      }
                      className="text-white transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </button>
                    <button
                      onClick={() => navigate("/404")
                      }
                      className="text-white transition-colors duration-300"
                    >
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
