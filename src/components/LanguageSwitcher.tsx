"use client";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // agar tersimpan
  };

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "id", label: "Indonesia", flag: "🇮🇩" },
    { code: "ko", label: "한국어", flag: "🇰🇷" },
  ];

  const currentLang = i18n.language;

  return (
    <div className="flex gap-4 items-center justify-center mt-6 overflow-hidden">
      {languages.map(({ code, label, flag }) => {
        const isActive = currentLang === code;
        return (
          <button
            key={code}
            onClick={() => changeLanguage(code)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
              ${isActive
                ? "bg-gradient-to-br from-pink-500 to-yellow-500 shadow-lg scale-105 text-white"
                : "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md text-white hover:brightness-110 hover:scale-105"
              }
            `}
          >
            <span className="text-xl">{flag}</span>
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
