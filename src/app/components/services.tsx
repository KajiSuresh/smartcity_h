import Image from 'next/image';
import React from 'react';

const Services = () => {
  const categories = [
    {
      title: "WILD",
      image: "/images/l1.jpg",
      icon: "🦋",
      bgColor: "bg-teal-500",
      size: "large" // 2x2
    },
    {
      title: "THRILLS",
      image: "/images/l2.jpg",
      icon: "🏃‍♂️",
      bgColor: "bg-rose-500",
      size: "small"
    },
    {
      title: "FESTIVE",
      image: "/images/l3.jpg",
      icon: "🎭",
      bgColor: "bg-orange-500",
      size: "small"
    },
    {
      title: "HERITAGE",
      image: "/images/l4.jpg",
      icon: "🏛️",
      bgColor: "bg-amber-500",
      size: "wide" // 2x1
    },
     {
      title: "HERITAGE",
      image: "/images/l4.jpg",
      icon: "🏛️",
      bgColor: "bg-amber-500",
      size: "wide" // 2x1
    },
    {
        title: "FESTIVE",
        image: "/images/l3.jpg",
        icon: "🎭",
        bgColor: "bg-orange-500",
        size: "small"
      },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[800px]">
        {/* Wild Category - Large Card */}
        <div className="relative overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2">
          <Image
            src={categories[0].image}
            alt={categories[0].title}
            className="absolute inset-0 w-full h-full object-cover"
            fill
            
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className={`${categories[0].bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
              <span className="text-xl">{categories[0].icon}</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">
              {categories[0].title}
            </span>
          </div>
        </div>

        {/* Thrills Category */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={categories[1].image}
            alt={categories[1].title}
            className="absolute inset-0 w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className={`${categories[1].bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
              <span className="text-xl">{categories[1].icon}</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">
              {categories[1].title}
            </span>
          </div>
        </div>

        {/* Festive Category */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={categories[2].image}
            alt={categories[2].title}
            className="absolute inset-0 w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className={`${categories[2].bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
              <span className="text-xl">{categories[2].icon}</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">
              {categories[2].title}
            </span>
          </div>
        </div>

        {/* Heritage Category - Wide Card */}
        <div className="relative overflow-hidden rounded-2xl lg:col-span-2">
          <Image
            src={categories[3].image}
            alt={categories[3].title}
            className="absolute inset-0 w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className={`${categories[3].bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
              <span className="text-xl">{categories[3].icon}</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">
              {categories[3].title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;