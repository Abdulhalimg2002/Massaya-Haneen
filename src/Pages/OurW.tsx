import { useState } from "react";
import { ourwli } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../components/image";
import { WorkCategory } from "@/interface";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { getWorkTranslationKey } from "@/utils/translationUtils";

const OurW = () => {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { t } = useTranslation();

  const filteredWorks =
    selectedCategory === "All"
      ? ourwli
      : ourwli.filter((work) => work.category === selectedCategory);

  const totalPages = Math.ceil(filteredWorks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWorks = filteredWorks.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (category: WorkCategory | "All") => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#c39a78] text-white px-4 sm:px-8 md:px-12 py-16">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {t("ourWork.title")}
      </motion.h1>

      {/* أزرار الفئات */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button
          onClick={() => handleCategoryChange("All")}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === "All"
              ? "bg-[#d7a863] text-white"
              : "bg-[#3d2f23] hover:bg-white/40"
          }`}
        >
          {t("ourWork.all")}
        </button>

        {Object.values(WorkCategory).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-[#d7a863] text-white"
                : "bg-[#3d2f23] hover:bg-white/40"
            }`}
          >
            {t(`ourWork.${getWorkTranslationKey(cat)}`)}
          </button>
        ))}
      </motion.div>

      {/* شبكة عرض الأعمال */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory + currentPage}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {currentWorks.map((work, i) => (
            <motion.div
              key={work.id}
              className="bg-[#d7a863] rounded-2xl shadow-lg flex flex-col items-center text-center p-4 cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {work.imagU.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={work.category}
                  className="w-full h-64 object-cover rounded-xl"
                />
              ))}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{t(`ourWork.${getWorkTranslationKey(work.category)}`)}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* أزرار التنقل بين الصفحات */}
      {totalPages > 1 && (
        <motion.div
          className="flex justify-center items-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-[#3d2f23] text-white rounded-lg hover:bg-white/40 disabled:opacity-40"
          >
            {t("ourWork.prev")}
          </Button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                currentPage === i + 1
                  ? "bg-[#d7a863] text-white"
                  : "bg-[#3d2f23] hover:bg-white/40"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <Button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-[#3d2f23] text-white rounded-lg hover:bg-white/40 disabled:opacity-40"
          >
            {t("ourWork.next")}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default OurW;
