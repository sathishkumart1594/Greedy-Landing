import peopleReached from "../assets/Page1/Group 17.png";
import clientBoost from "../assets/Page1/Group 18.png";
import websiteLaunch from "../assets/Page1/Group 20.png";
import companyExpansion from "../assets/Page1/Group 19.png";

const stats = [
  {
    id: 1,
    image: peopleReached,
    alt: "534 percent People Reached",
  },
  {
    id: 2,
    image: clientBoost,
    alt: "215 percent Client Boost",
  },
  {
    id: 3,
    image: websiteLaunch,
    alt: "379 Website Launch",
  },
  {
    id: 4,
    image: companyExpansion,
    alt: "801 percent Company Expansion",
  },
];

const StatsSection = () => {
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
        <div
          className="
            rounded-sm
            bg-[#111827]
            px-5
            py-10

            sm:px-8

            md:px-12
            md:py-12

            lg:px-16
          "
        >
          {/* TITLE */}

          <h2
            className="
              text-center
              text-[20px]
              font-medium
              text-white

              sm:text-[22px]

              lg:text-[24px]
            "
          >
            The profits is in the numbers
          </h2>

          {/* STATS */}

          <div
            className="
              mt-10
              grid
              grid-cols-2
              items-center
              gap-x-6
              gap-y-10

              md:grid-cols-4
              md:gap-8

              lg:mt-12
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex min-w-0 justify-center"
              >
                <img
                  src={stat.image}
                  alt={stat.alt}
                  className="
                    h-auto
                    w-full
                    max-w-[180px]
                    object-contain

                    md:max-w-[190px]

                    lg:max-w-[210px]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;