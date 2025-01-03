import AppFrame from "../assets/app_frame.png";
import ShieldCheck from "../assets/icons/check.png";
import Coins from "../assets/icons/coins.png";
import Frame from "../assets/frames.png"

const Features = () => {
  return (
    <div className="flex flex-col max-w-7xl gap-10 px-8 pt-10 lg:px-12 xl:pt-20 xl:m-auto">
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Make Every Penny Count
        </h2>
        <p>
          Spend Smarter, lower your bills, and get cashback on everything you
          buy,
          <br />
          and unlock credit to grow your business.
        </p>
      </article>

      <article className="flex flex-col w-full gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3 ">
          <div className="flex flex-col justify-center mt-10 gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl text-gray-800 font-semibold sm:w-[20ch] md:m-0 md:text-left">
              Pay with Kobodrop, quick, simple and easy
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[36ch] md:m-0 md:text-left">
              Paying your bills on Kobodrop has never been easier. Whether you
              are paying for electricity or internet, Kobodrop gets it done
              within seconds.
            </p>
          </div>

          <div className="m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            <img src={AppFrame} alt="Kobodrop frame app" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4  rounded-2xl bg-indigo-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-indigo-200 p-4">
            <img src={ShieldCheck} alt="Check Mark" />
          </div>
          <h2 className="text-3xl text-gray-800 font-semibold">
            Bank Level Security
          </h2>
          <p className="text-gray-500">
            Your Money is 100% safe and secure on Kobodrop. No hassles, no
            glitches, get access to your monry anytime.
          </p>
        </div>
      </article>

      <article className="flex flex-col w-full gap-8 xl:h-96 xl:flex-row">
        <div className="flex flex-col justify-center gap-4  rounded-2xl bg-orange-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-orange-200 p-4">
            <img src={Coins} alt="Check Mark" />
          </div>
          <h2 className="text-3xl text-gray-800 font-semibold">
            Cost Reduction
          </h2>
          <p className="text-gray-500">
            Kobodrop reduced payment, maintenance and processing fees. No
            hiiiden charges, no extra costs.
          </p>
        </div>

        <div className="flex flex-col  gap-8 overflow-hidden rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3 ">
          <div className="flex flex-col justify-center mt-10 gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl text-gray-800 font-semibold sm:w-[20ch] md:m-0 md:text-left">
              Send, receive and Exchange Money
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[36ch] md:m-0 md:text-left">
              Transfers, payments, and exchanges are made easy on Kobodrop. Get
              your alert message immediately after every transaction.
            </p>
          </div>

          <div className="m-auto max-w-96 md:mt-36 md:w-1/2">
            <img src={Frame} alt="Kobodrop frame app" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Features;
