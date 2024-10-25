import { NavLink } from "react-router-dom";
import { Typography } from "../ui/typography";
import { use } from "react";
import { ConfiguratorContext } from "@/utils/contexts/configurator.contexts";
import { sidenavTextColors } from "@/utils/constants/theme.constants";

export const Logo = () => {
  const { state: { sidenavColor }} = use(ConfiguratorContext);
  return (
    <NavLink
      to="/inventory"
      aria-label="Logo Label"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div
        className={`h-5 w-6 ${
          sidenavColor === "white"
            ? "bg-black "
            : "bg-white"
        } rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0`}
      />
      <Typography
        variant="span"
        className={`font-medium ${sidenavTextColors[sidenavColor]} whitespace-pre opacity-100 transition-all duration-500 delay-300`}
      >
        Logo Name
      </Typography>
    </NavLink>
  );
};

export const LogoIcon = () => {
  const {
    state: { sidenavColor },
  } = use(ConfiguratorContext);
  return (
    <NavLink
      to="/inventory"
      aria-label="Logo Icon"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div
        className={`h-5 w-6 ${
          sidenavColor === "white" ? "bg-black " : "bg-white"
        } rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0`}
      />
    </NavLink>
  );
};

const ResolvedLogo = () => {
  const {
    state: { openSidenav },
  } = use(ConfiguratorContext);
  return <>{openSidenav ? <Logo /> : <LogoIcon />}</>;
};

export default ResolvedLogo;
