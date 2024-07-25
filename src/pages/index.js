import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CardItem from "@/components/CardItems";
import CardProduct from "@/components/CardProduct";
import Banner from "@/components/Banner";
import CardBlog from "@/components/CardBlog";
import Navbar from "@/components/Navbar";
import ArrowTop from "@/components/GoToTop";
const Home = () => {
  const imageKategory = [
    {
      image: "/images/Latar1.png",
      title: "Sepatu Anak",
    },
    {
      image: "/images/Latar2.png",
      title: "Sepatu Wanita",
    },
    {
      image: "/images/Latar3.png",
      title: "Sandal",
    },
    {
      image: "/images/Latar4.png",
      title: "Sepatu Pria",
    },
  ];
  return (
    <>
      <ArrowTop />
      <Navbar />

      <Banner />
      <div className="mx-5 md:mx-24 mt-7">
        <div className="grid gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4">
          <CardItem />
        </div>
        <div className="flex justify-between items-center my-7">
          <p className="font-bold text-[16px] md:text-[28px] text-[#333333]">
            Pilihan Minggu Ini
          </p>
          <button className="bg-white border border-[#364F6B] text-base text-[#364F6B] rounded-full px-5 py-2">
            PRODUK LAINNYA
          </button>
        </div>

        <div className="grid gap-5 justify-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4">
          <CardProduct />
        </div>
        <div className="grid gap-5 justify-center md:grid md:grid-cols-2 p-8">
          {imageKategory.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="h-[200px] bg-cover bg-center"
            >
              <p className="text-white h-full flex items-end font-bold text-[24px] p-6">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[url(/images/Hero.png)] bg-cover w-full h-[300px] my-5 bg-center">
        <div className="flex justify-between items-center h-full md:mx-24">
          <div>
            <p className="text-white font-bold text-[24px]">
              Diskon Nggak Pake Tanggung.
            </p>
            <p className="text-[#F8F8F8] font-normal text-[16px] ">
              Plus bonus ongkir ke seluruh Indonesia.
            </p>
          </div>
          <Button title="INFO SELENGKAPNYA" />
        </div>
      </div>

      <div className="mx-5 md:mx-24">
        <div className="flex justify-between items-center my-7">
          <p className="font-bold text-[16px] md:text-[28px] text-[#333333]">
            Blog
          </p>
          <button className="bg-white border border-[#364F6B] text-base text-[#364F6B] rounded-full px-5 py-2">
            LIHAT SEMUA
          </button>
        </div>
        <div className="grid gap-5 justify-center md:grid md:grid-cols-3">
          <CardBlog />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
