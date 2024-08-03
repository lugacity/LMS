import { useNavigate } from "react-router-dom";
import arrow from "../assets/images/arrow-up.png";
import { cn } from "@/lib/utils";

const Button = ({ children, className, type = "button" }) => {
  const navigate = useNavigate();
  return (
    <button
      className={cn(
        "relative flex h-24 cursor-pointer gap-2 justify-self-start rounded-xl border border-white bg-transparent px-2 py-2 text-base font-light capitalize text-white lg:justify-self-end 2xl:w-[260px] 2xl:text-nowrap 2xl:px-5 2xl:text-xl",
        className,
      )}
      onClick={() => navigate("/contact")}
      type={type}
    >
      <span className="self-end text-xl"> {children}</span>
      <span className="absolute right-5 top-2">
        <img src={arrow} alt="" className="self-start 2xl:w-[36px]" />
      </span>
    </button>
  );
};

export default Button;
