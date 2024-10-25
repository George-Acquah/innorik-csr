import { cn } from "../../../utils";
import { useConfigurator } from "@/utils/contexts/configurator.contexts";

export const NavbarBody = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const {
    state: { fixedNavbar },
  } = useConfigurator();

  return (
    <div
      className={cn(
        "px-4 py-4 hidden md:flex bg-neutral-100 dark:bg-neutral-800 transition-all duration-300",
        className,
        fixedNavbar ? "fixed top-0 left-0 w-full z-10" : "relative"
      )}
      {...props}
    >
      {children}
    </div>
  );
};