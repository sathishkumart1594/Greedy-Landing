import agencyImage from "../assets/Page1/Group 100.png";

const AgencySection = () => {
  return (
    <section
      id="who-we-are"
      className="
        bg-[white]
        px-5
        py-16

        md:px-8
        md:py-20

        lg:py-24

        dark:bg-[#111827]
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1200px]
          items-center
          gap-12

          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* CONTENT */}

        <div className="order-1">
          <p
            className="
              mb-4
              text-[15px]
              font-semibold
              text-[#00bf7d]

              md:text-[16px]
            "
          >
            Who we are
          </p>

          <h2
            className="
              max-w-[500px]
              text-[32px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              text-[#111827]

              sm:text-[38px]

              md:text-[42px]

              lg:text-[44px]

              dark:text-white
            "
          >
            Top #1 marketing agency in the world
          </h2>

          <p
            className="
              mt-6
              max-w-[520px]
              text-[16px]
              leading-7
              text-[#4b5563]

              dark:text-[#cbd5e1]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            imperdiet felis egestas augue. Mauris pretium orci consectetur
            malesuada. Nulla facilisi.
          </p>

          <a
            href="#what-we-do"
            className="
              mt-8
              inline-flex
              min-h-12
              items-center
              justify-center
              rounded-sm
              bg-[#111827]
              px-7
              text-[15px]
              font-semibold
              text-white
              transition-colors
              duration-200

              hover:bg-[#00bf7d]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#00bf7d]
              focus-visible:ring-offset-4

              dark:bg-white
              dark:text-[#111827]

              dark:hover:bg-[#00bf7d]
              dark:hover:text-white

              dark:focus-visible:ring-offset-[#111827]
            "
          >
            See more
          </a>
        </div>

        {/* IMAGE */}

        <div
          className="
            order-2
            flex
            min-w-0
            items-center
            justify-center

            lg:justify-end
          "
        >
          <img
            src={agencyImage}
            alt="Marketing specialist with business analytics charts"
            className="
              h-auto
              w-full
              max-w-[520px]
              object-contain

              sm:max-w-[570px]

              lg:w-[560px]
              lg:max-w-none

              xl:w-[610px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default AgencySection;