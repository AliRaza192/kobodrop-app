import { ButtonLinkProps } from "./ButtonLink";

const StoreLink = ({
  href,
  className,
  target,
  logo,
  upertext,
  lowertext,
}: ButtonLinkProps) => {
  return (
    <div>
      <a href={href} className={className} target={target}>
        <img src={logo} alt={`${lowertext} logo`} className="w-5" />
        <div>
          <p className="text-xs">{upertext}</p>
          <p>{lowertext}</p>
        </div>
      </a>
    </div>
  );
};

export default StoreLink;
