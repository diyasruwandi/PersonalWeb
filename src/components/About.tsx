import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useTranslation(); // ✅ Inisialisasi t()
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((el) => {
      gsap.to(el, {
        backgroundPositionX: "0%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          scrub: 5,
          start: "left center",
          end: "bottom bottom",
        },
      });
    });
  }, []);

    const textLines = [
    t("about.line1"),
    t("about.line2"),
    t("about.line3"),
    t("about.line4"),
    t("about.line5"),
  ];

  return (
    <div className="flex justify-center items-center w-full px-4">
      <div className="w-full  sm:max-w-sm md:max-w-sm lg:max-w-lg xl:max-w-4xl">
        <div className="relative rounded-xl border border-zinc-700">
          <div className="bg-zinc-800 rounded-xl p-4 sm:p-6 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed xl:text-center text-justify">
            {textLines.map((text, index) => (
              <p key={index} className="reveal-text gradient-text">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
