import React from "react";
import Image from "next/image";
import Button from "../Button";
const CardBlog = () => {
  const data = [
    {
      id: 1,
      image: "/images/Blog1.png",
      type: "PROMO",
      title: "Sepatu Kotor? Untung Udah Ada Mino Clean dari Mino Store",
      description:
        "Laiknya diri sendiri, sepatu juga butuh dirawat. Seti- daknya setiap sebulan sekali, sepatu perlu dibersih- kan. Namun pembersihan tergantung jenis bahan",
    },
    {
      id: 2,
      image: "/images/Blog2.png",
      type: "PROMO",
      title: "Mino Shoe Store Siap Semarakkan Harbolnas 11.11!",
      description:
        "Akan ada banyak sekali promo dari diskon ongkir, potongan harga, hingga cashback sehingga kamu bisa mendapat barang yang kamu suka.",
    },
    {
      id: 3,
      image: "/images/Blog3.png",
      type: "TIPS & TRICK",
      title: "Tips Agar Kaki Tidak Keseleo Sewaktu Berlari",
      description:
        "Jogging atau lari-lari pendek menjadi salah satu tren olahraga di tengah pandemi. Namun, sayangnya tren ini diikuti oleh pelari pemula.",
    },
  ];

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <Image
            src={item.image}
            alt=""
            width={420}
            height={200}
            className="object-cover "
          />
          <div className="my-4">
            <p className="text-[#364F6B] font-bold text-[14px] ">{item.type}</p>
            <p className="font-bold text-[#333333] text-[18px] leading-[21px] my-2">
              {item.title}
            </p>
            <p className="text-[#727272] font-normal text-[14px] leading-[22px] my-2">
              {item.description}
            </p>
            <Button title="BACA SELENGKAPNYA" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBlog;
