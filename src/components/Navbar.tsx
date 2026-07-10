import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  onOpenCheckup: () => void;
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Design",
    description: "Create & develop your brand",
    icon: "▣",
  },
  {
    title: "Digital Advertising",
    description: "We grow your online visibility",
    icon: "▤",
  },
  {
    title: "SEO",
    description: "We grow your website position",
    icon: "♙",
  },
  {
    title: "Social Media",
    description: "We manage your social media",
    icon: "▧",
  },
];

const Navbar = ({ onOpenCheckup }: NavbarProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleCheckupClick = () => {
    closeMobileMenu();
    onOpenCheckup();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="relative z-50 bg-white dark:bg-[#111827]">
      {/* NAVBAR */}

      <div className="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between px-5 md:px-8">
        {/* LOGO */}

        <a
          href="#home"
          aria-label="Greedy home"
          className="flex h-10 w-[52px] items-center justify-center rounded-sm bg-[#00bf7d] font-medium text-[#111827] relative pl-10"
        >
          LOGO
        </a>

        {/* DESKTOP NAVIGATION */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-10 lg:flex"
        >
          <a
            href="#who-we-are"
            className="text-[16px] font-medium text-[#111827] transition-colors hover:text-[#00bf7d] dark:text-white dark:hover:text-[#00bf7d]"
          >
            Who we are
          </a>

          {/* DESKTOP SERVICES */}

          <div ref={desktopDropdownRef} className="relative pl-1">
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              onClick={() => setServicesOpen((previous) => !previous)}
              className="flex items-center gap-2 text-[16px] font-medium text-[#00bf7d]"
            >
              What we do

              <ChevronIcon open={servicesOpen} />
            </button>

            {servicesOpen && (
              <ServicesDropdown
                onClose={() => setServicesOpen(false)}
              />
            )}
          </div>

          <a
            href="#reviews"
            className="text-[16px] font-medium text-[#111827] transition-colors hover:text-[#00bf7d] dark:text-white dark:hover:text-[#00bf7d]"
          >
            Reviews
          </a>

          <a
            href="#blog"
            className="text-[16px] font-medium text-[#111827] transition-colors hover:text-[#00bf7d] dark:text-white dark:hover:text-[#00bf7d]"
          >
            Blog
          </a>
        </nav>

        {/* DESKTOP CTA */}
        <button
  type="button"
  onClick={toggleTheme}
  aria-label={
    isDarkMode
      ? "Switch to light mode"
      : "Switch to dark mode"
  }
  className="
    
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    border
    border-[#00bf7d]
    text-[#00bf7d]
    transition-colors

    hover:bg-[#00bf7d]
    hover:text-white
  "
>
  {isDarkMode ? "☀️" : "🌛"}
</button>

        <button
          type="button"
          onClick={onOpenCheckup}
          className="hidden h-12 items-center gap-6 rounded-sm bg-[#00bf7d] px-8 text-[15px] font-semibold text-white transition-colors hover:bg-[#00aa70] lg:flex"
        >
          Get you free website review

          <ArrowRightIcon />
        </button>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileMenuOpen((previous) => !previous);

            if (mobileMenuOpen) {
              setMobileServicesOpen(false);
            }
          }}
          className="flex h-11 w-11 items-center justify-center text-[#00bf7d] lg:hidden"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[80px] z-40 overflow-y-auto bg-[#00bf7d] lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex min-h-full max-w-md flex-col px-4 pb-9 pt-7"
          >
            <div className="flex flex-col gap-7">
              <a
                href="#who-we-are"
                onClick={closeMobileMenu}
                className="text-[27px] font-medium leading-none text-white"
              >
                Who we are
              </a>

              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() =>
                  setMobileServicesOpen((previous) => !previous)
                }
                className="flex w-fit items-center gap-2 text-[27px] font-medium leading-none text-white"
              >
                What we do

                <ChevronIcon open={mobileServicesOpen} />
              </button>

              {mobileServicesOpen && <MobileServicesDropdown />}

              <a
                href="#reviews"
                onClick={closeMobileMenu}
                className="text-[27px] font-medium leading-none text-white"
              >
                Reviews
              </a>

              <a
                href="#blog"
                onClick={closeMobileMenu}
                className="text-[27px] font-medium leading-none text-white"
              >
                Blog
              </a>
            </div>

            <button
              type="button"
              onClick={handleCheckupClick}
              className="mt-auto flex min-h-12 w-full items-center justify-center gap-7 rounded bg-[#31db95] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#28cf8b]"
            >
              Get you free website review

              <ArrowRightIcon />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface ServicesDropdownProps {
  onClose: () => void;
}

const ServicesDropdown = ({ onClose }: ServicesDropdownProps) => {
  return (
    <div
      role="menu"
      className="absolute left-1/2 top-[48px] w-[420px] -translate-x-1/2 rounded-xl bg-white p-6 shadow-[0_8px_30px_rgba(0,191,125,0.15)]"
    >
      <div className="space-y-1">
        {services.map((service, index) => (
          <a
            key={service.title}
            href={`#${service.title
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            role="menuitem"
            onClick={onClose}
            className={`group flex min-h-[70px] items-center gap-5 rounded-xl px-4 transition-colors ${
              index === 0
                ? "bg-[#f0f9f5]"
                : "hover:bg-[#f0f9f5]"
            }`}
          >
            <ServiceIcon />

            <span className="min-w-0 flex-1">
              <span
                className={`block text-[16px] font-medium ${
                  index === 0
                    ? "text-[#00bf7d]"
                    : "text-[#111827]"
                }`}
              >
                {service.title}
              </span>

              <span className="mt-0.5 block text-[13px] text-[#111827]">
                {service.description}
              </span>
            </span>

            {index === 0 && (
              <span className="text-[#00bf7d]">
                <ArrowRightIcon />
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

const MobileServicesDropdown = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="space-y-1">
        {services.map((service, index) => (
          <a
            key={service.title}
            href={`#${service.title
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            className={`flex min-h-[70px] items-center gap-4 rounded-xl px-4 ${
              index === 0 ? "bg-[#f0f9f5]" : ""
            }`}
          >
            <ServiceIcon />

            <span className="min-w-0 flex-1">
              <span
                className={`block text-[16px] font-medium ${
                  index === 0
                    ? "text-[#00bf7d]"
                    : "text-[#111827]"
                }`}
              >
                {service.title}
              </span>

              <span className="block text-[13px] leading-5 text-[#111827]">
                {service.description}
              </span>
            </span>

            {index === 0 && (
              <span className="text-[#00bf7d]">
                <ArrowRightIcon />
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

const ServiceIcon = () => {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#00bf7d]">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="28"
          height="23"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M3 10H31"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M12 17.5C13.7 14.7 17 15.7 17 18C17 15.7 20.3 14.7 22 17.5C23.6 20.1 20.6 22.4 17 24.5C13.4 22.4 10.4 20.1 12 17.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
};

interface ChevronIconProps {
  open: boolean;
}

const ChevronIcon = ({ open }: ChevronIconProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowRightIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MenuIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8H20M4 16H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Navbar;