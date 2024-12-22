// import AppLogo from "../assets/logos/app_store.svg";
// import GooglePlay from "../assets/logos/google_play.svg";
// import StoreLink from "../common/StoreLink";
import StoreLinksBtn from "../common/StoreLinksBtn";
import Phone from "../assets/mockup.svg";
import HeroImage from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="relative flex flex-col mt-4 h-fit max-w-7xl items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[85vh] md:gap-0 md:flex-row lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6">
        <h1 className="mx-auto mb-8 w-[14ch] text-center text-4xl font-bold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
          Start Spending the Smart Way!
        </h1>
        <p className="m-auto w-[36ch] text-center text-gray-500 md:m-0 md:text-left">
          Take Control of Your Finances Anytime, Anywhere with KoroDrop Discover
          the Smart way to Use Your Money!.
        </p>
        <StoreLinksBtn />
      </div>
      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <img
          className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
          src={Phone}
          alt="Kobodrop app frame"
        />
        <img
          className="hidden rounded-xl xl:flex"
          src={HeroImage}
          alt="Hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
