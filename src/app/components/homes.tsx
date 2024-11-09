import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, GraduationCap, Briefcase, MapPin, Search, ArrowRight, Star, } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Tourism",
      description: "Explore the city's finest attractions",
      stats: "2,500+ Locations",
      href: "/tourism",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-500",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education",
      description: "Top-rated educational institutions",
      stats: "500+ Institutions",
      href: "/education",
      bgColor: "bg-green-50 dark:bg-green-950",
      iconColor: "text-green-500",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Jobs",
      description: "Find your dream career",
      stats: "10,000+ Opportunities",
      href: "/jobs",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      iconColor: "text-purple-500",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Business",
      description: "Connect with local businesses",
      stats: "5,000+ Companies",
      href: "/business",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      iconColor: "text-orange-500",
    },
  ];

  const trending = [
    {
      image: "",
      title: "Central Park Hotel",
      category: "Tourism",
      rating: 4.8,
      reviews: 2453,
    },
    {
      image: "",
      title: "City University",
      category: "Education",
      rating: 4.9,
      reviews: 1876,
    },
    {
      image: "",
      title: "Tech Hub",
      category: "Business",
      rating: 4.7,
      reviews: 1234,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/london.jpg"
            alt="City Skyline"
            className="object-cover"
            fill
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Discover Your City
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your all-in-one guide to exploring, learning, and growing in our vibrant city.
            </p>
            
            {/* Search Bar */}
            <div className="flex items-center gap-4 max-w-2xl bg-background/95 backdrop-blur-sm p-2 rounded-full shadow-lg">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input 
                  type="text"
                  placeholder="Search for places, institutions, or jobs..."
                  className="w-full bg-transparent border-none focus:outline-none text-lg py-2"
                />
              </div>
              <Button size="lg" className="rounded-full px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <Card className={`${feature.bgColor} border-none p-6 hover:scale-105 transition-all duration-300 h-full`}>
                  <div className={`${feature.iconColor} mb-4 bg-background/80 rounded-full w-16 h-16 flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <p className="text-sm font-medium">{feature.stats}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Discover what is popular in the city</p>
            </div>
            <Button variant="outline" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trending.map((item) => (
              <Card key={item.title} className="overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span>{item.rating}</span>
                    <span>•</span>
                    <span>{item.reviews} reviews</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}