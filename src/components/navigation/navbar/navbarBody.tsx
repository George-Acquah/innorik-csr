import { use } from "react";
import { cn } from "../../../utils";
import { ConfiguratorContext } from "@/utils/contexts/configurator.contexts";

export const NavbarBody = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const {
    state: { fixedNavbar },
  } = use(ConfiguratorContext);

  return (
    <div
      className={cn(
        "px-4 py-4 hidden md:w-full md:max-w-[44rem] md:mx-auto md:flex bg-white-100 dark:bg-neutral-800 rounded-full ",
        className,
        fixedNavbar ? "fixed top-2 left-1/2 transform -translate-x-1/2 z-10" : "relative"
      )}
      {...props}
    >
      {children}
    </div>
  );
};