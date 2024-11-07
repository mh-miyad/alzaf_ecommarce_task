"use client";

import Link from "next/link";
import { useState } from "react";

interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: Category[];
}

const categories: Category[] = [
  {
    id: 1,
    title: "Women's & Girls' Fashion",
    parent_id: null,
    category_id: 14,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Women-&-Girls-Fashion.svg",
    link: "/womens-girls-fashion",
  },
  {
    id: 2,
    title: "Health & Beauty",
    parent_id: null,
    category_id: 16,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Health-&-Beauty.svg",
    link: "/health-beauty",
  },
  {
    id: 3,
    title: "Watches, Bags, Jewellery",
    parent_id: null,
    category_id: 10,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Watches-Bags-jewellery.svg",
    link: "/watches-bags-jewellery",
    childrens: [
      {
        id: 15,
        title: "Kids Bags",
        parent_id: 3,
        category_id: 1,
        link: "/watches-bags-jewellery/kids-bags",
        childrens: [
          {
            id: 19,
            title: "Bags ABC",
            parent_id: 15,
            category_id: 16,
            link: "/watches-bags-jewellery/kids-bags/bags-abc",
          },
        ],
      },
      {
        id: 16,
        title: "Travel Bags",
        parent_id: 3,
        category_id: 15,
        link: "/watches-bags-jewellery/travel-bags",
        childrens: [
          {
            id: 17,
            title: "Children Bags",
            parent_id: 16,
            category_id: 16,
            link: "/watches-bags-jewellery/travel-bags/children-bags",
            childrens: [
              {
                id: 18,
                title: "Bags 123",
                parent_id: 17,
                category_id: 16,
                link: "/watches-bags-jewellery/travel-bags/children-bags/bags-123",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Men's & Boys' Fashion",
    parent_id: null,
    category_id: 5,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/mens-boys-fashion.svg",
    link: "/mens-boys-fashion",
  },
  {
    id: 5,
    title: "Mother & Baby",
    parent_id: null,
    category_id: 4,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/mother-baby.svg",
    link: "/mother-baby",
  },
  {
    id: 6,
    title: "Electronics Devices",
    parent_id: null,
    category_id: 10,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/electronics.svg",
    link: "/electronics-devices",
  },
  {
    id: 7,
    title: "TV & Home Appliances",
    parent_id: null,
    category_id: 16,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/tv-home.svg",
    link: "/tv-home-appliances",
  },
  {
    id: 8,
    title: "Electronic Accessories",
    parent_id: null,
    category_id: 10,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/electronic-acces.svg",
    link: "/electronic-accessories",
  },
  {
    id: 9,
    title: "Groceries",
    parent_id: null,
    category_id: 2,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/grocery.svg",
    link: "/groceries",
  },
  {
    id: 10,
    title: "Home & Lifestyle",
    parent_id: null,
    category_id: 9,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/home-lifestyle.svg",
    link: "/home-lifestyle",
  },
  {
    id: 11,
    title: "Sports & Outdoors",
    parent_id: null,
    category_id: 15,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/sports.svg",
    link: "/sports-outdoors",
  },
  {
    id: 12,
    title: "Automobile",
    parent_id: null,
    category_id: 7,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/auto-mobile.svg",
    link: "/automobile",
  },
  {
    id: 13,
    title: "Computer and Laptop",
    parent_id: null,
    category_id: 6,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/computer-laptop.svg",
    link: "/computer-and-laptop",
  },
  {
    id: 14,
    title: "Pet Supplies",
    parent_id: null,
    category_id: 15,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/pet-supplier.svg",
    link: "/pet-supplies",
  },
];

export default function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const SubCategories = ({
    categories,
    level = 0,
  }: {
    categories: Category[];
    level?: number;
  }) => {
    const [activeSubCategory, setActiveSubCategory] = useState<number | null>(
      null
    );

    return (
      <div
        className={`absolute left-full top-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[200px]`}
        style={{ transform: `translateX(${10 * (level + 1)}px)` }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative"
            onMouseEnter={() => setActiveSubCategory(category.id)}
            onMouseLeave={() => setActiveSubCategory(null)}
          >
            <Link
              href={category.link}
              className="flex items-center px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
            >
              {category.title}
              {category.childrens && (
                <svg
                  className="ml-auto h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </Link>
            {category.childrens && activeSubCategory === category.id && (
              <SubCategories
                categories={category.childrens}
                level={level + 1}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-[280px] bg-white rounded-lg shadow-lg">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative"
          onMouseEnter={() => setActiveCategory(category.id)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <Link
            href={category.link}
            className="flex items-center px-4 py-2 hover:bg-gray-50"
            onClick={(e) => {
              if (category.childrens) {
                e.preventDefault();
                setActiveCategory(
                  activeCategory === category.id ? null : category.id
                );
              }
            }}
          >
            {category.icon && (
              <i
                className="w-4 h-4 mr-2"
                style={{ backgroundImage: `url(${category.icon})` }}
                aria-hidden="true"
              ></i>
            )}
            <span className="text-sm text-gray-700">{category.title}</span>
            {category.childrens && (
              <svg
                className="ml-auto h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </Link>
          {category.childrens && activeCategory === category.id && (
            <SubCategories categories={category.childrens} />
          )}
        </div>
      ))}
    </div>
  );
}
