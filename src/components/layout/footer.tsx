export default function Footer() {
  return (
    <div>
    <div className=" bg-blue-50">
    <div className=" p-20  flex flex-row justify-center">
        {[
          {
            img: "/images/ad1.svg",
            title: "Product Support",
            desc: "Up to 3 years on-site warranty available for your peace of mind.",
          },
          {
            img: "/images/ad2.svg",
            title: "Personal Account",
            desc: "With big discounts, free delivery and a dedicated support specialist.",
          },
          {
            img: "/images/ad3.svg",
            title: "Amazing Savings",
            desc: "Up to 70% off new Products, you can be sure of the best price.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[300px] flex flex-col items-center justify-center text-center mx-12"
          >
            <img src={item.img} width={65} height={65} className="m-2" />
            <p className="m-1 font-bold">{item.title}</p>
            <p className="m-1 font-light text-sm text-zinc-600">{item.desc}</p>
          </div>
        ))}
    </div>
    </div>
    <div className="bg-black">
    <div className="container m-auto px-20 text-white pt-10 ">
        <div className="">
          {/* Newsletter */}
          <div className="text-center mb-10 flex flex-row justify-between">
            <div className=" flex flex-col items-start">
              <p className="text-2xl font-semibold">
                Sign Up To Our Newsletter.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Be the first to hear about the latest offers.
              </p>
            </div>
 
            <div className="flex ">
              <form className="flex items-center  w-96 ">
                <input
                  type="email"
                  className="bg-black border border-white text-white text-sm rounded-sm w-full px-4 py-2"
                  placeholder="Your Email"
                  required
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Subscribe
                </button>
              </form>
              </div>
  
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-10 text-left text-sm">
            {/* Column 1: Information */}
            <div>
              <h3 className="font-semibold mb-3">Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>About Zip</li>
                <li>Privacy Policy</li>
                <li>Search</li>
                <li>Terms</li>
                <li>Orders and Returns</li>
                <li>Contact Us</li>
                <li>Advanced Search</li>
                <li>Newsletter Subscription</li>
              </ul>
            </div>

            {/* Column 2: PC Parts */}
            <div>
              <h3 className="font-semibold mb-3">PC Parts</h3>
              <ul className="space-y-2 text-gray-400">
                <li>CPUs</li>
                <li>Add On Cards</li>
                <li>Hard Drives (Internal)</li>
                <li>Graphic Cards</li>
                <li>Keyboards / Mice</li>
                <li>Cases / Power Supplies / Cooling</li>
                <li>RAM (Memory)</li>
                <li>Software</li>
                <li>Speakers / Headsets</li>
                <li>Motherboards</li>
              </ul>
            </div>

            {/* Column 3: Desktop PCs */}
            <div>
              <h3 className="font-semibold mb-3">Desktop PCs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Custom PCs</li>
                <li>Servers</li>
                <li>MSI All-In-One PCs</li>
                <li>HP/Compaq PCs</li>
                <li>ASUS PCs</li>
                <li>Tecs PCs</li>
              </ul>
            </div>

            {/* Column 4: Laptops */}
            <div>
              <h3 className="font-semibold mb-3">Laptops</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Everyday Use Notebooks</li>
                <li>MSI Workstation Series</li>
                <li>MSI Prestige Series</li>
                <li>Tablets and Pads</li>
                <li>Netbooks</li>
                <li>Infinity Gaming Notebooks</li>
              </ul>
            </div>

            {/* Column 5: Address */}
            <div>
              <h3 className="font-semibold mb-3">Address</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Address: 1234 Street Address City, 1234</li>
                <li>
                  Phone: <span className="text-blue-400">(00) 1234 5678</span>
                </li>
                <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
                <li>Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 11:00 AM - 5:00 PM</li>
                <li>
                  Email: <span className="text-blue-400">shop@email.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className=" border-b-2 border-zinc-700 mb-6"></div>

          <div className="flex flex-row justify-between md:grid-cols-5 gap-8 px-10 pb-2 text-left text-sm ">
            {/* Payment icons */}
            <div className="flex ">
              <img src="/images/facebook-filled.svg" />
              <img src="/images/instagram-filled.svg" />
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <img
                src="/images/payment-methods_light_paypal.svg"
                alt="PayPal"
                className="h-6"
              />
              <img
                src="/images/payment-methods_light_visa.svg"
                alt="Visa"
                className="h-6"
              />
              <img
                src="/images/payment-methods_light_maestro.svg"
                alt="MasterCard"
                className="h-6"
              />
              <img
                src="/images/payment-methods_light_discover.svg"
                alt="Discover"
                className="h-6"
              />
              <img
                src="/images/payment-methods_light_american-express.svg"
                alt="Amex"
                className="h-6"
              />
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-xs text-center pb-4">
              Copyright © 2020 Shop Pty, Ltd.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  );
}
