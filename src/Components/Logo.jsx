import whiteLogo from "../assets/images/logo_white.png";
import darkLogo from "./Assets/black-logo.png";
export const WhiteLogo = ({ className }) => {
  return (
    <img src={whiteLogo} alt="" className={`${className} cursor-pointer`} />
  );
};

export const DarkLogo = ({ className }) => {
  return (
    <img src={darkLogo} alt="" className={`${className} w cursor-pointer`} />
  );
};
