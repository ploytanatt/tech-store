export interface Product {
  id: number;
  name: string;
  status: string;
  image: string;
  rating: number;
  review: number;
  originalPrice: number;
  discountPrice: number;
  category: string;
  collectionTitle:string;
  detail: {
    cpu: string;
    featured: string;
    ports: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Gaming Laptop",
    status: "in stock",
    image: "/images/product1.svg",
    rating: 4.5,
    review: 120,
    originalPrice: 1999,
    discountPrice: 1599,
    category: "Laptops",
    collectionTitle:"stealth series",
    detail: {
      cpu: "Intel i9-12900K",
      featured: "16GB RAM, 1TB SSD, RTX 3080",
      ports: "2x USB-C, 3x USB-A, HDMI, Ethernet",
    },
  },
  {
    id: 2,
    name: "Wireless Headphones",
    status: "Out of Stock",
    image: "/images/product2.svg",
    rating: 4.2,
    review: 85,
    originalPrice: 299,
    discountPrice: 249,
    category: "Audio",
    collectionTitle:"stealth series",
    detail: {
      cpu: "Bluetooth 5.0",
      featured: "Noise Cancelling, 20 Hours Battery",
      ports: "USB-C Charging",
    },
  },
  {
    id: 3,
    name: "Smartphone Pro Max",
    status: "in stock",
    image: "/images/product3.svg",
    rating: 4.8,
    review: 245,
    originalPrice: 999,
    discountPrice: 899,
    category: "Mobile Phones",
    collectionTitle:"stealth series",
    detail: {
      cpu: "Snapdragon 888",
      featured: "128GB Storage, 8GB RAM, 5G Support",
      ports: "USB-C, 3.5mm Jack",
    },
  },
  {
    id: 4,
    name: "Wireless Headphones",
    status: "Out of Stock",
    image: "/images/product4.svg",
    rating: 4.2,
    review: 85,
    originalPrice: 299,
    discountPrice: 249,
    category: "Audio",
    collectionTitle:"stealth series",
    detail: {
      cpu: "Bluetooth 5.0",
      featured: "Noise Cancelling, 20 Hours Battery",
      ports: "USB-C Charging",
    },
  },
  {
    id: 5,
    name: "Wireless Headphones",
    status: "Out of Stock",
    image: "/images/product5.svg",
    rating: 4.2,
    review: 85,
    originalPrice: 299,
    discountPrice: 249,
    category: "Audio",
    collectionTitle:"stealth series",
    detail: {
      cpu: "Bluetooth 5.0",
      featured: "Noise Cancelling, 20 Hours Battery",
      ports: "USB-C Charging",
    },
  },
  {
    id: 6,
    name: "Wireless Headphones",
    status: "Out of Stock",
    image: "/images/product6.svg",
    rating: 4.2,
    review: 85,
    originalPrice: 299,
    discountPrice: 249,
    category: "Audio",
    collectionTitle:"stealth series",
    detail: {
      cpu: "Bluetooth 5.0",
      featured: "Noise Cancelling, 20 Hours Battery",
      ports: "USB-C Charging",
    },
  },
];
