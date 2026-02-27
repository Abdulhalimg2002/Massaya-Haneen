export interface Srvice{
Sname:string;
imag:string;
des:string;
}
export const WorkCategory = {
  HairStyling: "hairStyling",
  Makeup: "makeup",
  HairProtein: "hairProtein",
  SkinCleansing: "skinCleansing",
  FillersBotox: "fillersBotox",
  moroccanBath: "moroccanBath",
  nails: "nails",
  EyelashesAndEyebrows: "Eyelashes and eyebrows",
} as const;
export type WorkCategory = (typeof WorkCategory)[keyof typeof WorkCategory];
export type WorkMedia =
  | {
      type: "image";
      src: string[];
    }
  | {
      type: "video";
      src: string[];
    };

export interface ourW {
  id: number;
   media: WorkMedia;
 category: WorkCategory;
}
export interface BookingF{
  id: string;
  name: "name" | "date" | "numberofP" | "service";
  type?: string;
  placeholder?: string;
  Label: string;
   validation?: {
    required?: boolean;
    minLength?: number;
    test?: RegExp;
  };

}
export interface contactF{
  id:string;
  name:"message"|"name";
  type?:string;
  placeholder: string;
  Label: string;
   validation: {
    required?: boolean;
    minLength?: number;
   
  };

}
export interface VideoAudioContextType {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}