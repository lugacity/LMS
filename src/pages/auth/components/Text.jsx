import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const elementProps = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export const Heading = ({ children, className }) => (
  <h1
    className={cn("font-poppins text-center text-2xl text-heading", className)}
  >
    {children}
  </h1>
);

export const Paragraph = ({ children, className }) => (
  <p className={cn("text-desc text-center text-sm", className)}>{children}</p>
);
Heading.propTypes = { ...elementProps };
Paragraph.propTypes = { ...elementProps };
