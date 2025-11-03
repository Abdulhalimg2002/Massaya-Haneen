import { WorkCategory, type BookingF, type contactF, type ourW, type Srvice } from "@/interface";

export const srvicelist:Srvice[]=[
    {
        Sname:"services.hairStyling.name",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lAOLFqH_VKzBVgngnkYWHjw99VZ0zW6UnxDN7mcSNKPtT9D1TgfDdrLLK0aZZBl-d5A&usqp=CAU",
        des:"services.hairStyling.description",
        price:"services.price"
    },
      {
        Sname:"services.makeup.name",
        imag:"https://img.freepik.com/premium-vector/makeup-icon_933463-8454.jpg",
        des:"services.makeup.description",
        price:"services.price"
    },
     {
        Sname:"services.hairProtein.name",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ytB-QCeUEHs5hbBK-VJEiA7CQOpdALfTbomhQ9raCX_nLRvCrnGkpipanklCvmCShxU&usqp=CAU",
        des:"services.hairProtein.description",
        price:"services.price"
    },
      {
        Sname:"services.skinCleansing.name",
        imag:"https://static.vecteezy.com/system/resources/previews/023/837/731/non_2x/facial-mask-icon-face-skin-care-beauty-cosmetic-vector.jpg",
        des:"services.skinCleansing.description",
        price:"services.price"
    },
        {
        Sname:"services.fillersBotox.name",
        imag:"https://media.istockphoto.com/id/1173452677/vector/botox-and-filler.jpg?s=612x612&w=0&k=20&c=1adPKKabEMHbfYGDjhL_sv_oeA-v5uklFQXK4nlWsYA=",
        des:"services.fillersBotox.description",
        price:"services.price"
    },
        {
        Sname:"services.moroccanBath.name",
        imag:"https://media.istockphoto.com/id/1393675345/vector/bucket-and-ladle-line-icon.jpg?s=612x612&w=0&k=20&c=0SaXl7IWe1VnG7P9Ho8RdleLApSgc4EGyAE0U-e_0gA=",
        des:"services.moroccanBath.description",
        price:"services.price"
    },
]
export const ourwli:ourW[]=[
    
    
    {
        id:1,
        imagU:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoW8q6dASSiiQbskH71xW4V3k-o79_MnQPMw&s"],
        category:WorkCategory.HairStyling
    },
      {
        id:2,
        imagU:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNE-jB9KPYIzbHdM5oikDVQvinOPV1UxeBCrQvKLmQurDBJBqnLaCEmWw-5LWVSeIsxs&usqp=CAU"],
        category:WorkCategory.FillersBotox
    },
       {
        id:4,
       imagU:["https://img.youm7.com/ArticleImgs/2018/1/18/741780-%D9%81%D8%B1%D8%AF-%D8%A7%D9%84%D8%B4%D8%B9%D8%B1-%D8%A8%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D8%A7%D8%AA%D9%8A%D9%86.png"],
        category:WorkCategory.HairProtein
    },
      {
        id:5,
        imagU:["https://static.aljamila.com/styles/1100x732_scale/public/2019/05/30/2750146-100756102.jpg"],
        category:WorkCategory.Makeup
    },
      {
        id:6,
        imagU:["https://admin.dotcarecms.com/storage/HJH/uploads/November2023/pwRPvSUzpjy8KH9yGCeQHvfVEVCv0SaCSDV97gks.webp"],
        category:WorkCategory.SkinCleansing
    },
      {
        id:7,
        imagU:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJTpCp81krLON_rs6xGw_nBM8qOLpOuZ-rw&s"],
        category:WorkCategory.Makeup
    },
      {
        id:8,
       imagU:["https://www.okaz.com.sa/uploads/images/2020/09/06/1628915.jpg"],
       category:WorkCategory.HairStyling
    },
       {
        id:9,
        imagU:["https://img.youm7.com/ArticleImgs/2018/1/18/741780-%D9%81%D8%B1%D8%AF-%D8%A7%D9%84%D8%B4%D8%B9%D8%B1-%D8%A8%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D8%A7%D8%AA%D9%8A%D9%86.png"],
        category:WorkCategory.HairProtein
    },
      {
        id:10,
       imagU:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJTpCp81krLON_rs6xGw_nBM8qOLpOuZ-rw&s"],
        category:WorkCategory.Makeup
    },
     {
        id:11,
        imagU:["https://browsandlips.ae/wp-content/uploads/2023/10/deep-cleansing-facial-before-after.webp"],
        category:WorkCategory.SkinCleansing
    },
      {
        id:12,
        imagU:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9yt6uQCrYLOk9R9vXUGsDm6H0f50E-XYEhc2c3BgzRvCQ05NiKP9PcN805JDDAvsBjg&usqp=CAU"],
        category:WorkCategory.FillersBotox
    },
       {
        id:13,
         imagU:["https://i.pinimg.com/736x/74/8e/10/748e10c8953cd7d5bc641d9734893eef.jpg"],
        category:WorkCategory.HairStyling
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