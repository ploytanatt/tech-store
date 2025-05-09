// components/ProductCard.tsx
import Image from "next/image";
import { New } from "@/data/mockNews";


const NewsCard: React.FC<New> = ({ id, image, content, date }) => {
  return (
    <div className=" pb-2  cursor-pointer">
      <Image
        src={image}
        alt={content}
        width={235}
        height={150}
        className="object-cover pr-2"
      />

      <h3 className="text-center text-xs  ">{content}</h3>
      <p className="text-center text-zinc-500 text-xs">{date}</p>
    </div>
  );
};

export default NewsCard;
