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
  <h3 className="text-lg font-semibold text-white mb-3 text-center sm:text-left">
    {t("footer.contact")}
  </h3>

  <ul className="space-y-3 text-sm text-white/90">
    
    {/* Phone */}
    <li>
      <a
        href="https://wa.me/905550550573"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition"
      >
        <Phone className="w-5 h-5 text-white shrink-0" />
        <span>+90 555 055 0573</span>
      </a>
    </li>

    {/* Location */}
    <li>
      <a
        href="https://www.google.com/maps/place/Cihangir,+Menek%C5%9Fe+Sk.,+34310+Avc%C4%B1lar%2F%C4%B0stanbul/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition text-center sm:text-left"
      >
        <MapPin className="w-5 h-5 text-white shrink-0" />
        <span>
          Merkez, Menekşe Sk. Avcılar/İstanbul
        </span>
      </a>
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
