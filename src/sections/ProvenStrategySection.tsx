import strategyImage from "../assets/Page1/Mask Group1.png";

const ProvenStrategySection = () => {
  return (
    <section className="bg-[#111827] px-5 py-12 md:px-8 md:py-16 lg:py-20">
      <div
        className="
          mx-auto
          grid
          max-w-[1200px]
          items-center
          gap-10

          md:grid-cols-2
          md:gap-12

          lg:gap-20
        "
      >
        {/* IMAGE */}

        <div className="flex min-w-0 justify-center md:justify-start">
          <img
            src={strategyImage}
            alt="Business team reviewing documents and planning a sales strategy"
            className="
              h-auto
              w-full
              max-w-[650px]
              rounded-[8px]
              object-cover
            "
          />
        </div>

        {/* CONTENT */}

        <div>
          <h2
            className="
              max-w-[460px]
              text-[30px]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-white

              sm:text-[34px]

              lg:text-[40px]
            "
          >
            Our Proven Strategy for Growing Your Sales
          </h2>

          <p
            className="
              mt-6
              max-w-[500px]
              text-[16px]
              leading-7
              text-[#cbd5e1]
            "
          >
            We develop effective marketing strategies based on research,
            experience, and modern digital solutions to help your business
            attract more customers and increase sales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProvenStrategySection;