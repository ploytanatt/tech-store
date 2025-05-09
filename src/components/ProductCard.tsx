// components/ProductCard.tsx
import Image from "next/image";
import { Product } from "@/data/mockProducts";


const ProductCard: React.FC<Product> = ({ id, status, name, originalPrice,review, discountPrice, image,  }) => {
  return (
    <div className="group pt-4 px-4 hover:shadow-lg  transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
      <span
        className={`text-xs  rounded-full ${
          status === "in stock" ? "text-lime-700 " : "text-red-500"
        }`}
      >
         {status === "in stock" ? "✔ In Stock" : "🚫 Out of Stock"}
      </span>
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="rounded-md"
      />
      <span className=" text-xs text-gray-500">⭐⭐⭐⭐⭐ reviews({review})</span>
      <h3 className="mt-2 ">{name}</h3>
      <p className="text-gray-600 text-sm line-through">
        ฿{originalPrice.toLocaleString()}
      </p>
      <p className="text-black  font-medium text-xl">
        ฿{discountPrice.toLocaleString()}
      </p>
      <div className="py-2 flex justify-center">
        <button className="px-4  text-blue-600 rounded-full ring-2 ring-blue-600 duration-200 opacity-0 group-hover:opacity-100 focus:bg-amber-100 cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
