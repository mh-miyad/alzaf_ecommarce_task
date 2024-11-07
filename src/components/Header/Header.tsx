"use client";
import HeaderTop from "./HeaderTop";

import cloud from "@/assets/cloud.svg";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderTop />
      <header className="w-full border-b">
        <div className="container mx-auto flex h-16 xl:h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Alzaf Logo" />
          </Link>

          {/* Search Bar - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex flex-1 items-center gap-2 max-w-xl mx-4">
            <div className="relative flex-1 bg-[#EFF0F5] rounded-[10px] border-none focus:ring-0 focus:border-none">
              <Input
                className="w-full pl-3 pr-10 bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none"
                placeholder="Search Product"
                type="search"
              />

              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full bg-[#F97316] rounded-[10px] text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Icons - Some hidden on mobile */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative bg-[#F5F5F5] hover:bg-[#F5F5F5]/80 rounded-xl"
            >
              <User className="h-6 w-6 text-gray" />
              <span className="absolute -right-1 border-[.3px] border-white -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F97316] text-[9px] font-medium text-white">
                20
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-[#F97316] hidden sm:flex bg-[#F5F5F5] rounded-[10px] "
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-[#F97316] bg-[#F5F5F5] rounded-[10px] "
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Cloud Service Button - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <Image src={cloud} alt="cloud" />
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    <span>Account</span>
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-2 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-2 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image src={cloud} alt="cloud" />
                    <span className="sr-only">Cloud</span>
                  </Link>
                  <div className="relative flex-1 py-2">
                    <Input
                      className="w-full pl-3 pr-10"
                      placeholder="Search Product"
                      type="search"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-0 top-2 h-full text-muted-foreground hover:text-[#F97316]"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
