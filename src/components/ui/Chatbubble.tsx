import { useTranslation } from "react-i18next";

export default function ChatBubble() {

  const { t } = useTranslation();
  return (
    <div className="relative p-6 max-w-xl mx-auto border-white">
      <div className="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
        {/* HR Google message */}
        <div className="flex items-end gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              alt="Obi-Wan"
              src="/src/images/g.png"
            />
          </div>
          {/* Message Content */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sm text-white">HR GOOGLE</span>
              <span className="text-xs text-gray-400">12:45</span>
            </div>
            <div className="bg-gray-700 text-white px-4 py-2 rounded-xl w-fit">
              {t("chat.messageFromGoogle")}
            </div>
            <div className="text-xs text-gray-400 mt-1">{t("chat.delivered")}</div>
          </div>
        </div>

        {/* Diyas message */}
        <div className="flex items-end justify-end gap-3 self-end text-right">
          {/* Message Content */}
          <div>
            <div className="flex items-center gap-2 justify-end mb-1">
              <span className="text-xs text-gray-400">12:46</span>
              <span className="font-bold text-sm text-white">Diyas</span>
            </div>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-xl w-fit ml-auto">
               {t("chat.alright")}
            </div>
            <div className="bg-blue-600 text-white px-4 py-2 mt-1 rounded-xl w-fit ml-auto">
              {t("chat.thankYou")}
            </div>
            <div className="text-xs text-gray-400 mt-1">{t("chat.seenAt")}</div>
          </div>
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              alt="Diyas"
              src="/src/images/dyss.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
