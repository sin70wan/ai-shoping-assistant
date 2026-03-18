'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id;
  
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Complete product database with 23 items - ALL have 3 images
  const allProducts = {
    '1': {
      id: '1',
      name: "Ceramic Artisan Mug",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.9,
      reviews: 120,
      price: 24.00,
      description: "Handcrafted from premium ceramic, this minimalist mug is perfect for your morning brew. Featuring a smooth, matte finish in soft pastel tones, it effortlessly complements any modern kitchen aesthetic. Its ergonomic handle ensures a comfortable grip, while the thick walls keep your beverage warm for longer. Microwave and dishwasher safe.",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&h=800&fit=crop"
      ]
    },
    '2': {
      id: '2',
      name: "French Press Coffee Maker",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.7,
      reviews: 89,
      price: 34.99,
      description: "Classic French press coffee maker with 34oz capacity. Makes rich, full-bodied coffee in minutes. Heat-resistant borosilicate glass with stainless steel frame and plunger.",
      image: "https://images.unsplash.com/photo-1564135624576-c5c88640f235?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1564135624576-c5c88640f235?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1610632380989-6808314081c0?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=800&fit=crop"
      ]
    },
    '3': {
      id: '3',
      name: "Stainless Steel Cookware Set",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.8,
      reviews: 234,
      price: 189.99,
      description: "10-piece stainless steel cookware set with lids. Tri-ply construction for even heat distribution. Compatible with all cooktops, including induction. Oven safe up to 500°F.",
      image: "https://images.unsplash.com/photo-1584990347447-9153a4f8e9c6?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1584990347447-9153a4f8e9c6?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1586201375761-288650019d4a?w=800&h=800&fit=crop"
      ]
    },
    '4': {
      id: '4',
      name: "Chef's Knife Set",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.9,
      reviews: 156,
      price: 79.99,
      description: "Professional 5-piece knife set with hardwood block. High-carbon stainless steel blades with ergonomic handles. Includes chef's knife, santoku, utility, paring, and shears.",
      image: "https://images.unsplash.com/photo-1593617999960-25fa2d1faca4?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1593617999960-25fa2d1faca4?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1563865436874-9aef32095fad?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1575499983531-728180651302?w=800&h=800&fit=crop"
      ]
    },
    '5': {
      id: '5',
      name: "Non-Stick Frying Pan",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.6,
      reviews: 312,
      price: 29.99,
      description: "12-inch non-stick frying pan with scratch-resistant coating. Even heat distribution and easy-release surface. Dishwasher safe and compatible with all cooktops.",
      image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1586266183872-9113f30c7cfe?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1585160079061-3e3c545c7d56?w=800&h=800&fit=crop"
      ]
    },
    '6': {
      id: '6',
      name: "Glass Food Storage Set",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.7,
      reviews: 445,
      price: 39.99,
      description: "18-piece glass food storage container set with airtight lids. Oven, microwave, freezer, and dishwasher safe. BPA-free and leak-proof design.",
      image: "https://images.unsplash.com/photo-1607427362377-08e7649d6b8e?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1607427362377-08e7649d6b8e?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1621772996911-1646acaeef4c?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1612856229592-5bcb5f34b0ac?w=800&h=800&fit=crop"
      ]
    },
    '7': {
      id: '7',
      name: "Electric Kettle",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.8,
      reviews: 189,
      price: 49.99,
      description: "1.7L electric kettle with rapid boil technology and auto shut-off. Stainless steel interior with blue LED indicator. Cordless design with 360° swivel base.",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1578262825743-a4e402caab76?w=800&h=800&fit=crop"
      ]
    },
    '8': {
      id: '8',
      name: "Wooden Cutting Board",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.8,
      reviews: 267,
      price: 34.99,
      description: "End-grain acacia wood cutting board with juice groove. Naturally antibacterial and knife-friendly. Reversible design with non-slip feet.",
      image: "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1591360236582-618d8373d9d0?w=800&h=800&fit=crop"
      ]
    },
    '9': {
      id: '9',
      name: "KitchenAid Stand Mixer",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.9,
      reviews: 678,
      price: 349.99,
      description: "Iconic 5-quart tilt-head stand mixer with 10 speeds. Includes flat beater, dough hook, and wire whip. Perfect for baking and food preparation.",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=800&fit=crop"
      ]
    },
    '10': {
      id: '10',
      name: "Spice Rack Set",
      category: "Kitchen",
      categoryPath: "kitchen",
      categoryDisplay: "Kitchen & Dining",
      rating: 4.5,
      reviews: 98,
      price: 24.99,
      description: "Wall-mounted spice rack with 12 glass jars and labels. Space-saving design with magnetic closure. Includes pre-printed and blank labels.",
      image: "https://images.unsplash.com/photo-1537206568673-2ecbed8a9145?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1537206568673-2ecbed8a9145?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1590429630189-46e3c74b8a64?w=800&h=800&fit=crop"
      ]
    },
    '11': {
      id: '11',
      name: "Lumina Desk Lamp",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.8,
      reviews: 89,
      price: 89.00,
      description: "Modern LED desk lamp with adjustable brightness and color temperature. Features a sleek design that complements any workspace. Touch controls and USB charging port included.",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop"
      ]
    },
    '12': {
      id: '12',
      name: "Smart Watch Series 5",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.6,
      reviews: 312,
      price: 199.99,
      description: "Track your fitness, receive notifications, and more with this advanced smartwatch. Features heart rate monitoring, GPS, and 5-day battery life.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=800&fit=crop"
      ]
    },
    '13': {
      id: '13',
      name: "Wireless Headphones",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.8,
      reviews: 445,
      price: 79.99,
      description: "Experience crystal clear sound with these wireless headphones. 30-hour battery life, comfortable fit, and noise isolation.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=800&fit=crop"
      ]
    },
    '14': {
      id: '14',
      name: "Bluetooth Speaker",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.7,
      reviews: 234,
      price: 59.99,
      description: "Portable waterproof Bluetooth speaker with 20-hour battery life. Deep bass and 360° sound. Perfect for outdoor adventures.",
      image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1545458425-21c807baf7d5?w=800&h=800&fit=crop"
      ]
    },
    '15': {
      id: '15',
      name: "Tablet 10-inch",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.5,
      reviews: 156,
      price: 299.99,
      description: "10-inch HD tablet with 64GB storage and 4GB RAM. Perfect for streaming, browsing, and light productivity. Includes stylus.",
      image: "https://images.unsplash.com/photo-1544244011-0ccb3c9f9f6c?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1544244011-0ccb3c9f9f6c?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=800&h=800&fit=crop"
      ]
    },
    '16': {
      id: '16',
      name: "4K Drone",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.8,
      reviews: 89,
      price: 449.99,
      description: "Foldable drone with 4K camera and 3-axis gimbal. 30-minute flight time with GPS positioning. Includes remote controller and carrying case.",
      image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&h=800&fit=crop"
      ]
    },
    '17': {
      id: '17',
      name: "Gaming Mouse",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.7,
      reviews: 567,
      price: 49.99,
      description: "RGB gaming mouse with 16000 DPI optical sensor. 8 programmable buttons and adjustable weight system. Customizable lighting effects.",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1587814200193-9e3816442d70?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=800&fit=crop"
      ]
    },
    '18': {
      id: '18',
      name: "Mechanical Keyboard",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.9,
      reviews: 423,
      price: 129.99,
      description: "Tenkeyless mechanical keyboard with Cherry MX switches. Doubleshot PBT keycaps and per-key RGB lighting. Detachable USB-C cable.",
      image: "https://images.unsplash.com/photo-1587822057517-10453d2409c8?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1587822057517-10453d2409c8?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=800&h=800&fit=crop"
      ]
    },
    '19': {
      id: '19',
      name: "External SSD 1TB",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.8,
      reviews: 312,
      price: 89.99,
      description: "Portable 1TB external SSD with USB 3.2 Gen 2 interface. 1050MB/s read speed. Shock-resistant and compact design.",
      image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1567438743165-aa2a0d5a12ce?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=800&h=800&fit=crop"
      ]
    },
    '20': {
      id: '20',
      name: "Smart Home Hub",
      category: "Electronics",
      categoryPath: "electronics",
      categoryDisplay: "Electronics",
      rating: 4.5,
      reviews: 178,
      price: 79.99,
      description: "Control all your smart devices with this central hub. Voice control enabled, works with Alexa and Google Assistant. Easy setup.",
      image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1563306406-e66174fa3737?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=800&fit=crop"
      ]
    },
    '21': {
      id: '21',
      name: "Premium Leather Sneakers",
      category: "Shoes",
      categoryPath: "shoes",
      categoryDisplay: "Shoes",
      rating: 4.8,
      reviews: 156,
      price: 79.99,
      description: "Premium leather sneakers with cushioned insole for all-day comfort. Classic design that pairs well with any outfit. Available in multiple colors.",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop"
      ]
    },
    '22': {
      id: '22',
      name: "Running Shoes",
      category: "Shoes",
      categoryPath: "shoes",
      categoryDisplay: "Shoes",
      rating: 4.8,
      reviews: 312,
      price: 99.99,
      description: "Lightweight running shoes with responsive cushioning. Breathable mesh upper and durable outsole.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1595956543115-5cc38f1f1a9a?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=800&fit=crop"
      ]
    },
    '23': {
      id: '23',
      name: "Hiking Boots",
      category: "Shoes",
      categoryPath: "shoes",
      categoryDisplay: "Shoes",
      rating: 4.9,
      reviews: 98,
      price: 129.99,
      description: "Waterproof hiking boots with rugged outsole for superior traction. Ankle support and cushioned footbed for long hikes.",
      image: "https://images.unsplash.com/photo-1520219306100-59d0f1c6e788?w=800&h=800&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1520219306100-59d0f1c6e788?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&h=800&fit=crop"
      ]
    }
  };

  useEffect(() => {
    const currentProduct = allProducts[productId as keyof typeof allProducts];
    
    if (currentProduct) {
      setProduct(currentProduct);
      
      // Find related products from the SAME CATEGORY
      const related = Object.values(allProducts)
        .filter(p => 
          p.category === currentProduct.category && 
          p.id !== currentProduct.id
        )
        .slice(0, 4);
      
      setRelatedProducts(related);
    } else {
      setProduct(null);
    }
    
    setLoading(false);
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <Link href="/" className="text-sky-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>›</span>
            <Link href={`/categories/${product.categoryPath}`} className="hover:text-gray-600">
              {product.categoryDisplay}
            </Link>
            <span>›</span>
            <span className="text-gray-600">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Product Image */}
          <div className="space-y-2">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail Images */}
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((img: string, i: number) => (
                  <div key={i} className="aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:opacity-80">
                    <img 
                      src={img} 
                      alt={`${product.name} ${i+1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl font-light text-gray-800 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-3">
              <span className="text-green-600 text-sm">🟢 {product.rating}</span>
              <span className="text-gray-400 text-sm ml-2">({product.reviews} Reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl text-gray-800 mb-4">${product.price.toFixed(2)}</p>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Buttons */}
            <div className="space-y-2">
              <button className="w-full bg-sky-300 text-gray-900 py-2.5 text-sm rounded hover:bg-sky-400">
                Add to Cart
              </button>
              <button className="w-full bg-pink-100 text-gray-900 py-2.5 text-sm rounded hover:bg-pink-200">
                Ask AI about this item
              </button>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-12">
          <h2 className="text-lg font-medium text-gray-800 mb-6">Customer Reviews</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-sm">Sarah Jenkins</h3>
                <span className="text-green-600 text-sm">5.0</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">2 weeks ago</p>
              <p className="text-sm text-gray-600">
                Absolutely love this {product.name.toLowerCase()}! The quality is amazing.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-sm">Michael T.</h3>
                <span className="text-green-600 text-sm">4.8</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">1 month ago</p>
              <p className="text-sm text-gray-600">
                Great product! Would recommend to others.
              </p>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-medium text-gray-800 mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((item) => (
                <Link href={`/products/${item.id}`} key={item.id}>
                  <div className="border border-gray-100 rounded-lg p-2 hover:shadow-md transition cursor-pointer">
                    <div className="aspect-square bg-gray-50 rounded mb-2 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    </div>
                    <p className="text-xs font-medium line-clamp-1">{item.name}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500 text-xs">★ {item.rating}</span>
                      <span className="text-gray-400 text-xs ml-1">({item.reviews})</span>
                    </div>
                    <p className="text-xs font-bold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Chat Assistant */}
      <div className="fixed bottom-4 right-4 w-72 bg-white rounded-lg shadow-lg border border-gray-100">
        <div className="p-3 border-b border-gray-100">
          <p className="text-sm text-gray-600">Shopping Assistant</p>
        </div>
        <div className="p-3 h-48 overflow-y-auto">
          <div className="bg-gray-50 rounded-lg p-2 mb-2 max-w-[80%]">
            <p className="text-xs text-gray-600">Hi there! Looking for anything specific today?</p>
          </div>
          <div className="bg-sky-400 text-gray-900 rounded-lg p-2 mb-2 ml-auto max-w-[80%]">
            <p className="text-xs">I need a gift for a coffee lover, under $50.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 max-w-[80%]">
            <p className="text-xs text-gray-600">I can help with that! We have some great artisan mugs and premium beans. Want to see one?</p>
          </div>
        </div>
        <div className="p-3 border-t border-gray-100">
          <input type="text" placeholder="Type a message..." className="w-full text-xs p-2 border border-gray-200 rounded"/>
        </div>
      </div>
    </div>
  );
}