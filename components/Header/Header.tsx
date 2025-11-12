"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavigationStore } from "@/store/useNavigationStore";
import { useUIStore } from "@/store/useUIStore";
import { MegaMenu } from "./MegaMenu";
import { navigationData } from "@/data/navigation";

export function Header() {
  const { isMenuOpen, toggleMenu } = useNavigationStore();
  const { language, setLanguage, theme, toggleTheme } = useUIStore();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/logo-mobile-50.svg"
              alt="Pernod Ricard Logo"
              width={121}
              height={56}
              className="mt-[5px] -ml-[6px]"
              priority
              unoptimized
            />
          </Link>

          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationData.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className="text-xs m:text-sm xl:text-base font-medium text-gray-700 hover:text-primary transition-colors relative inline-block pb-1"
                  >
                    {item.label}
                    <span
                      className="absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: "#5fa4d0" }}
                    ></span>
                  </Link>
                  {item.subItems && hoveredItem === item.label && (
                    <MegaMenu items={item.subItems} featured={item.featured} />
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <button
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="text-sm font-medium text-gray-700 hover:text-primary"
              >
                {language === "en" ? "FR" : "EN"}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Toggle theme"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="w-full px-4 lg:px-8 py-4">
            {navigationData.map((item) => (
              <div key={item.label} className="py-2 group">
                <Link
                  href={item.href}
                  className="inline-block text-sm font-medium text-gray-700 hover:text-primary relative pb-1"
                  onClick={toggleMenu}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#5fa4d0" }}
                  ></span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
