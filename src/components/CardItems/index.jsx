import React from "react";
import Image from "next/image";
const CardItem = () => {
  const cardItem = [
    {
      id: 1,
      title: "Kualitas terpercaya",
      description:
        "Produk kami di buat dari bahan berkualitas. Kami bekerjasama dengan mereka yang paling berpengalaman dalam industri.",
      image: "/images/sepatu.svg",
    },

    {
      id: 2,
      title: "Kirim sebagai Hadiah",
      description:
        "Ingin memberi bingkisan pada orang tersayang dengan kemasan serta pesan khusus? Sampaikan saja, kami yang siapkan.",
      image: "/images/gift.svg",
    },

    {
      id: 3,
      title: "Pengembalian Mudah",
      description:
        "Tidak puas dengan pembelian Anda (kualitas buruk atau salah ukuran)? Kami siap untuk melakukan retur barang kapanpun.",
      image: "/images/Retur.svg",
    },

    {
      id: 4,
      title: "Layanan Pelanggan",
      description:
        "Untuk semua informasi, kami selalu siap untuk melayani kebutuhan dan pertanyaan Anda.",
      image: "/images/Layanan.svg",
    },
  ];
  return (
    <>
      {cardItem.map((item) => (
        <div
          key={item.id}
          className="bg-white flex flex-col justify-center items-center text-center border border-gray-300 shadow-md p-6"
        >
          <Image
            src={item.image}
            alt=""
            width={100}
            height={100}
            className="py-8"
          />
          <p className="font-bold text-base text-[#333333]">{item.title}</p>
          <p className="font-normal text-xs text-[#727272]">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default CardItem;
