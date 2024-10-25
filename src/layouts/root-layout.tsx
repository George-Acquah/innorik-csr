import { FC, use } from "react";
import { Outlet } from "react-router-dom";
import { cn, THEME } from "@/utils";
import { Navbar, Sidebar } from "@/components/navigation";
import { ConfiguratorContext } from "@/utils/contexts/configurator.contexts";
import { sidenavColors } from "@/utils/constants/theme.constants";

const RootLayout: FC = () => {
  const { state: { sidenavColor, fixedNavbar } } = use(ConfiguratorContext);
  return (
    <div
      className={cn(
        `flex ${sidenavColors[sidenavColor]} `,
        "h-screen overflow-hidden w-full"
      )}
    >
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="overflow-y-auto flex-1">
        <div
          className={`p-2 md:px-10 rounded-tl-2xl ${THEME.mainBg} min-h-screen flex flex-col gap-2`}
        >
          <div className={fixedNavbar ? "mb-16" : ""}>
            <Navbar />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
