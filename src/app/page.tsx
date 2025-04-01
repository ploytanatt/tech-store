import Navbar from "@/components/layout/navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "../data/mockProducts";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container px-17 mx-auto ">
     
        <div className="relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10  bg-zinc-700 text-white flex items-center justify-center rounded-e-full shadow-lg cursor-pointer">
            ◀
          </span>
          <span className="absolute right-0.5  top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-700 text-white flex items-center justify-center rounded-s-full shadow-lg cursor-pointer">
            ▶
          </span>
          <Image
            src="/images/banner1.svg"
            alt="banner1"
            width={1200}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="pb-1">
        <div className="flex flex-column justify-between items-baseline">
          <h1 className=" text-2xl font-bold my-4">New Products</h1>
          <p className="text-xs underline text-blue-700  my-4">
            See All New Products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-0">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        </div>

        <div className="bg-blue-50 text-blue-950 p-5">
          <span>LOGO | </span>
          <span className=" font-bold">OWN</span>
          <span>it now, up to 6 months interest free</span>
          <span className="underline">learn more</span>
        </div>

          <div className="flex flex-column">

  
  


          <div className="">

  <img src="/images/banner2.svg" alt="Background" className="w-full h-full object-cover" />


 
</div>




          <div className="pt-3 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
          </div>
        

      </div>
    </div>
  );
}
