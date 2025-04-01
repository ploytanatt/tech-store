export default function Navbar() {
  return (
    <div className=" border-b-2 border-gray-200">
      <div className="bg-black ">
        <div className="container mx-auto px-20 py-0.5 flex flex-column justify-between ">
          <div className="flex flex-row p-2 ">
            <p className=" text-gray-50 ">Mon-Thu:</p>
            <p className=" text-white">9:00 AM - 5:30 PM v</p>
          </div>

          <div className="flex flex-row p-2">
            <p className=" text-white">
              Visit our showroom in 1234 Street Adress City, 1234
            </p>
            <p className="ml-1 border-b-2 border-white text-und text-white">
              Contact Us
            </p>
          </div>
          <div className="flex flex-row p-2">
            <p className=" text-white">Call US:(00) 1234 5678</p>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white">
      <div className="container mx-auto px-20 py-5.5 flex flex-column justify-between font-bold">
        <div className="flex flex-row p-2 ">
          <h1 className="mr-8">LOGO</h1>
          <p className="mr-8">laptops</p>
          <p className="mr-8">Desktop PCs</p>
          <p className="mr-8">Networking Devices</p>
          <p className="mr-8">Printer & Scanners</p>
          <p className="mr-8">PC Parts</p>
          <p className="mr-8">All Other Products</p>
          <p className="mr-8">Repairs</p>
          <button className="  px-4  text-blue-600 rounded-full ring-2 ring-blue-600">
            Our Deals
          </button>
        </div>

        <div className="flex flex-row p-2 items-center">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-black mr-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 26 26"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>




        <div className="relative">
        <span className="top-0 start-4 absolute w-4 h-4 bg-blue-600 rounded-full  text-white text-xs text-center">1</span>  
        <svg
            className="w-6 h-6 text-gray-800 dark:text-black mr-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
            
          </svg>
          
        </div>
     

          <img
            className="w-7 h-7 rounded-full"
            src="https://img.kpopmap.com/730x0/2020/10/aespa-winter-profile.png"
            alt="Rounded avatar"
          />
        </div>
      </div>
      </div>
      
    </div>

  );
}
