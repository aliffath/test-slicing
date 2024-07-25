import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [visibleProduct, setVisibleProduct] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStoreClick = () => {
    setVisibleProduct(!visibleProduct);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#364F6B] w-full md:absolute z-10">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        <Image
          src="/images/search.png"
          alt="logo"
          width={32}
          height={32}
          className="object-contain cursor-pointer"
        />
        <p className="text-white font-bold text-[32px] md:text-[52px] leading-[63px]">
          mino.
        </p>
        <div className="flex items-center gap-5">
          <Image
            src="/images/shopping-cart.png"
            alt="logo"
            width={32}
            height={32}
            className="object-contain cursor-pointer"
          />
          <Image
            src="/images/account-circle.png"
            alt="logo"
            width={32}
            height={32}
            className="object-contain cursor-pointer"
          />
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes size={24} color="white" />
            ) : (
              <FaBars size={24} color="white" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`md:flex ${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex-row justify-center items-center gap-5 md:gap-10 py-3`}
      >
        <p className="text-white font-bold text-[14px] gap-2 leading-[17px] cursor-pointer ">
          BERANDA
        </p>
        <p
          className={`${
            visibleProduct
              ? "bg-white text-[#364F6B]"
              : "bg-[#364F6B] text-white"
          } font-bold text-[14px]  leading-[17px] gap-2 cursor-pointer flex justify-center items-center`}
          onMouseEnter={handleStoreClick}
          onMouseLeave={handleStoreClick}
        >
          BELANJA
        </p>
        <p className="text-white font-bold text-[14px] gap-2 leading-[17px] cursor-pointer flex justify-center items-center">
          BUNDEL 1
          <FaChevronDown size={20} />
        </p>
        <p className="text-white font-bold text-[14px] gap-2 leading-[17px] cursor-pointer flex justify-center items-center">
          BUNDEL 2
          <FaChevronDown size={20} />
        </p>
        <p className="text-white font-bold text-[14px] gap-2 leading-[17px] cursor-pointer ">
          PROMO
        </p>
        <p className="text-white font-bold text-[14px] gap-2 leading-[17px] cursor-pointer ">
          BLOG
        </p>
      </div>
      {visibleProduct && (
        <div className="w-full h-[459px] bg-white  z-10 sticky px-20">
          <p className="font-bold text-[18px] text-[#364F6B] py-5">Belanja</p>
          <div className="border-b border-[#364F6B]"></div>
          <div className="grid gap-5 justify-center md:grid md:grid-cols-3 items-center pt-5">
            <div>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Semua Merex
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                X-Voyager
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Balancia
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Cadilac
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Playoon
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Machia
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Everest
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Marathon
              </p>
            </div>
            <div>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Vintage Forrester
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Vintage Strobero
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Vintage Shoe
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                El Dorado
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Unhinted
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Cursed Again
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Nurture
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#364F6B]">
                Secret Sky 2021
              </p>
            </div>
            <Image
              src="/images/Produk3.png"
              alt="logo"
              width={332}
              height={332}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
