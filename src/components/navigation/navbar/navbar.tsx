import { PowerIcon } from "@heroicons/react/24/outline";
import React from "react";
import ResolvedLogo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/data/navigation.data";
import { NavbarBody } from "./navbarBody";
import { NavbarLinks } from "./navbarLinks";

const Navbar = () => {
  return (
    <NavbarBody className="justify-between gap-10">
      <div className="flex">
        <ResolvedLogo />
        <div className="mt-8 flex gap-2">
          {sidebarLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <NavbarLinks key={idx} link={link} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>
        <form
          // action={async () => {

          // }}
          className="flex items-center justify-center gap-2 w-full"
        >
          <Button
            variant="destructive"
            size="lg"
            type="submit"
            className={`rounded-md p-3 text-white flex gap-4 items-center justify-center w-[80%]`}
          >
            <PowerIcon className="w-6" />
            <div className="">Sign Out</div>
          </Button>
        </form>
      </div>
    </NavbarBody>
  );
};

export default Navbar;
