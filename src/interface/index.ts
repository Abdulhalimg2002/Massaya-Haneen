export interface Srvice{
Sname:string;
imag:string;
des:string;
price:string
}
export const WorkCategory = {
  HairStyling: "Hair Styling",
  Makeup: "Makeup",
  HairProtein: "Hair Protein Treatment",
  SkinCleansing: "Skin cleansing",
  FillersBotox: "Fillers and Botox",
} as const;

export type WorkCategory = (typeof WorkCategory)[keyof typeof WorkCategory];

export interface ourW {
  id: number;
  imagU: string[];
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