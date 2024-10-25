
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "../../../utils";
import { use } from "react";
import { ConfiguratorContext } from "@/utils/contexts/configurator.contexts";
import { sidenavColors } from "@/utils/constants/theme.constants";

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  
  const {
    setOpenSidenav,
    state: { openSidenav },
  } = use(ConfiguratorContext);
  

  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <Bars3Icon
            className="text-neutral-800 dark:text-neutral-200 w-4 h-4"
            onClick={() => setOpenSidenav(!openSidenav)}
          />
        </div>
        {openSidenav && (
          <div
            className={cn(
              "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between overflow-hidden transition-transform duration-300 ease-in-out transform",
              openSidenav ? "translate-x-0" : "-translate-x-full",
              className
            )}
          >
            <div className="absolute right-10 top-10 z-50">
              <XMarkIcon
                className="text-neutral-800 dark:text-neutral-200 w-4 h-4"
                onClick={() => setOpenSidenav(!openSidenav)}
              />
            </div>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const {
    setOpenSidenav,
    state: { openSidenav, animateSidenav, sidenavColor },
  } = use(ConfiguratorContext);

  console.log(sidenavColors[sidenavColor])
  return (
    <div
      className={cn(
        `h-full px-4 py-4 hidden md:flex md:flex-col bg-gradient-to-br ${sidenavColors[sidenavColor]} flex-shrink-0`,
        className,
        openSidenav ? "w-48" : "w-15"
      )}
      onMouseEnter={animateSidenav ? () => setOpenSidenav(true) : undefined}
      onMouseLeave={animateSidenav ? () => setOpenSidenav(false) : undefined}
      {...props}
    >
      {children}
    </div>
  );
};
