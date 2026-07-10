const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="
        bg-[#111827]
        px-5
        pb-7
        pt-12
        text-white

        md:px-8
        md:pt-16
      "
    >
      <div className="mx-auto max-w-[1200px]">
        {/* MAIN FOOTER CONTENT */}

        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2

            lg:grid-cols-[1.5fr_0.7fr_1fr_0.6fr]
            lg:gap-14
          "
        >
          {/* COMPANY INFO */}

          <div>
            <a
              href="#home"
              aria-label="Greedy home"
              className="
                inline-flex
                h-9
                w-[52px]
                items-center
                justify-center
                rounded-sm
                bg-[#00bf7d]
                text-[13px]
                font-semibold
                text-[#111827]
              "
            >
              LOGO
            </a>

            <p
              className="
                mt-5
                max-w-[320px]
                text-[14px]
                leading-6
                text-[#94a3b8]
              "
            >
              We create digital marketing strategies and modern solutions that
              help businesses grow, reach more customers, and increase online
              sales.
            </p>
          </div>

          {/* MENU */}

          <div>
            <h3 className="text-[15px] font-semibold text-white">
              Menu
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              <a
                href="#who-we-are"
                className="
                  text-[14px]
                  text-[#94a3b8]
                  transition-colors
                  hover:text-[#00bf7d]
                "
              >
                Who we are
              </a>

              <a
                href="#what-we-do"
                className="
                  text-[14px]
                  text-[#94a3b8]
                  transition-colors
                  hover:text-[#00bf7d]
                "
              >
                What we do
              </a>

              <a
                href="#reviews"
                className="
                  text-[14px]
                  text-[#94a3b8]
                  transition-colors
                  hover:text-[#00bf7d]
                "
              >
                Reviews
              </a>

              <a
                href="#blog"
                className="
                  text-[14px]
                  text-[#94a3b8]
                  transition-colors
                  hover:text-[#00bf7d]
                "
              >
                Blog
              </a>
            </nav>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-[15px] font-semibold text-white">
              Contact
            </h3>

            <address className="mt-5 not-italic">
              <a
                href="tel:+1234567890"
                className="
                  block
                  text-[14px]
                  font-medium
                  text-[#00bf7d]
                  transition-opacity
                  hover:opacity-80
                "
              >
                +1 234 567 890
              </a>

              <a
                href="mailto:hello@greedyagency.com"
                className="
                  mt-3
                  block
                  break-all
                  text-[14px]
                  font-medium
                  text-[#00bf7d]
                  transition-opacity
                  hover:opacity-80
                "
              >
                hello@greedyagency.com
              </a>
            </address>
          </div>

          {/* SOCIAL MEDIA */}

          <div>
            <h3 className="text-[15px] font-semibold text-white">
              Follow us
            </h3>

            <div className="mt-5 flex items-center gap-5">
              <SocialLink
                href="#instagram"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>

              <SocialLink
                href="#facebook"
                label="Facebook"
              >
                <FacebookIcon />
              </SocialLink>

              <SocialLink
                href="#twitter"
                label="Twitter"
              >
                <TwitterIcon />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-[#263142]
            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[12px] text-[#64748b]">
            © {currentYear} Greedy Agency. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#terms"
              className="
                text-[12px]
                text-[#64748b]
                transition-colors
                hover:text-[#00bf7d]
              "
            >
              Terms of use
            </a>

            <a
              href="#privacy"
              className="
                text-[12px]
                text-[#64748b]
                transition-colors
                hover:text-[#00bf7d]
              "
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialLink = ({
  href,
  label,
  children,
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        text-[#00bf7d]
        transition-transform

        hover:-translate-y-0.5
        hover:text-white

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#00bf7d]
      "
    >
      {children}
    </a>
  );
};

const InstagramIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
};

const FacebookIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22V13.2H16.5L17 9.8H13.5V7.6C13.5 6.6 13.8 5.9 15.2 5.9H17.1V2.9C16.8 2.9 15.6 2.8 14.3 2.8C11.6 2.8 9.8 4.4 9.8 7.4V9.9H6.8V13.3H9.8V22H13.5Z" />
    </svg>
  );
};

const TwitterIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.5 6.1C20.8 6.4 20 6.6 19.2 6.7C20 6.2 20.7 5.4 21 4.5C20.2 5 19.3 5.3 18.3 5.5C17.6 4.7 16.5 4.2 15.4 4.2C13.2 4.2 11.4 6 11.4 8.2C11.4 8.5 11.4 8.8 11.5 9.1C8.2 8.9 5.2 7.3 3.2 4.8C2.9 5.4 2.7 6.1 2.7 6.8C2.7 8.2 3.4 9.4 4.5 10.1C3.8 10.1 3.2 9.9 2.7 9.6V9.7C2.7 11.6 4.1 13.3 5.9 13.7C5.6 13.8 5.2 13.9 4.8 13.9C4.5 13.9 4.3 13.9 4 13.8C4.5 15.4 6 16.6 7.8 16.6C6.4 17.7 4.6 18.3 2.8 18.3C2.5 18.3 2.2 18.3 1.8 18.2C3.6 19.4 5.8 20.1 8.1 20.1C15.6 20.1 19.7 13.9 19.7 8.5V8C20.4 7.5 21.1 6.8 21.5 6.1Z" />
    </svg>
  );
};

export default Footer;