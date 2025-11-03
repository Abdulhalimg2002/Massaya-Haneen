import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#d7a863] text-white py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Logo & About */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            <img
              src="/Ma-removebg-preview.png"
              alt="Massaya Haneen Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <h1 className=" font-bold text-white">Massaya Haneen</h1>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2 text-white/90 text-sm font-bold">
            <li>
              <Link to="/Home" className="hover:text-[#3d2f23] transition-colors">{t("footer.home")}</Link>
            </li>
            <li>
              <Link to="/Home/about" className="hover:text-[#3d2f23] transition-colors">{t("footer.aboutUs")}</Link>
            </li>
            <li>
              <Link to="/Home/work" className="hover:text-[#3d2f23] transition-colors">{t("footer.ourWorks")}</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 text-center sm:text-left">{t("footer.contact")}</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-1 sm:gap-2">
              <Phone className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
              <span className="text-center sm:text-left">+90 555 055 0573</span>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-1 sm:gap-2">
             <MapPin className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 text-white" />
              <span className="text-center sm:text-left">
                Merkez, Menekşe Sk. Avcılar/İstanbul
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t("footer.followUs")}</h3>
          <div className="flex justify-center sm:justify-start items-center gap-4">
            <a href="https://www.facebook.com/masaya.haneen" className="p-2 rounded-full bg-[#3d2f23] hover:bg-[#1877F2] transition-all">
              <FaFacebook className="text-white w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/masaya_haneen/" className="p-2 rounded-full bg-[#3d2f23] hover:bg-[#E4405F] transition-all">
              <FaInstagram className="text-white w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@_masayahaneen" className="p-2 rounded-full bg-[#3d2f23] hover:bg-[#000000] transition-all">
              <SiTiktok className="text-white w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
