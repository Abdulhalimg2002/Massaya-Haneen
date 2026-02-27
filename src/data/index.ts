import { WorkCategory, type BookingF, type contactF, type ourW, type Srvice } from "@/interface";

export const srvicelist:Srvice[]=[
    {
        Sname:"services.hairStyling.name",
        imag:"/haircutC.png",
        des:"services.hairStyling.description",
       
    },
      {
        Sname:"services.makeup.name",
          imag:"/cosmetics.png",
        des:"services.makeup.description",
       
    },
     {
        Sname:"services.hairProtein.name",
         imag:"public/hair-care.png",
        des:"services.hairProtein.description",
        
    },
      {
        Sname:"services.skinCleansing.name",
        imag:"/face-mask.png",
        des:"services.skinCleansing.description",
       
    },
        {
        Sname:"services.fillersBotox.name",
        imag:"/lips.png",
        des:"services.fillersBotox.description",
        
    },
        {
        Sname:"services.moroccanBath.name",
        imag:"/bath.png",
        des:"services.moroccanBath.description",
        
    },
    {
        Sname:"services.nails.name",
        imag:"/nail-polish.png",
        des:"services.nails.description",
    },
    {
        Sname:"services.EyelashesAndEyebrows.name",
        imag:"/tool.png",
        des:"services.EyelashesAndEyebrows.description",
    }
]
export const ourwli:ourW[]=[
    
    
    {
        id:1,
        media:{type:"image", src:["/photo_5839243317680475340_y.jpg"]},
        category:WorkCategory.HairStyling
    },
      {
        id:2,
      
        media:{type:"video",src:["/document_5839243317220482469.mp4"]},
      category:WorkCategory.HairStyling
    },
       {
        id:3,
        media:{type:"video", src:["/document_5839243317220482470.mp4"]},
        category:WorkCategory.HairProtein
    },
      {
        id:4,
        media:{type:"video", src:["/document_5839243317220482471.mp4"]},
        category:WorkCategory.moroccanBath
    },
      {
        id:5,
        media:{type:"video", src:["/document_5839243317220482475.mp4"]},
        category:WorkCategory.moroccanBath
    },
     
      
      
     
     {
        id:6,
        media:{type:"video", src:["/document_5841495117034167453.mp4"]},
        category:WorkCategory.SkinCleansing
    },
      
       {
        id:7,
         media:{type:"image", src:["/photo_5839243317680475335_y.jpg"]},
        category:WorkCategory.HairStyling
    },
     {
        id:8,
        media:{type:"image", src:["/photo_5839243317680475339_y.jpg"]},
        category:WorkCategory.HairStyling
    },
    {
      id:9,
       media:{type:"video", src:["/document_5841495117034167454.mp4"]},
        category:WorkCategory.FillersBotox
    },
    {
      id:10,
       media:{type:"video", src:["/document_5839243317220482477.mp4"]},
        category:WorkCategory.HairStyling
    },
    {
      id:11,
        media:{type:"video", src:["/document_5841495117034167455.mp4"]},
        category:WorkCategory.EyelashesAndEyebrows
    },
    {
      id:12,
        media:{type:"video", src:["/document_5841495117034167456.mp4"]},
        category:WorkCategory.nails
    },
    {
      id:13,
        media:{type:"video", src:["/document_5841495117034167457.mp4"]},
        category:WorkCategory.EyelashesAndEyebrows
    },
    {
      id:14,
        media:{type:"image", src:["/photo_5841495117494160516_y.jpg"]},
        category:WorkCategory.nails
    }
    ,{
      id:15,
        media:{type:"image", src:["/photo_5841495117494160517_y.jpg"]},
        category:WorkCategory.Makeup
    },
  
 
]
export const BookingL: BookingF[] = [
  {
    id: "name",
    name: "name",
    Label: "Name",
    type: "text",
    placeholder: "Enter your name",
    validation: {
      required: true,
      minLength: 10,
    },
  },
  {
    id: "service",
    name: "service",
    Label: "Service",
    validation: {
      required: true,
    },
  },
  {
    id: "date",
    name: "date",
    Label: "Date",
    type: "datetime-local",
    validation: {
      required: true,
    },
  },
  {
    id: "numberofP",
    name: "numberofP",
    Label: "How many people (optional)",
    placeholder: "1",
    type: "number",
  },
];

export const contactl:contactF[]=[
  {
    id:"name",
    name:"name",
   type:"text",
   placeholder:"Entar your name",
   Label:"name",
    validation: {
      required: true,
      minLength: 10,
    },


  },
    {
    id:"message",
    name:"message",
   placeholder:"Entar your massage",
   Label:" message",
    validation: {
      required: true,
      minLength: 50,
    },


  }
]