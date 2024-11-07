export interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: Category[];
}

export const categories: Category[] = [
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
