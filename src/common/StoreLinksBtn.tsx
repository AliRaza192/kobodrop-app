import AppLogo from "../assets/logos/app_store.svg";
import GooglePlay from "../assets/logos/google_play.svg";
import StoreLink from "../common/StoreLink";

const StoreLinksBtn = () => {
  return (
    <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">
      <StoreLink
        href="https://www.apple.com/app-store/"
        target="_blank"
        logo={AppLogo}
        upertext="Download on the"
        className="flex gap-3 rounded-lg bg-zinc-900 hover:bg-zinc-950 active:bg-zinc-800 px-4 py-3 text-white font-semibold"
        lowertext="App Store"
      />

      <StoreLink
        href="https://play.google.com "
        target="_blank"
        logo={GooglePlay}
        upertext="Get it om"
        className="flex gap-3 rounded-lg bg-zinc-900 hover:bg-zinc-950 active:bg-zinc-800 px-4 py-3 text-white font-semibold"
        lowertext="Google Play"
      />
    </div>
  );
};

export default StoreLinksBtn;
