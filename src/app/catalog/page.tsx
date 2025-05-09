import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockProducts";

import BrandCard from "@/components/BrandCard";
import { brands } from "@/data/mockBrands";
export default function page() {
  return (
    <div>
      <Navbar />
      <div className="pb-1 container m-auto px-20">
        <div className="pb-4">
          <img src="/images/catalog/banner1.svg"></img>
        </div>
        <div className="flex space-x-2 text-sm ">
          <p>Home</p>
          <span className="text-blue-500 font-semibold ">{">"}</span>
          <p>Laptops</p>
          <span className="text-blue-500 font-semibold ">{">"}</span>
          <p>Everyday Use Notebooks</p>
          <span className="text-blue-500 font-semibold ">{">"}</span>
          <p>MSI Prestiqe Series</p>
          <span className="text-blue-500 font-semibold ">{">"}</span>
          <p className="text-gray-500">MSI WS Series</p>
        </div>

        <div className="flex flex-column justify-between items-baseline">
          <h1 className=" text-2xl font-bold my-4">MSI PS SEries(20)</h1>
        </div>

            <button className="text-sm font-bold mb-2 hover:underline">
              &lt; Back
            </button>
             

          <div className="flex gap-6">
            
            <aside className="w-64  bg-blue-50">
              <div className="p-4 ">
              <h2 className="font-bold text-center border-b pb-2 mb-2">
                Filters
              </h2>
              <button className="w-full border rounded-md py-1 text-sm mb-4 hover:bg-gray-100">
                Clear Filter
              </button>

              {/* Category */}
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Category</h3>
                <ul className="text-sm space-y-1">
                  <li>
                    CUSTOM PCs{" "}
                    <span className="text-gray-500 float-right">15</span>
                  </li>
                  <li>
                    MSI ALL-IN-ONE PCS{" "}
                    <span className="text-gray-500 float-right">45</span>
                  </li>
                  <li>
                    HP/COMPAQ PCS{" "}
                    <span className="text-gray-500 float-right">1</span>
                  </li>
                </ul>
              </div>

              {/* Price */}
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Price</h3>
                <ul className="text-sm space-y-1">
                  {[
                    "$0.00 - $1,000.00",
                    "$1,000.00 - $2,000.00",
                    "$2,000.00 - $3,000.00",
                    "$3,000.00 - $4,000.00",
                    "$4,000.00 - $5,000.00",
                    "$5,000.00 - $6,000.00",
                    "$6,000.00 - $7,000.00",
                    "$7,000.00 And Above",
                  ].map((range, i) => (
                    <li key={i}>{range}</li>
                  ))}
                </ul>
              </div>

              {/* Color */}
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Color</h3>
                <div className="flex space-x-2">
                  <button
                    className={`w-5 h-5 rounded-full border border-gray-300 `}
                    style={{ backgroundColor: "black" }}
                  />
                  <button
                    className={`w-5 h-5 rounded-full border border-gray-300 `}
                    style={{ backgroundColor: "red" }}
                  />
                </div>
              </div>

              {/* Filter Name (Dropdown stub) */}
              <div className="mb-4">
                <button className="w-full text-left font-semibold text-sm">
                  Filter Name ▼
                </button>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm">
                Apply Filters (2)
              </button>
              </div>
              {/* Brands */}
              <div className="mt-2">
                <p className="mt-2 text-center font-bold">Brands</p>
                <button className=" mt-2 w-full border-2 rounded-full py-1 text-sm font-bold mb-4 text-zinc-400">
                  All Brands
                </button>
                <div className="grid grid-cols-2 gap-0.5 p-0.5  ">
                  {brands.slice(0, 6).map((brand) => (
                    <BrandCard key={brand.id} {...brand} />
                  ))}
                </div>
              </div>

              {/* Compare Products */}
              <div className="mt-6 text-sm text-center text-gray-500">
                <p className="font-bold">Compare Products</p>
                <p>You have no items to compare.</p>
              </div>

              <div className="mt-6 text-sm text-center text-gray-500">
                <p className="font-bold">My Wishlist</p>
                <p>You have no items in your wishlist.</p>
                <img className=" w-full" src="/images/catalog/banner2.svg"></img>
              </div>

            </aside>
<div>
            <div className=" p-4 transform grid grid-cols-5  self-start bg-white rounded-md">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
            
          </div>
          <div className="flex space-x-2 justify-center">
          <p className="border-2 w-7 h-7 rounded-full flex items-center justify-center">{"<"} </p>
          <p className="border-2 w-7 h-7 rounded-full flex items-center justify-center">1</p>
          <p className="border-2 w-7 h-7 rounded-full flex items-center justify-center">2</p>
          <p className="border-2 w-7 h-7 rounded-full flex items-center justify-center">3</p>
          <p>...</p>
          <p className="border-2 w-7 h-7 rounded-full flex items-center justify-center">13</p>
          <p className="border-2 w-7 h-7 rounded-full flex items-center justify-center">{">"}</p>
        </div>

          </div>
          </div>
         
         
          </div>
   
      <Footer />
    </div>
  );
}
