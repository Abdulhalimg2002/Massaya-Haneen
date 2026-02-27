import { Button } from "@/components/ui/button";
import Image from "../components/image";
import { contactl, ourwli, srvicelist } from "@/data";
import { motion } from "framer-motion";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import BookingModal from "@/components/Model/BookingModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactS } from "@/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { getWorkTranslationKey } from "@/utils/translationUtils";

import VideoCard from "@/components/Video/VideoCard";

interface ContactFormValues {
  name: string;
  message: string;
}

const HomeP = () => {
  const { t } = useTranslation();
 
  const [openBooking, setOpenBooking] = useState(false);

  // 🟢 react-hook-form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactS),
  });

  

  const onSubmit = (data: ContactFormValues) => {
    const whatsappURL = `https://wa.me/905550550573?text=${encodeURIComponent(
      `✨ New message from ${data.name}:\n\n${data.message}`
    )}`;
    window.open(whatsappURL, "_blank");
    reset(); // إعادة تعيين الفورم
  };

  return (
    <div className="min-h-screen bg-[#c39a78] text-white scroll-smooth">
      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] px-4 sm:px-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="Ma-removebg-preview.png"
          alt="Massaya Haneen"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-6 object-contain"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          {t("home.welcomeTo")} <span className="text-[#f4e3c3]">{t("home.massayaHaneen")}</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#fffbea] mb-8 leading-relaxed max-w-2xl">
          {t("home.discoverBeauty")}
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => setOpenBooking(true)}
            className="bg-[#3d2f23] hover:bg-[#f4e3c3] hover:text-[#3d2f23] text-white text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all shadow-md"
          >
            {t("home.bookAppointment")}
          </Button>
        </motion.div>
      </motion.div>

      <BookingModal open={openBooking} setOpen={setOpenBooking} />

      {/* About Section */}
      <section className="py-16 px-4 sm:px-8 md:px-12 bg-[#c39a78]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          {t("home.aboutUs")}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Video */}
          <motion.div
            className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <VideoCard id="about-video" src="/v1.mp4" className="w-full h-full" />
             
            
           
           
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              {t("home.aboutText1")}
            </p>
            <p className="text-white mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
              {t("home.aboutText2")}
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="about">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#3d2f23] hover:bg-[#f4e3c3] hover:text-[#3d2f23] text-white text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all shadow-md">
                    {t("home.readMore")}
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-8 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{t("home.ourServices")}</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {srvicelist.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-[#d7a863] rounded-2xl shadow-lg flex flex-col items-center text-center p-6 transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 mb-6">
                <Image src={service.imag} alt={service.Sname} className="w-full h-full object-cover  mx-auto" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-white">{t(service.Sname)}</h3>
                <p className="text-white/90 text-sm sm:text-base mb-3">{t(service.des)}</p>
               
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Works */}
      <section className="py-16 px-4 sm:px-8 md:px-12 bg-[#c39a78]">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{t("home.ourWorks")}</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
      {ourwli.slice(0, 3).map((work, idx) => (
  <motion.div
    key={work.id}
    className="bg-[#d7a863] rounded-2xl shadow-lg flex flex-col items-center text-center p-4 cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: idx * 0.2 }}
  >
    {work.media.type === "image" ? (
      <Image
        src={work.media.src[0]}
        alt={String(work.category)}
       
        className="w-full h-48 sm:h-56 object-cover rounded-md mb-3"
      />
    ) : (
      <>
    <div className="relative w-full h-full aspect-video rounded-2xl overflow-hidden shadow-lg">
  <VideoCard
    id={`work-${work.id}`}
    src={work.media.src[0]}
    className="w-full h-full object-cover"
  />
</div>
            </>

      
    )}
    

    <h3 className="font-semibold text-lg text-white">
      {t(`ourWork.${getWorkTranslationKey(work.category)}`)}
    </h3>
  </motion.div>
))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/Home/work">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#3d2f23] hover:bg-[#f4e3c3] hover:text-[#3d2f23] text-white text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all shadow-md">
                {t("home.seeMore")}
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-8 md:px-12 text-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("home.contactUs")}
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto bg-[#d7a863] p-6 rounded-2xl shadow-lg space-y-4 text-[#3d2f23]"
        >
          {contactl.map((contact) => (
            <div key={contact.id}>
              <Label htmlFor={contact.id} className="text-white font-semibold text-sm sm:text-base">
                {t(`home.${contact.name}`)}
              </Label>

              {contact.name === "name" ? (
                <Input
                  id={contact.id}
                  {...register("name")}
                  placeholder={t("home.namePlaceholder")}
                  className="mt-1"
                />
              ) : (
                <Textarea
                  id={contact.id}
                  {...register("message")}
                  placeholder={t("home.messagePlaceholder")}
                  className="mt-1 min-h-[120px]"
                />
              )}

              {errors[contact.name as keyof ContactFormValues] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[contact.name as keyof ContactFormValues]?.message}
                </p>
              )}
            </div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#3d2f23] hover:bg-[#f4e3c3] hover:text-[#3d2f23] text-white py-3 rounded-xl font-semibold shadow-md transition-all"
          >
            {t("home.sendViaWhatsApp")}
          </motion.button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a href="https://wa.me/905550550573" target="_blank" rel="noopener noreferrer" className="bg-[#3d2f23] p-4 rounded-full text-white text-2xl hover:bg-[#25D366] hover:text-white transition-all">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/masaya_haneen/" target="_blank" rel="noopener noreferrer" className="bg-[#3d2f23] p-4 rounded-full text-white text-2xl hover:bg-[#E4405F] hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/masaya.haneen" target="_blank" rel="noopener noreferrer" className="bg-[#3d2f23] p-4 rounded-full text-white text-2xl hover:bg-[#1877F2] hover:text-white transition-all">
            <FaFacebook />
          </a>
        </motion.div>
      </section>
      
    </div>
  );

};

export default HomeP;
