import { cn } from "@/lib/utils";

function HeroHeading({ children, className }) {
  return (
    <h1
      className={cn(
        "text-left font-poppins text-2xl font-normal capitalize leading-snug text-white sm:text-[2.3rem] md:text-5xl md:font-thin md:leading-normal lg:text-7xl lg:font-light",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export default HeroHeading;
