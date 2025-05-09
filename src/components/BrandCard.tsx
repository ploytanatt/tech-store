// components/ProductCard.tsx
import Image from "next/image";
import { Brand } from "@/data/mockBrands";


const BrandCard: React.FC<Brand> = ({ id, image }) => {
  return (
    <div className="   cursor-pointer gap-1 bg-white">

      <Image
        src={image}
        alt={""}
        width={152.72}
        height={79.48}
        className="object-cover m-2 my-6"
      />
    </div>
  );
};

export default BrandCard;
