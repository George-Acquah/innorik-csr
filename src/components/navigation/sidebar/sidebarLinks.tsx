import { NavLink, NavLinkProps } from "react-router-dom";
import { cn } from "../../../utils";
import { use } from "react";
import { ConfiguratorContext } from "@/utils/contexts/configurator.contexts";
import { activeColors, sidenavTextColors, sidenavTexts } from "@/utils/constants/theme.constants";

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: _ILinks;
  className?: string;
  props?: NavLinkProps;
}) => {
  const {
    state: { openSidenav, sidenavColor },
  } = use(ConfiguratorContext);

  return (
    <NavLink
      to={link.href}
      aria-label={link.label}
      className={({ isActive, isPending, isTransitioning }) =>
        cn(
          "flex items-center group/sidebar py-2 rounded-md px-2",
          openSidenav
            ? isPending
              ? `bg-green-500 gap-2`
              : isActive
              ? `${activeColors[sidenavColor]} gap-2`
              : isTransitioning
              ? ""
              : "bg-white dark:text-neutral-800 justify-start  gap-2"
            : isActive
            ? `${activeColors[sidenavColor]} ${sidenavTexts[sidenavColor]}`
            : `${sidenavTextColors[sidenavColor]} justify-between hover:translate-x-1 transition duration-150 `,
          className
        )
      }
      {...props}
    >
      {link.icon}
      <span
        className={cn(
          "text-inherit text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 overflow-hidden",
          openSidenav ? "opacity-100 w-auto" : "opacity-0 w-0"
        )}
      >
        {link.label}
      </span>
    </NavLink>
  );
};
