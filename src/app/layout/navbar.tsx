"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { MapPin, UserCircle, Menu, Search } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import AuthModal from '../components/auth/AuthModal';


export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const menuItems = [
    { href: '/filters', label: 'Tourism', color: 'text-blue-600' },
    { href: '/filters', label: 'Education', color: 'text-green-600' },
    { href: '/filters', label: 'Jobs', color: 'text-purple-600' },
    { href: '/filters', label: 'Business', color: 'text-orange-600' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white shadow-md">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1">
          <div className="max-w-7xl mx-auto px-4 text-sm text-center">
            Discover amazing experiences in your city!
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <MapPin className="h-8 w-8 text-blue-600" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SmartCity
                </span>
                <span className="text-xs text-gray-500">Explore & Experience</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-6">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="relative px-3 py-2">
                        <span className={`text-gray-600 font-medium hover:${item.color} transition-colors`}>
                          {item.label}
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform hover:bg:purple-600" />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-6">
              {/* Search */}
              <button className="hidden lg:flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                <Search className="h-5 w-5" />
              </button>

              {/* Sign In Button */}
              <Button 
                onClick={() => setIsAuthModalOpen(true)}
                className="hidden lg:flex bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 hover:opacity-90 transition-opacity"
              >
                <UserCircle className="mr-2 h-4 w-4" /> Sign In
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-white">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="flex items-center space-x-2 px-4 mb-4">
                      <Search className="h-5 w-5 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
                      />
                    </div>
                    {menuItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-lg font-medium hover:bg-gray-50"
                        >
                          <span className={item.color}>{item.label}</span>
                        </Button>
                      </Link>
                    ))}
                    <Button 
                      onClick={() => setIsAuthModalOpen(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90"
                    >
                      <UserCircle className="mr-2 h-5 w-5" /> Sign In
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
}