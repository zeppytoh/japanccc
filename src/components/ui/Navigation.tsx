import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import SILogoWhite from "../../assets/img/SI_logo_white@2x.png";

interface NavItem {
  label: string;
  href: string;
  submenu?: {
    icon?: string;
    label: string;
    description?: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  { label: "大学生", href: "/university" },
  { label: "日本CCCについて", href: "/about" },
  {
    label: "リソース",
    href: "/resources",
    submenu: [
      {
        icon: "book",
        label: "教材",
        description: "聖書を学ぶ",
        href: "/resources/materials",
      },
      {
        icon: "speaker",
        label: "ポッドキャスト",
        description: "聞いてわかる番組",
        href: "/resources/podcast",
      },
      {
        icon: "download",
        label: "PDFs",
        description: "いろんな電子書類",
        href: "/resources/pdfs",
      },
    ],
  },
  { label: "ご支援", href: "/support" },
  { label: "ニュース", href: "/news" },
  { label: "ブログ", href: "/blog" },
  { label: "つながる", href: "/connect" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={SILogoWhite.src} className="h-18 w-auto" alt="Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className={`font-medium ${
                    isScrolled
                      ? "text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                      : "text-white hover:text-gray-200"
                  } transition-colors duration-200 flex items-center`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                    <div className="relative top-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-150"
                        >
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {subItem.label}
                            </span>
                            {subItem.description && (
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {subItem.description}
                              </span>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="mailto:info@domain.com"
              className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                  : "border-white text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Send a message</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled
                  ? "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-lg mt-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {subItem.label}
                        {subItem.description && (
                          <span className="block text-xs text-gray-400 dark:text-gray-500">
                            {subItem.description}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
