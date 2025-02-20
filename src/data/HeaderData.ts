export interface MenuItem {
  title?: string;
  link?: string;
  icon?: string;
  img?: string;
  dropdown?: MenuItem[];
}

export interface HeaderItem {
  title: string;
  link?: string;
  megamenu?: MenuItem[];
  dropdown?: MenuItem[];
}

const HeaderData: HeaderItem[] = [
  {
    title: "Home",
    link: "/",
    megamenu: [
      {
        title: "Corporate",
        dropdown: [
          { title: "Startup", link: "/home-startup" },
          { title: "Business", link: "/home-business" },
          { title: "Corporate", link: "/home-corporate" },
          { title: "Finance", link: "/home-finance" },
          { title: "Application", link: "/home-application" },
          { title: "Consulting", link: "/home-consulting" },
          { title: "Digital agency", link: "/home-digital-agency" },
          { title: "SEO agency", link: "/home-seo-agency" },
          { title: "Events & conference", link: "/home-events-conference" },
          { title: "Marketing agency", link: "/home-marketing-agency" },
        ],
      },
      {
        title: "Specialized",
        dropdown: [
          { title: "Restaurant", link: "/home-restaurant" },
          { title: "Architecture", link: "/home-architecture" },
          { title: "Hotel & resort", link: "/home-hotel-resort" },
          { title: "Travel agency", link: "/home-travel-agency" },
          { title: "Yoga & meditation", link: "/home-yoga-meditation" },
          { title: "Gym & fitness", link: "/home-gym-fitness" },
          { title: "Spa salon", link: "/home-spa-salon" },
          { title: "Cafe", link: "/home-cafe" },
          { title: "Home decor", link: "/home-decor" },
          { title: "Dentist", link: "/home-dentist" },
          { title: "Interior design", link: "/home-interior-design" },
        ],
      },
      {
        title: "Portfolio",
        dropdown: [
          { title: "Design agency", link: "/home-design-agency" },
          { title: "Web agency", link: "/home-web-agency" },
          { title: "Creative agency", link: "/home-creative-agency" },
          { title: "Freelancer", link: "/home-freelancer" },
          { title: "Branding agency", link: "/home-branding-agency" },
          { title: "Photography", link: "/home-photography" },
          { title: "Personal portfolio", link: "/home-personal-portfolio" },
          { title: "Vertical portfolio", link: "/home-vertical-portfolio" },
          {
            title: "Interactive portfolio",
            link: "/home-interactive-portfolio",
          },
          { title: "Split portfolio", link: "/home-split-portfolio" },
          { title: "Creative portfolio", link: "/home-creative-portfolio" },
        ],
      },
      {
        title: "Other",
        dropdown: [
          { title: "Furniture shop", link: "/home-furniture-shop" },
          { title: "Fashion shop", link: "/home-fashion-shop" },
          { title: "Magazine", link: "/home-magazine" },
          { title: "Lifestyle blog", link: "/home-lifestyle-blog" },
          { title: "Classic blog", link: "/home-classic-blog" },
          { title: "Blog metro", link: "/home-blog-metro" },
        ],
      },
    ],
  },
  {
    title: "Pages",
    dropdown: [
      {
        title: "About",
        dropdown: [
          { title: "About me", link: "/page/about-me" },
          { title: "About us", link: "/page/about-us" },
          { title: "Our story", link: "/page/our-story" },
          { title: "Who we are", link: "/page/who-we-are" },
        ],
      },
      {
        title: "Services",
        dropdown: [
          { title: "Our services", link: "/page/our-services" },
          { title: "What we offer", link: "/page/what-we-offer" },
          { title: "Our process", link: "/page/our-process" },
        ],
      },
      {
        title: "Contact",
        dropdown: [
          { title: "Contact simple", link: "/page/contact-simple" },
          { title: "Contact classic", link: "/page/contact-classic" },
          { title: "Contact modern", link: "/page/contact-modern" },
        ],
      },
      {
        title: "Additional pages",
        dropdown: [
          { title: "Our team", link: "/page/our-team" },
          { title: "Latest news", link: "/page/latest-news" },
          { title: "Pricing packages", link: "/page/pricing-packages" },
          { title: "Error 404", link: "/page/error-404" },
          { title: "Maintenance", link: "/page/maintenance" },
          { title: "Coming soon", link: "/page/coming-soon" },
          { title: "Coming soon - V2", link: "/page/coming-soon-V2" },
          { title: "FAQ's", link: "/page/faq-s" },
          { title: "Search result", link: "/page/search-result" },
        ],
      },
    ],
  },
  // ... other header items follow the same structure
];

export default HeaderData;
