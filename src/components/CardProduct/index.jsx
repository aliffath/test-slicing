import React from "react";
import Image from "next/image";
import Button from "../Button";
import Rating from "../Rating";
const CardProduct = () => {
  const product = [
    {
      id: 1,
      image: "/images/Produk1.png",
      type: "SEPATU PRIA OLAHRAGA",
      name: "Playoon - Kelimutu Run Modeal A",
      rating: "3.5",
      price: "Rp.325.000,-",
    },
    {
      id: 2,
      image: "/images/Produk2.png",
      type: "SEPATU WANITA KASUAL",
      name: "Le Modiste - Sepatu Kasual Wanita",
      rating: "3.5",
      price: "Rp.319.000,-",
    },
    {
      id: 3,
      image: "/images/Produk3.png",
      type: "SEPATU PRIA KASUAL",
      name: "X-Voyager Vintage Forrester",
      rating: "3.5",
      price: "Rp.402.000,-",
    },
    {
      id: 4,
      image: "/images/Produk4.png",
      type: "SENDAL JEPIT PRIA",
      name: "Cadillac Insigma 91",
      rating: "3.5",
      price: "Rp.387.000,-",
    },
  ];
  return (
    <>
      {product.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt="sepatu" width={252} height={252} />

          <div className="py-3">
            <p className="text-[#898989] text-xs font-bold leading-[22px]">
              {item.type}
            </p>
            <p className="text-[#333333] text-base font-bold leading-[24px]">
              {item.name}
            </p>
            <Rating rating="4.3" />
            <p className="text-[#364F6B] text-base font-bold leading-[19px]">
              {item.price}
            </p>
            <div className="py-2">
              <Button title="ADD TO CART" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProduct;
