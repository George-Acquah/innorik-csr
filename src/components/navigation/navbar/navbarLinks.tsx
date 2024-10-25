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
          "flex items-center justify-start gap-2 group/navbar py-2 bg-white px-2",
          isPending
            ? "bg-green-500"
            : isActive
            ? "bg-green-400/70"
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
        className={cn(
          "text-neutral-700 dark:text-neutral-200 text-sm group-hover/navbar:translate-x-1 transition duration-150 whitespace-pre inline-block"
        )}
      >
        {link.label}
      </Typography>
    </NavLink>
  );
};
