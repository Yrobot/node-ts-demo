import React from "react";

function Icon({
  icon,
  ...props
}: { icon: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      width={24}
      height={24}
      alt="icon"
      {...props}
      src={`/icons/${icon}.svg`}
    />
  );
}

export default Icon;
