import React, { use } from "react";
import { DesktopSidebar, MobileSidebar, SidebarLink } from "..";
import ResolvedLogo from "@/components/shared/logo";
import { Typography } from "@/components/ui/typography";
import { sidebarLinks } from "@/data/navigation.data";
import { ConfiguratorContext } from "@/utils/contexts/configurator.contexts";
import { sidenavTextColors } from "@/utils/constants/theme.constants";

export const SidebarBody = (props: React.ComponentProps<"div">) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

const Sidebar = () => {
  const { state: { openSidenav, sidenavColor } } = use(ConfiguratorContext);
  return (
    <SidebarBody className="justify-between gap-10">
      <div className="flex flex-col overflow-x-hidden">
        <ResolvedLogo />
        <div className="mt-8 flex flex-col gap-2">
          {sidebarLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              {openSidenav && link.parent && (
                <Typography variant="h4" className={`${sidenavTextColors[sidenavColor]}`} >{link.parent}</Typography>
              )}
              <SidebarLink key={idx} link={link} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </SidebarBody>
  );
};

export default Sidebar;
