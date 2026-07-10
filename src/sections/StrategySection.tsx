import marketing1 from "../assets/Page1/Marketing1.png";
import marketing2 from "../assets/Page1/Marketing2.png";
import marketing3 from "../assets/Page1/Marketing3.png";

interface MarketingStrategy {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const marketingStrategies: MarketingStrategy[] = [
  {
    id: 1,
    category: "Strategy",
    title: "Online marketing step by step",
    description:
      "Learn how to build an effective online marketing strategy and grow your business step by step.",
    image: marketing1,
    imageAlt: "Smartphone displaying social media beside a laptop",
  },
  {
    id: 2,
    category: "Strategy",
    title: "Online marketing step by step",
    description:
      "Use digital marketing tools and analytics to improve your campaigns and reach more customers.",
    image: marketing2,
    imageAlt: "Digital marketing analytics displayed on a laptop",
  },
  {
    id: 3,
    category: "Marketing",
    title: "Online marketing step by step",
    description:
      "Measure campaign performance and use data-driven decisions to improve your online business.",
    image: marketing3,
    imageAlt: "Business professional working with marketing software",
  },
];

const StrategySection = () => {
  return (
    <section
      className="
        bg-white
        px-5
        py-16

        md:px-8
        md:py-20

        lg:py-24

        dark:bg-[#111827]
      "
    >
      <div className="mx-auto max-w-[1200px]">
        {/* SECTION HEADING */}

        <div className="text-center">
          <h2
            className="
              text-[30px]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#111827]

              sm:text-[36px]

              lg:text-[40px]

              dark:text-white
            "
          >
            Why you need multiple
            <br />
            marketing strategies
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[620px]
              text-[16px]
              leading-7
              text-[#4b5563]

              dark:text-[#cbd5e1]
            "
          >
            Use a complete marketing approach to reach more customers, improve
            your online presence, and grow your business.
          </p>
        </div>

        {/* MARKETING CARDS */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-8

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {marketingStrategies.map((strategy) => (
            <article
              key={strategy.id}
              className="
                overflow-hidden
                rounded-sm
                border
                border-[#dff8ed]
                bg-white
                shadow-[0_4px_14px_rgba(0,191,125,0.12)]
                transition-transform
                duration-200

                hover:-translate-y-1

                dark:border-[#173e3a]
                dark:bg-[#111827]
                dark:shadow-[0_4px_14px_rgba(0,191,125,0.15)]
              "
            >
              {/* IMAGE */}

              <img
                src={strategy.image}
                alt={strategy.imageAlt}
                className="
                  h-[220px]
                  w-full
                  object-cover

                  sm:h-[240px]

                  lg:h-[210px]

                  xl:h-[230px]
                "
              />

              {/* CARD CONTENT */}

              <div className="p-6">
                <p
                  className="
                    text-[14px]
                    font-semibold
                    text-[#00bf7d]
                  "
                >
                  {strategy.category}
                </p>

                <h3
                  className="
                    mt-2
                    text-[21px]
                    font-semibold
                    leading-[1.3]
                    text-[#111827]

                    dark:text-white
                  "
                >
                  {strategy.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-6
                    text-[#4b5563]

                    dark:text-[#cbd5e1]
                  "
                >
                  {strategy.description}
                </p>

                <a
                  href="#contact"
                  className="
                    mt-6
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-sm
                    bg-[#00bf7d]
                    px-6
                    text-[14px]
                    font-semibold
                    text-white
                    transition-colors

                    hover:bg-[#00a96f]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#00bf7d]
                    focus-visible:ring-offset-4

                    dark:focus-visible:ring-offset-[#111827]
                  "
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;