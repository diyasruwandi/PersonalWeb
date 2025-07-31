"use client";
import { useEffect, useState, useRef } from "react";
import { ref, onValue, runTransaction } from "firebase/database";
import { database } from "@/lib/firebase";
import { FiHeart, FiZap } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Statistic() {
  const [pageViews, setPageViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const hasIncremented = useRef(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const pageViewsRef = ref(database, "pageViews");
    // Tambah page view sekali
    if (!hasIncremented.current) {
      runTransaction(pageViewsRef, (currentValue: number | null) => {
        return (currentValue || 0) + 1;
      });
      hasIncremented.current = true;
    }

    const unsubscribeViews = onValue(pageViewsRef, (snapshot) => {
      const val = snapshot.val();
      setPageViews(val || 0);
    });

    // ==== LIKES ====
    const likesRef = ref(database, "likes");

    const likedBefore = localStorage.getItem("hasLiked");
    if (likedBefore === "true") {
      setLiked(true);
    }

    const unsubscribeLikes = onValue(likesRef, (snapshot) => {
      const val = snapshot.val();
      setLikes(val || 0);
    });

    return () => {
      unsubscribeViews();
      unsubscribeLikes();
    };
  }, []);

  // Fungsi handle like
  const handleLike = () => {
    const hasLiked = localStorage.getItem("hasLiked");

    // Cek apakah user sudah menyukai (dari localStorage)
    if (hasLiked || liked) {
      setShowAlert(true); // munculkan alert custom
      setTimeout(() => setShowAlert(false), 3000); // hilang otomatis setelah 3 detik
      return;
    }

    // Update nilai di database
    const likesRef = ref(database, "likes");
    runTransaction(likesRef, (currentValue: number | null) => {
      return (currentValue || 0) + 1;
    });

    setLiked(true); // tandai sudah like
    localStorage.setItem("hasLiked", "true");

  };
  
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row w-full max-w-2xl gap-6 px-4 py-6 sm:px-6 sm:py-6 rounded-xl shadow-xl text-white items-center sm:items-start text-center sm:text-left">
        {/* Total Likes */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 transition"
          >
            {liked ? (
              <FaHeart className="text-pink-500 text-4xl sm:text-xl mb-2" />
            ) : (
              <FiHeart className="text-pink-400 text-4xl sm:text-xl mb-2 hover:text-pink-300" />
            )}
            {/* <span className="text-lg sm:text-base">Like</span> */}
          </button>
          {showAlert && (
            <div className="mt-2 text-sm text-pink-600 bg-pink-100 border border-pink-300 px-3 py-2 rounded-lg transition-opacity duration-300">
              {t("statistic.alreadyLiked")}
            </div>
          )}
          <div className="text-sm text-gray-400">{t("statistic.totalLikes")}</div>
          <div className="text-3xl font-bold text-pink-400 mb-1">{likes}</div>
        </div>
        {/* Page Views */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2">
          <FiZap className="text-yellow-400 text-4xl sm:text-xl mb-2" />
          <div className="text-sm text-gray-400">{t("statistic.pageViews")}</div>
          <div className="text-3xl font-bold text-yellow-400 mb-1">
            {pageViews}
          </div>
          <div className="text-sm text-gray-400">{t("statistic.moreThanLastMonth")}</div>
        </div>
      </div>
    </div>
  );
}
