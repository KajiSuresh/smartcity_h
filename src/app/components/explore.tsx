'use client'
import Image from 'next/image';
import React from 'react';


const Explore = () => {
     // Add ref and scroll state
 const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    
 // Add scroll handlers
 const handleScroll = (direction: 'left' | 'right') => {
     if (scrollContainerRef.current) {
         const scrollAmount = 400; // Adjust this value based on your needs
         const newScrollPosition = scrollContainerRef.current.scrollLeft + 
             (direction === 'left' ? -scrollAmount : scrollAmount);
         
         scrollContainerRef.current.scrollTo({
             left: newScrollPosition,
             behavior: 'smooth'
         });
     }
 };
    const adventures = [
        {
            title: "Adrenaline Rush",
            image: "/images/l1.jpg",
            category: "Adventure",
        },
        {
            title: "Scenic Marvels",
            image: "/images/l2.jpg",
            category: "Sightseeing",
        },
        {
            title: "Must Visit",
            image: "/images/l3.jpg",
            category: "Destinations",
        },
        {
            title: "Must Visit",
            image: "/images/l4.jpg",
            category: "Destinations",
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900">Something</h2>
                    <h3 className="text-3xl text-gray-900">for you</h3>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={() => handleScroll('left')}
                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => handleScroll('right')}
                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Cards Grid */}

            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar"
                style={{ 
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                 {adventures.map((adventure, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                        <div className="relative h-[600px]">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                            <Image
                                src={adventure.image}
                                alt={adventure.title}
                                className="w-full h-full object-cover"
                                fill
                            />
                        </div>

                        {/* Card Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-semibold mb-2">{adventure.title}</h3>
                            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                                Explore →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default Explore;