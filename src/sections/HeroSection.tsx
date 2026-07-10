import heroImage from "../assets/Page1/Group 96.png";


const HeroSection = () => {
  return (
    <>
      <section id="home"
        className=" bg-white pt-12 dark:bg-[#111827] md:pt-16 lg:pt-20">

        <div className=" mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 md:px-8 lg:min-h-[620px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:pb-20">

          {/* LEFT CONTENT */}

          <div className="relative z-10">
            <p className=" mb-5 text-[15px] font-semibold text-[#00bf7d] md:text-[16px]">
              Award winning company
            </p>

            <h1 className="max-w-[580px] text-[38px] font-semibold
                leading-[1.18]
                tracking-[-0.03em]
                text-[#111827]

                sm:text-[44px]

                md:text-[52px]

                lg:text-[56px]

                dark:text-white
              "
            >
              Digital marketing agency and design. We grow your business online
            </h1>

            <p
              className="
                mt-7
                max-w-[570px]
                text-[16px]
                leading-7
                text-[#4b5563]

                md:text-[17px]

                dark:text-[#cbd5e1]
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              imperdiet felis egestas augue.
            </p>

            <a
              href="#what-we-do"
              className="
                mt-8
                inline-flex
                min-h-14
                items-center
                justify-center
                rounded-sm
                bg-[#00bf7d]
                px-8
                text-[16px]
                font-semibold
                text-white
                transition-colors
                duration-200

                hover:bg-[#00a96f]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#00bf7d]
                focus-visible:ring-offset-4

                dark:focus-visible:ring-offset-[#111827]
              "
            >
              Start a project
            </a>
          </div>

          {/* RIGHT HERO IMAGE */}

          <div
            className="
              flex
              min-w-0
              items-center
              justify-center

              lg:justify-end
            "
          >
            <img
              src={heroImage}
              alt="Digital marketing analytics dashboard with marketing specialist"
              className="
                h-auto
                w-full
                max-w-[610px]
                object-contain

                sm:max-w-[650px]

                lg:w-[610px]
                lg:max-w-none

                xl:w-[650px]
              "
            />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HeroSection;