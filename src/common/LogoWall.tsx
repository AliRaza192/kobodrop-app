interface LogoWallProps {
  src1: string;
  src2: string;
  src3: string;
  alt1: string;
  alt2: string;
  alt3: string;
}

const LogoWall = ({ src1, src2, src3, alt1, alt2, alt3 }: LogoWallProps) => {
  return (
    <article className="flex justify-center text-center gap-4 mb-8">
      <img src={src1} alt={alt1} className="w-20 md:w-36" />
      <img src={src2} alt={alt2} className="w-20 md:w-36" />
      <img src={src3} alt={alt3} className="w-20 md:w-36" />
    </article>
  );
};

export default LogoWall;