import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Image from "../image";
import { useTranslation } from "react-i18next";
import BookingModal from "../Model/BookingModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [openBooking, setOpenBooking] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#d7a863] shadow-md fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16 md:h-20">
      
        {/* Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
      <Image 
            src="/Ma-removebg-preview.png" 
            alt="massaya" 
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain"
          />
          <Link to={"/"} className="text-xl sm:text-xl md:text-xl lg:text-xl font-bold text-white" >
          
            Massaya Haneen
        
          </Link>
        </div>
         <BookingModal open={openBooking} setOpen={setOpenBooking} />

        {/* Desktop Links (only visible on large screens) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/Home" className="text-white hover:text-[#3d2f23] transition-colors font-bold">{t("navbar.home")}</Link>
          <Link to="about" className="text-white hover:text-[#3d2f23] transition-colors font-bold">{t("navbar.aboutUs")}</Link>
          <Link to="work" className="text-white hover:text-[#3d2f23] transition-colors font-bold">{t("navbar.ourWork")}</Link>

          <Button   onClick={() => setOpenBooking(true)} className="bg-[#3d2f23] hover:bg-[#f4e3c3] hover:text-[#3d2f23] text-white px-6 py-2 rounded-lg">
            {t("navbar.bookAppointment")}
          </Button>
        </div>

        {/* Hamburger Menu (visible on mobile + iPad) */}
        <div className="lg:hidden flex items-center">
          {isOpen ? (
            <X size={30} className="text-white cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu size={30} className="text-white cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile + iPad Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#d7a863] shadow-md flex flex-col items-center py-6 space-y-5 transition-all duration-300">
          <Link to="/Home" onClick={toggleMenu} className="text-white font-bold hover:text-yellow-400 transition-colors text-lg">{t("navbar.home")}</Link>
          <Link to="about" onClick={toggleMenu} className="text-white font-bold hover:text-yellow-400 transition-colors text-lg">{t("navbar.aboutUs")}</Link>

          <Link to="work" onClick={toggleMenu} className="text-white font-bold hover:text-yellow-400 transition-colors text-lg">{t("navbar.ourWork")}</Link>
 <Button   onClick={() => setOpenBooking(true)} className="bg-[#3d2f23] hover:bg-[#f4e3c3] hover:text-[#3d2f23] text-white px-6 py-2 rounded-lg">
            {t("navbar.bookAppointment")}
          </Button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
