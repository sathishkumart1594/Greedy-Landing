interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The team helped us improve our online presence and reach more customers. Their marketing strategy made a real difference to our business.",
    name: "John Carter",
    role: "Business Owner",
  },
  {
    id: 2,
    quote:
      "Working with this agency was a great experience. They understood our goals and delivered a strategy that helped our company grow.",
    name: "Robert Wilson",
    role: "Marketing Manager",
  },
  {
    id: 3,
    quote:
      "Their team is professional, creative, and focused on results. We saw significant improvements in our online visibility and customer growth.",
    name: "David Miller",
    role: "Company Founder",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="reviews"
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
              tracking-[-0.02em]
              text-[#111827]

              sm:text-[36px]

              lg:text-[40px]

              dark:text-white
            "
          >
            What our client say
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[680px]
              text-[15px]
              leading-7
              text-[#4b5563]

              dark:text-[#cbd5e1]
            "
          >
            We are the best at what we do and strive to make our customers the
            market leaders.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-7

            md:grid-cols-3
            md:items-stretch
          "
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`
                relative
                flex
                min-h-[260px]
                flex-col
                rounded-sm
                border
                bg-white
                p-7
                transition-all
                duration-200

                hover:-translate-y-1

                dark:bg-[#111827]

                ${
                  index === 1
                    ? `
                      border-[#d7f7e9]
                      shadow-[0_5px_18px_rgba(0,191,125,0.16)]

                      dark:border-[#17473d]
                      dark:shadow-[0_5px_18px_rgba(0,191,125,0.12)]
                    `
                    : `
                      border-transparent

                      dark:border-transparent
                    `
                }
              `}
            >
              {/* QUOTE MARK */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  left-5
                  top-3
                  font-serif
                  text-[72px]
                  leading-none
                  text-[#edf2f1]

                  dark:text-[#263142]
                "
              >
                “
              </span>

              {/* TESTIMONIAL TEXT */}

              <blockquote
                className="
                  relative
                  z-10
                  mt-7
                  text-[15px]
                  leading-7
                  text-[#4b5563]

                  dark:text-[#cbd5e1]
                "
              >
                {testimonial.quote}
              </blockquote>

              {/* CLIENT */}

              <div className="mt-auto flex items-center gap-3 pt-7">
                <div
                  aria-hidden="true"
                  className="
                    h-10
                    w-10
                    shrink-0
                    rounded-full
                    bg-[#111827]

                    dark:bg-white
                  "
                />

                <div>
                  <p
                    className="
                      text-[14px]
                      font-semibold
                      text-[#111827]

                      dark:text-white
                    "
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      text-[#6b7280]

                      dark:text-[#94a3b8]
                    "
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;