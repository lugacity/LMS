import { cn } from "@/lib/utils";
import React from "react";

const ImageHero = ({ children, imageSrc, className }) => {
  return (
    <>
      <div
        className={cn(
          "relative flex min-h-screen bg-black/60 px-6 py-8 text-left lg:px-12",
          className,
        )}
      >
        <div className="w-full *:w-full">{children}</div>
        <img
          src={imageSrc}
          className="absolute left-0 top-0 -z-[2] h-full w-full object-cover"
        />
      </div>
    </>
  );
};

export default ImageHero;
