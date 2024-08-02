/* eslint-disable react/prop-types */

import { cn } from "@/lib/utils";

const Hero = ({ videoSrc, children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full bg-black/70 text-center",
        className,
      )}
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        id="video-bg"
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      ></video>
      {/* <div className="absolute left-0 top-0 -z-[5] h-full w-full bg-black/40"></div> */}
      <div className={cn("z-20 w-full px-6 text-left md:px-12")}>
        {children}
      </div>
    </div>
  );
};

export default Hero;
