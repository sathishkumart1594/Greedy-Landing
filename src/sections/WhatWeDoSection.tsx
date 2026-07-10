import group104 from "../assets/Page1/Group 104.png";
import group105 from "../assets/Page1/Group 105.png";
import group106 from "../assets/Page1/Group 106.png";
import group107 from "../assets/Page1/Group 107.png";
import checkIcon from "../assets/Page1/check block-icon.png";

interface ServiceFeature {
  title: string;
  description: string;
  highlighted?: boolean;
}

interface Service {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  features: ServiceFeature[];
}

interface FeatureCardProps {
  feature: ServiceFeature;
}

interface ServiceBlockProps {
  service: Service;
}

const services: Service[] = [
  {
    id: 1,
    title: "Good Design Increases Sales",
    image: group104,
    imageAlt: "Design workspace and ecommerce website interface",
    imagePosition: "left",
    features: [
      {
        title: "Strategy and Research",
        description:
          "Based on deep researching we create the best strategy due to your needs.",
      },
      {
        title: "Development",
        description:
          "We create the best solution relying on own platforms, the experience of our partners and modern tendency.",
        highlighted: true,
      },
      {
        title: "Strategy & visual design",
        description:
          "It is possible to see the future result with the prognosticate ground plan.",
      },
      {
        title: "Conversion optimization",
        description:
          "We teach your call-center team how to talk efficiently to your clients.",
      },
    ],
  },

  {
    id: 2,
    title: "Get More Customers with Google Ads",
    image: group105,
    imageAlt: "Marketing team and Google Ads campaign interface",
    imagePosition: "right",
    features: [
      {
        title: "Campaign development",
        description:
          "Create your unique advertisement easily without extra time or money.",
      },
      {
        title: "Campaign launch",
        description:
          "Start your commerce with the social media announcement. Get more client without much effort.",
        highlighted: true,
      },
      {
        title: "Optimization",
        description:
          "Save your money with the simple upgrades and enjoy your profit instantly.",
      },
      {
        title: "Measurement",
        description:
          "Discover the website activity with the analytics tools simply and unmistakably.",
      },
    ],
  },

  {
    id: 3,
    title: "Show Up when People Search for What You Sell",
    image: group106,
    imageAlt: "Google search interface and Google office building",
    imagePosition: "left",
    features: [
      {
        title: "SEO audit",
        description:
          "Analyze your next steps and in which way it will have impact on the selling results.",
      },
      {
        title: "On-page SEO",
        description:
          "Optimize every word on your page for increasing the sales and reach the top of Google searching.",
      },
      {
        title: "Targeted content",
        description:
          "The targeting content helps you to push ahead less popular categories of goods.",
        highlighted: true,
      },
      {
        title: "Off-page SEO",
        description:
          "This strategy helps you to increase the trust level to your online store.",
      },
    ],
  },

  {
    id: 4,
    title: "Grow Your Business with Social Media",
    image: group107,
    imageAlt: "Social media marketing interfaces and business team",
    imagePosition: "right",
    features: [
      {
        title: "Authentic storytelling",
        description:
          "Tell your clients which were your first steps and failures in this business.",
      },
      {
        title: "Optimized ads",
        description:
          "Optimize every word on your page for increasing the sales and reach the top of Google searching.",
      },
      {
        title: "Community Engagement",
        description:
          "Develop business with similar companies or partners.",
      },
      {
        title: "Fostering Growth",
        description:
          "The accent on social media activities increases the number of your clients.",
        highlighted: true,
      },
    ],
  },
];

const CheckIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div
      className={`
        w-full
        max-w-[320px]
        min-h-[190px]
        rounded-[4px]
        px-1
        py-2

        bg-white
        text-[#111827]

        dark:bg-[#111827]
        dark:text-white

        ${
          feature.highlighted
            ? `
              border
              border-[#d9f7e9]
              px-6
              py-6

              shadow-[0_6px_16px_4px_rgba(47,223,132,0.15)]

              dark:border-[#16483d]
              dark:bg-[#172033]
              dark:shadow-[0_6px_16px_4px_rgba(47,223,132,0.12)]
            `
            : ""
        }
      `}
    >
      <div className="flex items-start gap-5">
        <img
            src={checkIcon}
            alt=""
            aria-hidden="true"
            className="h-[46px] w-[46px] shrink-0 object-contain"
        />

         <h4
           className="
           pt-1
           text-[16px]
           font-semibold
           leading-[1.3]
         text-[#111827]

         dark:text-white
        ">
    {feature.title}
  </h4>
</div>

      <p
        className="
          mt-4
          text-[14px]
          leading-[1.7]
          text-[#374151]

          dark:text-[#cbd5e1]
        "
      >
        {feature.description}
      </p>
    </div>
  );
};

const ServiceBlock = ({ service }: ServiceBlockProps) => {
  const imageOnRight = service.imagePosition === "right";

  return (
    <article
      className="
        grid
        items-center
        gap-10

        lg:grid-cols-2
        lg:gap-12
      "
    >
      {/* IMAGE */}

      <div
        className={`
          flex
          justify-center

          ${imageOnRight ? "lg:order-2" : "lg:order-1"}
        `}
      >
        <img
          src={service.image}
          alt={service.imageAlt}
          className="
            h-auto
            w-full
            max-w-[430px]
            object-contain
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className={`
          ${imageOnRight ? "lg:order-1" : "lg:order-2"}
        `}
      >
        <h3
          className="
            max-w-[350px]
            text-[26px]
            font-semibold
            leading-[1.2]
            tracking-[-0.02em]
            text-[#111827]

            md:text-[28px]

            dark:text-white
          "
        >
          {service.title}
        </h3>

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
          "
        >
          {service.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="
        overflow-hidden
        bg-white
        px-5
        py-16

        md:px-8
        md:py-20

        lg:py-24

        dark:bg-[#111827]
      "
    >
      <div className="mx-auto max-w-[1050px]">
        {/* SECTION HEADING */}

        <div className="text-center">
          <h2
            className="
              text-[30px]
              font-semibold
              tracking-[-0.02em]
              text-[#111827]

              sm:text-[34px]

              dark:text-white
            "
          >
            What We Do
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[620px]
              text-[15px]
              leading-7
              text-[#4b5563]

              dark:text-[#cbd5e1]
            "
          >
            We provide innovative digital marketing solutions that help your
            business grow, reach more customers, and increase online sales.
          </p>
        </div>

        {/* SERVICE BLOCKS */}

        <div
          className="
            mt-16
            space-y-20

            md:mt-20
            md:space-y-24

            lg:space-y-28
          "
        >
          {services.map((service) => (
            <ServiceBlock
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;