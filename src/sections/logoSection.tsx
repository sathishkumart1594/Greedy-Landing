import audiLogo from "../assets/Page1/audi.png";
import bitbucketLogo from "../assets/Page1/bitbucket.png";
import appleWatchLogo from "../assets/Page1/apple-watch.png";
import atlassianLogo from "../assets/Page1/atlassian.png";
import facebookLogo from "../assets/Page1/facebookimg.png";


const logos = [
  {
    name: "Bitbucket",
    image: bitbucketLogo,
  },
  {
    name: "Apple Watch",
    image: appleWatchLogo,
  },
  {
    name: "Facebook",
    image: facebookLogo,
  },
  {
    name: "Atlassian",
    image: atlassianLogo,
  },
  {
    name: "Audi",
    image: audiLogo,
  },
];

const logoSection = () =>{
    return(
      <section aria-label="Companies we work with" className="bg-[#d5e7e0] dark:bg-[#111827]">
        <div className="
            mx-auto
            flex
            max-w-[1200px]
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-7
            px-5
            py-8

            sm:gap-x-12

            md:px-8

            lg:justify-between
            lg:gap-8
            lg:py-7
          "
        >
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.image}
              alt={logo.name}
              className="
                h-auto
                max-h-[25px]
                w-auto
                max-w-[105px]
                object-contain
                opacity-60
                transition-opacity
                duration-200

                hover:opacity-100

                sm:max-w-[120px]

                lg:max-h-[28px]
                lg:max-w-[135px]

                dark:opacity-70
                dark:hover:opacity-100
              "
            />
          ))}
        </div>
      </section>
    );
}

export default logoSection;