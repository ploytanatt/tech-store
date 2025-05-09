import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/ProductCard";
import { products } from "../data/mockProducts";

import NewsCard from "@/components/NewsCard";
import { news } from "@/data/mockNews";

import BrandCard from "@/components/BrandCard";
import { brands } from "@/data/mockBrands";

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
            {products.slice(0, 6).map((product) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-0 pb-8">
          <div className="relative">
            <img
              src="/images/banner2.svg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold  flex-col">
              <p>Custome</p>
              <p>Builds</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center  text-white text-xs underline ">
              <p>See All Products</p>
            </div>
          </div>
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="py-5 flex flex-row font-bold ">
          <p className="mr-6 border-b-2 border-blue-500">MSI GS Series</p>
          <p className="mr-6 text-zinc-400">MSI GT Series</p>
          <p className="mr-6 text-zinc-400">MSI GL Series</p>
          <p className="mr-6 text-zinc-400">MSI GE Series</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-0 pb-8">
          <div className="relative">
            <img
              src="/images/banner3.svg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold  flex-col">
              <p>MSI</p>
              <p>Laptops</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center  text-white text-xs underline ">
              <p>See All Products</p>
            </div>
          </div>
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="py-5 flex flex-row font-bold ">
          <p className="mr-6 border-b-2 border-blue-500">MSI Infinute Series</p>
          <p className="mr-6 text-zinc-400">MSI Triden</p>
          <p className="mr-6 text-zinc-400">MSI GL Series</p>
          <p className="mr-6 text-zinc-400">MSI Nightblade</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-0 pb-8">
          <div className="relative">
            <img
              src="/images/banner4.svg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold  flex-col">
              <p>Desktops</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center  text-white text-xs underline ">
              <p>See All Products</p>
            </div>
          </div>
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-0 pb-8">
          <div className="relative">
            <img
              src="/images/banner5.svg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold  flex-col">
              <p>Gming</p>
              <p>Monitors</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center  text-white text-xs underline ">
              <p>See All Products</p>
            </div>
          </div>
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0">
          {brands.map((brand) => (
            <BrandCard key={brand.id} {...brand} />
          ))}
        </div>

        <h1 className=" font-bold text-3xl py-6">
          Follow us on Instagram for News, Offers & More
        </h1>
        <div className="pb-4 grid grid-cols-6">
          {news.map((product) => (
            <NewsCard key={product.id} {...product} />
          ))}
        </div>
<div className="flex justify-center pt-8">
<div className="bg-blue-50 p-20 w-[1160px] h-[310px] align-middle ">
          <div className="flex flex-row justify-center items-center  ">
          <p className=" text-8xl mr-6">"</p>
        
          <span>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</span>
          </div>
          <p className=" flex justify-end items-baseline">- Tama Brown</p>
          <div className="flex flex-row justify-between items-baseline">
          
          <button className=" border-2 border-blue-600 rounded-full px-4 py-1 text-blue-600 font-semibold">Leave Us A Review</button>
          <p className=" text-8xl text-zinc-400 ">...</p>
          </div>
       
        </div>
</div>



      </div>
      <Footer/>
    </div>
  );
}
