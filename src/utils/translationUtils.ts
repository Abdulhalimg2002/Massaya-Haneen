import { WorkCategory } from "@/interface";

export const getWorkTranslationKey = (category: WorkCategory) => {
  switch (category) {
    case WorkCategory.HairStyling: return "hairStyling";
    case WorkCategory.Makeup: return "makeup";
    case WorkCategory.HairProtein: return "hairProtein";
    case WorkCategory.SkinCleansing: return "skinCleansing";
    case WorkCategory.FillersBotox: return "fillersBotox";
  }
};
