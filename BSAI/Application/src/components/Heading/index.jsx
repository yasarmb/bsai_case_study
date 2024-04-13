import React from "react";

const sizes = {
  s: "text-[23px] font-semibold md:text-[21px]",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
