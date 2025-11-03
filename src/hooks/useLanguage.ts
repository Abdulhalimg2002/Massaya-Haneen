import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type Lang = "ar" | "tr";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const getInitial = (): Lang => {
    const ls = localStorage.getItem("lang");
    if (ls === "tr") return "tr";
    return "ar";
  };

  const [lang, setLang] = useState<Lang>(getInitial);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return { lang, setLang };
};
