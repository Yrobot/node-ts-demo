import React from "react";
import Icon from "./Icon";

const Link = ({ children, ...props }: any) => (
  <span {...props}>{children}</span>
);

const links = [
  {
    icon: "facebook",
    href: "/",
  },
  {
    icon: "twitter",
    href: "/",
  },
  {
    icon: "linkedin",
    href: "/",
  },
];

function Footer() {
  return (
    <div className="w-full bg-primary text-primary-content md:h-[60px]">
      <div className="section-container flex h-full flex-col items-center justify-between text-xs font-semibold md:flex-row">
        <div className="mr-auto flex h-[68px] w-full flex-row items-center justify-center space-x-10 md:h-auto md:w-auto md:space-x-6">
          {links.map(({ href, icon }) => (
            <Link href={href} key={icon}>
              <a className="cursor-pointer">
                <Icon icon={icon} className="w-5" />
              </a>
            </Link>
          ))}
        </div>
        <div className="flex h-[68px] w-full flex-row items-center justify-between space-x-9 border-t border-primary-border text-xs font-semibold text-[#E8E8E8] md:h-auto md:w-auto md:border-none">
          <Link href="/policy">
            <a>Privacy Policy</a>
          </Link>
          <p className="text-[#ABABAB]">© 2022 WeVision LLC</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
