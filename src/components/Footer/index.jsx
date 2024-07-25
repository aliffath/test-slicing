import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#364F6B]">
        <div className="w-full grid gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 p-5 lg:py-10 lg:px-32">
          <div className="text-white">
            <p className="font-bold text-base">Mino Store</p>
            <p className="text-sm font-normal cursor-pointer">Yogyakarta</p>
            <p className="text-sm font-normal cursor-pointer">Kebumen</p>
            <p className="text-sm font-normal cursor-pointer">Purwokerto</p>
            <p className="text-sm font-normal cursor-pointer">Kudus</p>
            <p className="text-sm font-normal cursor-pointer">Surakarta</p>
          </div>
          <div className="text-white">
            <p className="font-bold text-base">Belanja</p>
            <p className="text-sm font-normal cursor-pointer">Sepatu Pria</p>
            <p className="text-sm font-normal cursor-pointer">Sepatu Wanita</p>
            <p className="text-sm font-normal cursor-pointer">Sepatu Uniseks</p>
            <p className="text-sm font-normal cursor-pointer">Pernak-pernik</p>
            <p className="text-sm font-normal cursor-pointer">Aksesoris</p>
          </div>
          <div className="text-white">
            <p className="font-bold text-base">Layanan</p>
            <p className="text-sm font-normal cursor-pointer">Bantuan</p>
            <p className="text-sm font-normal cursor-pointer">
              Cara Pengembalian
            </p>
            <p className="text-sm font-normal cursor-pointer">Index Product</p>
            <p className="text-sm font-normal cursor-pointer">Promo & Diskon</p>
            <p className="text-sm font-normal cursor-pointer">
              Konfirmasi Transfer
            </p>
            <p className="text-sm font-normal cursor-pointer">Status Pesanan</p>
          </div>
          <div className="text-white">
            <p className="font-bold text-base">Tentang Kami</p>
            <p className="text-sm font-normal cursor-pointer">Tentang Kami</p>
            <p className="text-sm font-normal cursor-pointer">Pers / Media</p>
            <p className="text-sm font-normal cursor-pointer">Karir</p>
            <p className="text-sm font-normal cursor-pointer">
              Persyaratan & ketentuan
            </p>
            <p className="text-sm font-normal cursor-pointer">
              Kebijakan Privasi
            </p>
            <p className="text-sm font-normal cursor-pointer">Hubungi Kami</p>
          </div>
        </div>
      </div>
      <div className="bg-[#3FC1C9]">
        <p className="text-white font-bold text-sm text-center py-2">
          © 2020 CV. MinoStore Minomartani
        </p>
      </div>
    </>
  );
};

export default Footer;
