import { WorkCategory } from "@/interface";

export const getWorkTranslationKey = (category: WorkCategory) => {
  switch (category) {
    case WorkCategory.HairStyling: return "hairStyling";
    case WorkCategory.Makeup: return "makeup";
    case WorkCategory.HairProtein: return "hairProtein";
    case WorkCategory.SkinCleansing: return "skinCleansing";
    case WorkCategory.FillersBotox: return "fillersBotox";
    case WorkCategory.moroccanBath: return "moroccanBath";
    case WorkCategory.nails: return "nails";
    case WorkCategory.EyelashesAndEyebrows: return "EyelashesAndEyebrows";
  }
};
