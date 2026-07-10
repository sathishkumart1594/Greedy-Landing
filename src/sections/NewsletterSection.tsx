import { useState, type FormEvent } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed email:", email);

    setEmail("");
  };

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
        {/* HEADING */}

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
            Stay update
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[650px]
              text-[15px]
              leading-7
              text-[#4b5563]

              dark:text-[#cbd5e1]
            "
          >
            Subscribe to our newsletter to receive the latest news, updates,
            and useful marketing tips.
          </p>
        </div>

        {/* SUBSCRIBE FORM */}

        <form
          onSubmit={handleSubmit}
          className="
            mx-auto
            mt-10
            flex
            w-full
            max-w-[700px]
            items-center
            border
            border-[#d9f7e9]
            bg-white
            p-1.5
            shadow-[0_4px_16px_rgba(0,191,125,0.12)]

            dark:border-[#17473d]
            dark:bg-[#172033]
            dark:shadow-[0_4px_16px_rgba(0,191,125,0.08)]
          "
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            required
            className="
              min-w-0
              flex-1
              bg-transparent
              px-4
              py-3
              text-[15px]
              text-[#111827]
              outline-none

              placeholder:text-[#9ca3af]

              sm:px-5

              dark:text-white
              dark:placeholder:text-[#64748b]
            "
          />

          <button
            type="submit"
            className="
              inline-flex
              min-h-12
              shrink-0
              items-center
              justify-center
              bg-[#00bf7d]
              px-5
              text-[14px]
              font-semibold
              text-white
              transition-colors

              hover:bg-[#00a96f]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#00bf7d]
              focus-visible:ring-offset-2

              sm:px-8

              dark:focus-visible:ring-offset-[#172033]
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;