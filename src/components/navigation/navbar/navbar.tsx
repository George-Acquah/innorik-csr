import React from "react";
import { sidebarLinks } from "@/data/navigation.data";
import { NavbarBody } from "./navbarBody";
import { NavbarLinks } from "./navbarLinks";

const Navbar = () => {
  return (
    <NavbarBody className="justify-between gap-10">
      <div className="flex">
        <div className="flex gap-2">
          {sidebarLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <NavbarLinks key={idx} link={link} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </NavbarBody>
  );
};

export default Navbar;
