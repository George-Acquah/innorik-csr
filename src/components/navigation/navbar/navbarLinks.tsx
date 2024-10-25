import { NavLink, NavLinkProps } from "react-router-dom";
import { cn } from "../../../utils";
import { Typography } from "@/components/ui/typography";

export const NavbarLinks = ({
  link,
  className,
  ...props
}: {
  link: _ILinks;
  className?: string;
  props?: NavLinkProps;
}) => {

  return (
    <NavLink
      to={link.href}
      aria-label={link.label}
      className={({ isActive, isPending, isTransitioning }) =>
        cn(
          "flex items-center justify-start rounded-full gap-2 group/navbar py-2 bg-transparent px-4 transition-all duration-100 dark:text-neutral-300",
          isPending
            ? "bg-green-500"
            : isActive
            ? "bg-green-400/70 text-white dark:text-white"
            : isTransitioning
            ? ""
            : "",
          className
        )
      }
      {...props}
    >
      {link.icon}
      <Typography
        variant="span"
        color="default"
        className={cn(
          "text-inherit  text-sm group-hover/navbar:translate-x-1 transition duration-150 whitespace-pre inline-block"
        )}
      >
        {link.label}
      </Typography>
    </NavLink>
  );
};
