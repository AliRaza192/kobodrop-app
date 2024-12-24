import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import Paypal from "../assets/logo-wall/paypal.png";
import Becd from "../assets/logo-wall/bedc.png";
import MasterCard from "../assets/logo-wall/mastercard.png";
import Visa from "../assets/logo-wall/visa.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Dstv from "../assets/logo-wall/dstv.png";

import LogoWall from "../common/LogoWall";

const Partners = () => {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="text-4xl mb-4 font-semibold text-gray-800">
          Transact Seamlessly with.....
        </h2>
        <p>
          Connects your others accounts to Kobodrop seamlessly. Kobodrop
          supports 200+
          <br />
          intergrations with other payment platforms like PayPal, Stripe,
          PayoneerFlutterwave, Paystack, etc.
        </p>
      </article>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Klarna}
          src2={Stripe}
          src3={Paypal}
          alt1="Klarna"
          alt2="Stripe"
          alt3="Paypal"
        />

        <LogoWall
          src1={Airtel}
          src2={Payoneer}
          src3={Visa}
          alt1="Klarna"
          alt2="Stripe"
          alt3="Paypal"
        />
        <LogoWall
          src1={MasterCard}
          src2={Mobile}
          src3={Mtn}
          alt1="Klarna"
          alt2="Stripe"
          alt3="Paypal"
        />

        <LogoWall
          src1={Becd}
          src2={Ikeja}
          src3={Dstv}
          alt1="Klarna"
          alt2="Stripe"
          alt3="Paypal"
        />

        {/* <article className="flex justify-center text-center gap-4 mb-8">
          <img src={Klarna} alt="Klarna" className="w-20 md:w-36" />
          <img src={Stripe} alt="Stripe" className="w-20 md:w-36" />
          <img src={Paypal} alt="Paypal" className="w-20 md:w-36" />
        </article> */}
      </div>
    </section>
  );
};

export default Partners;
