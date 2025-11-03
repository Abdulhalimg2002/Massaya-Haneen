import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import Image from "../components/image";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

const LanguageSelect = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setLang } = useLanguage();

  const handleLanguage = (lang: "ar" | "tr") => {
    setLang(lang);
    navigate("/Home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#c39a78] px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="mb-6">
        <Image src="Ma-removebg-preview.png" alt="massaya" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        {t("welcome")}
      </h1>
      <p className="text-white mb-10 text-center text-lg">
        {t("selectLanguage")}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Button
          onClick={() => handleLanguage("ar")}
          size="lg"
          className="w-full sm:w-auto flex items-center justify-center gap-2 transition-transform hover:scale-105"
          aria-label={t("arabic")}
        >
          {t("arabic")}
          <ChevronRight size={20} className="mt-1" />
        </Button>

        <Button
          onClick={() => handleLanguage("tr")}
          size="lg"
          className="w-full sm:w-auto flex items-center justify-center gap-2 transition-transform hover:scale-105"
          aria-label={t("turkish")}
        >
          {t("turkish")}
          <ChevronRight size={20} className="mt-1" />
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelect;
