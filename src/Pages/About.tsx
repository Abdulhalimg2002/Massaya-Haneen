import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {  useState } from "react";
import { useTranslation } from "react-i18next";
import BookingModal from "@/components/Model/BookingModal";
import VideoCard from "@/components/Video/VideoCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
 
  const { t } = useTranslation();
   const [openBooking, setOpenBooking] = useState(false);

  

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 pt-32 pb-16 bg-[#c39a78] text-white overflow-hidden">
      
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t("about.title")}
      </motion.h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">

        {/* Video Section */}
        <motion.div
          className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
         <VideoCard id="about-video" src="/v1.mp4" className="w-full h-full" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("about.welcome")}
          </h2>
          <p className="text-white mb-6 leading-relaxed font-medium text-sm sm:text-base md:text-lg">
            {t("about.text1")}
          </p>
          <p className="text-white mb-6 leading-relaxed font-medium text-sm sm:text-base md:text-lg">
            {t("about.text2")}
          </p>

          <div className="flex justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => setOpenBooking(true)} className="bg-[#3d2f23] hover:bg-[#f4e3c3] hover:text-[#3d2f23] text-white px-6 py-3 rounded-lg transition-all shadow-md">
                {t("about.bookAppointment")}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
       <BookingModal open={openBooking} setOpen={setOpenBooking} />
    </div>
  );
};

export default About;
