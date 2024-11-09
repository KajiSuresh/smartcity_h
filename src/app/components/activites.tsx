import React from 'react';
import { Heart } from 'lucide-react';

const Activities = () => {
  const adventures = [
    {
      title: "Balloon Flights with Vintage Car Ride",
      price: 979.00,
      image: "/images/l1.jpg",
      priceUnit: "AED",
      perPerson: true
    },
    {
      title: "Breakfast in the Sky with Balloon Flights",
      price: 8290.00,
      image: "/images/l2.jpg",
      priceUnit: "AED",
      perPerson: true
    },
    {
      title: "Desert Buggy Driving Experience",
      price: 324.00,
      image: "/images/l3.jpg",
      priceUnit: "AED",
      perPerson: true
    },
    {
      title: "Desert Safari",
      price: 38.00,
      originalPrice: 42.00,
      image: "/images/l4.jpg",
      priceUnit: "AED",
      perPerson: true
    },
    {
        title: "Desert Safari",
        price: 38.00,
        originalPrice: 42.00,
        image: "/images/l4.jpg",
        priceUnit: "AED",
        perPerson: true
      }
  ];

  const attractions = [
    {
      title: "Deep Dive Dubai",
      image: "/images/l1.jpg",
    },
    {
      title: "Al Seef Heritage",
      image: "/images/l2.jpg",
    },
    {
      title: "Fine Dining Experience",
      image: "/images/l3.jpg",
    },
    {
      title: "Crocodile Park",
      image: "/images/l4.jpg",
    },
    {
        title: "Crocodile Park",
        image: "/images/l4.jpg",
      }
  ];

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-full border border-gray-200 hover:bg-gray-50">
          More
        </button>
      </div>
    </div>
  );

  const Card = ({ 
    image,
    title,
    price,
    originalPrice,
    priceUnit,
    perPerson 
  }: {
    image: string;
    title: string;
    price?: number;
    originalPrice?: number;
    priceUnit?: string;
    perPerson?: boolean;
  }) => (
    <div className="group relative rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        {price && (
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-gray-500">From</span>
            <span className="font-semibold text-gray-900">
              {priceUnit} {price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {priceUnit} {originalPrice.toFixed(2)}
              </span>
            )}
            {perPerson && <span className="text-sm text-gray-500">/ person</span>}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Adventures Section */}
      <section>
        <SectionHeader title="Adventures" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adventures.map((item, index) => (
            <Card 
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              originalPrice={item.originalPrice || undefined}
              priceUnit={item.priceUnit}
              perPerson={item.perPerson}
            />
          ))}
        </div>
      </section>

      {/* Attractions Section */}
      <section>
        <SectionHeader title="Attractions" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((item, index) => (
            <Card price={undefined} originalPrice={undefined} priceUnit={undefined} perPerson={undefined} key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;