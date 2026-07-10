import mainImage from "../assets/Page1/Mask Group.png";

import commerceIcon from "../assets/Page1/commerce-icon.png";
import growthIcon from "../assets/Page1/growth-icon.png";
import transparencyIcon from "../assets/Page1/transparency-icon.png";
import expertsIcon from "../assets/Page1/experts-icon.png";

interface Reason {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

const reasons: Reason[] = [
  {
    title: "We are commerce first",
    description:
      "We are improving businesses based on our vast experience.",
    icon: commerceIcon,
    highlighted: true,
  },
  {
    title: "Our focus is on growth",
    description:
      "Our main goal is to make your online store better every day.",
    icon: growthIcon,
  },
  {
    title: "Transparency",
    description:
      "You can follow all our steps due to strategy and be a part of changes.",
    icon: transparencyIcon,
  },
  {
    title: "We're experts",
    description:
      "The team of experts includes business owners and advisers.",
    icon: expertsIcon,
  },
];

interface ReasonCardProps {
  reason: Reason;
}

const ReasonCard = ({ reason }: ReasonCardProps) => {
  return (
    <div
      className={`
        w-full
        min-h-[150px]
        rounded-[4px]
        p-5

        ${
          reason.highlighted
            ? `
              border
              border-[#d9f7e9]
              bg-white
              shadow-[0_6px_16px_4px_rgba(47,223,132,0.15)]

              dark:border-[#16483d]
              dark:bg-[#172033]
              dark:shadow-[0_6px_16px_4px_rgba(47,223,132,0.12)]
            `
            : `
              border
              border-transparent
              bg-transparent
            `
        }
      `}
    >
      <img
        src={reason.icon}
        alt=""
        aria-hidden="true"
        className="
          h-[38px]
          w-[38px]
          object-contain
        "
      />

      <h3
        className="
          mt-5
          text-[16px]
          font-semibold
          leading-[1.3]
          text-[#111827]

          dark:text-white
        "
      >
        {reason.title}
      </h3>

      <p
        className="
          mt-3
          text-[13px]
          leading-[1.65]
          text-[#374151]

          dark:text-[#cbd5e1]
        "
      >
        {reason.description}
      </p>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section
      id="who-we-are"
      className="
        bg-[#f1faf7]
        px-5
        py-16

        md:px-8
        md:py-20

        lg:py-24

        dark:bg-[#111827]
      "
    >
      <div className="mx-auto max-w-[1050px]">
        <div
          className="
            grid
            items-start
            gap-10

            lg:grid-cols-[1fr_360px]
            lg:gap-14
          "
        >
          {/* LEFT CONTENT */}

          <div>
            <h2
              className="
                max-w-[500px]
                text-[30px]
                font-semibold
                leading-[1.25]
                tracking-[-0.02em]
                text-[#111827]

                sm:text-[34px]

                dark:text-white
              "
            >
              Why top Ecommerce and startup companies choose us:
            </h2>

            {/* REASON CARDS */}

            <div
              className="
                mt-10
                grid
                grid-cols-1
                items-start
                gap-x-5
                gap-y-5

                sm:grid-cols-2
              "
            >
              {reasons.map((reason) => (
                <ReasonCard
                  key={reason.title}
                  reason={reason}
                />
              ))}
            </div>

            {/* BUTTON */}

            <a
              href="#contact"
              className="
                mt-6
                inline-flex
                min-h-10
                items-center
                justify-center
                gap-3
                rounded-[2px]
                bg-[#00bf7d]
                px-5
                text-[13px]
                font-semibold
                text-white
                transition-colors

                hover:bg-[#00a96f]
              "
            >
              Let's Chat
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* MAIN IMAGE */}

          <div
            className="
              flex
              justify-center

              lg:pt-[68px]
            "
          >
            <img
              src={mainImage}
              alt="Person working at a computer workspace"
              className="
                h-auto
                w-full
                max-w-[360px]
                rounded-[18px]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;