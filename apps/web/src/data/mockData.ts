import { LandingPageData } from '../types';

export const mockLandingPageData: LandingPageData = {
  hero: {
    title: "NextSora's Most Loved Office Furniture",
    description: "Upgrade your work-from-home setup. Top-rated by TechCrunch, Forbes, and 10,000+ customers.",
    ctaText: "SHOP NOW",
    imageUrl: "/images/hero-bg.jpg"
  },
  pressLogos: [
    { name: "TechCrunch", imageUrl: "/images/logos/techcrunch.png", link: "#" },
    { name: "Forbes", imageUrl: "/images/logos/forbes.png", link: "#" },
    { name: "Wired", imageUrl: "/images/logos/wired.png", link: "#" },
    { name: "CNN", imageUrl: "/images/logos/cnn.png", link: "#" }
  ],
  pressQuote: {
    text: "WFH in comfort with NextSora's high-quality ergonomic chairs and standing desks.",
    source: "TechCrunch"
  },
  workSpaces: [
    {
      title: "Home Office",
      description: "Work essentials for everyday use",
      imageUrl: "/images/home-office.jpg",
      link: "/collections/home-office"
    },
    {
      title: "Team Office",
      description: "Solutions for teams of all sizes",
      imageUrl: "/images/team-office.jpg",
      link: "/collections/team-office"
    }
  ],
  productCategories: [
    {
      name: "Chairs",
      imageUrl: "/images/categories/chairs.jpg",
      link: "/collections/chairs"
    },
    {
      name: "Desks",
      imageUrl: "/images/categories/desks.jpg",
      link: "/collections/desks"
    },
    {
      name: "Accessories",
      imageUrl: "/images/categories/accessories.jpg",
      link: "/collections/accessories"
    },
    {
      name: "Bundles",
      imageUrl: "/images/categories/bundles.jpg",
      link: "/collections/bundles"
    }
  ],
  uspItems: [
    {
      icon: "🔄",
      title: "Ergonomic Support",
      description: "Premium comfort for long work hours"
    },
    {
      icon: "👥",
      title: "Fewer Middlemen",
      description: "Direct to consumer pricing"
    },
    {
      icon: "🚚",
      title: "Free & Fast Shipping",
      description: "Quick delivery nationwide"
    },
    {
      icon: "🤝",
      title: "White-Glove Service",
      description: "Premium installation and support"
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description: "Fast production and delivery"
    },
    {
      icon: "🎯",
      title: "Track & Flexibility",
      description: "Adaptable solutions for any space"
    }
  ],
  savingsData: {
    title: "We sell direct and share the savings.",
    description: "We cut out middlemen and manufacturers to give you an office you'll love for less, up to 50% compared to traditional office furniture or other brands.",
    chartData: [
      { label: "Traditional Office Furniture", value: 100, color: "#6B7280" },
      { label: "NextSora", value: 50, color: "#059669" }
    ]
  },
  bestsellers: [
    {
      id: "1",
      name: "Task Chair",
      price: 299,
      imageUrl: "/images/products/task-chair.jpg",
      link: "/products/task-chair"
    },
    {
      id: "2",
      name: "Ergonomic Chair",
      price: 399,
      imageUrl: "/images/products/ergonomic-chair.jpg",
      link: "/products/ergonomic-chair"
    },
    {
      id: "3",
      name: "Office Desk",
      price: 199,
      imageUrl: "/images/products/office-desk.jpg",
      link: "/products/office-desk"
    },
    {
      id: "4",
      name: "Saddle Chair",
      price: 149,
      imageUrl: "/images/products/saddle-chair.jpg",
      link: "/products/saddle-chair"
    }
  ],
  trustPoints: [
    { text: "Free shipping." },
    { text: "30 day trial." },
    { text: "5,000+ five-star reviews." }
  ],
  trustDescription: {
    text: "Get live, local support from assembly to ergonomic tips. If there's something you don't love, return your like-new furniture for any reason within 30 days.",
    link: "/learn-more"
  },
  shopBySpace: {
    title: "Shop by space and get inspired",
    description: "Get inspired by seeing how our NextSora furniture fits in your actual home. Explore different spaces and their featured products.",
    tabs: [
      {
        name: "BUDGET BUREAU",
        content: {
          imageUrl: "/images/spaces/budget-bureau.jpg",
          products: [
            { id: "1", x: 20, y: 30, name: "Task Chair" },
            { id: "2", x: 60, y: 40, name: "Compact Desk" }
          ]
        }
      },
      {
        name: "COMMAND CENTRAL STUDIO",
        content: {
          imageUrl: "/images/spaces/command-central.jpg",
          products: [
            { id: "3", x: 25, y: 35, name: "Ergonomic Chair" },
            { id: "4", x: 70, y: 45, name: "Standing Desk" }
          ]
        }
      },
      {
        name: "ORGANIZED OASIS",
        content: {
          imageUrl: "/images/spaces/organized-oasis.jpg",
          products: [
            { id: "5", x: 30, y: 25, name: "Storage Cabinet" },
            { id: "6", x: 65, y: 50, name: "Workstation" }
          ]
        }
      },
      {
        name: "MOMENTARY SANCTUARY",
        content: {
          imageUrl: "/images/spaces/momentary-sanctuary.jpg",
          products: [
            { id: "7", x: 40, y: 30, name: "Comfort Chair" },
            { id: "8", x: 75, y: 40, name: "Relaxation Desk" }
          ]
        }
      }
    ]
  },
  testimonials: [
    {
      quote: "NextSora transformed our office setup completely. The quality is outstanding!",
      author: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      avatarUrl: "/images/testimonials/sarah.jpg"
    },
    {
      quote: "Best investment for our remote team. Everyone loves their new chairs!",
      author: "Mike Chen",
      title: "CTO, RemoteWorks",
      avatarUrl: "/images/testimonials/mike.jpg"
    },
    {
      quote: "Affordable luxury that actually delivers. Highly recommended!",
      author: "Emma Davis",
      title: "Design Director, CreativeCo",
      avatarUrl: "/images/testimonials/emma.jpg"
    },
    {
      quote: "The customer service is as good as the furniture. Amazing experience!",
      author: "David Wilson",
      title: "Operations Manager, ScaleUp",
      avatarUrl: "/images/testimonials/david.jpg"
    }
  ],
  pressQuotes: [
    {
      text: "The brand builds premium office furniture, including chairs, desks, tables, and accessories, at much lower prices by selling direct to consumers. They also offer premium white-glove services for in-desk design and exceptional supportive service.",
      source: "TechCrunch"
    }
  ],
  footerLinks: [
    {
      category: "SHOP",
      items: [
        { text: "Office Chairs", link: "/collections/chairs" },
        { text: "Desks", link: "/collections/desks" },
        { text: "Bundles", link: "/collections/bundles" },
        { text: "Accessories", link: "/collections/accessories" }
      ]
    },
    {
      category: "BUSINESS",
      items: [
        { text: "Contact Us", link: "/contact" },
        { text: "Bulk Orders", link: "/bulk-orders" },
        { text: "Corporate Solutions", link: "/corporate" },
        { text: "Partnerships", link: "/partnerships" }
      ]
    },
    {
      category: "SUPPORT",
      items: [
        { text: "FAQ", link: "/faq" },
        { text: "Assembly Guide", link: "/assembly" },
        { text: "Returns", link: "/returns" },
        { text: "Warranty", link: "/warranty" }
      ]
    },
    {
      category: "NEWS, OFFERS AND MORE",
      items: [
        { text: "Blog", link: "/blog" },
        { text: "Newsletter", link: "/newsletter" },
        { text: "Press Kit", link: "/press" },
        { text: "Careers", link: "/careers" }
      ]
    }
  ],
  socialLinks: [
    { icon: "instagram", link: "https://instagram.com/nextsora" },
    { icon: "facebook", link: "https://facebook.com/nextsora" },
    { icon: "linkedin", link: "https://linkedin.com/company/nextsora" },
    { icon: "twitter", link: "https://twitter.com/nextsora" }
  ],
  contactInfo: {
    address: "200 Toronto St. N, Unit 201, Markham, ON L3P 3J2, Canada",
    email: "hello@nextsora.com",
    phone: "+1 (555) 123-4567"
  }
}; 