"use client";
import React, { useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "@/utils/hooks/useOutsideClick";
import { useConfigurator } from "@/utils/contexts/configurator.contexts";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Typography } from "../ui/typography";
import { AnimatedTooltip } from "../ui/tooltip";
import { themesTypeData } from "@/data";

interface _Indexer {
  [key: string]: string;
}

function Configurator() {
  const {
    state,
    setOpenConfigurator,
    setSidenavColor,
    setSidenavType,
    setAnimateSidenav,
    setOpenSidenav,
  } = useConfigurator();
  const {
    openConfigurator,
    sidenavColor,
    sidenavType,
    animateSidenav,
    openSidenav,
  } = state;
  const configuratorRef = useRef(null);
  useOutsideClick(configuratorRef, () => setOpenConfigurator(false));

  const sidenavColors: _Indexer = {
    white: "from-gray-100 to-gray-100 border-gray-200",
    dark: "from-black to-black border-gray-200",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
  };

  return (
    <div className="">
      <aside
        ref={configuratorRef}
        className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white dark:bg-neutral-800 px-2.5 shadow-lg transition-transform duration-300 ${
          openConfigurator ? "translate-x-0" : "translate-x-96"
        }`}
      >
        <div className="flex items-start justify-between px-6 pt-8 pb-6">
          <div>
            <Typography variant="h3">Dashboard Configurator</Typography>
            <Typography variant="p" className="font-normal">
              See our dashboard options.
            </Typography>
          </div>
          <Button
            variant="default"
            size="icon"
            aria-label="Close Configurator"
            className="bg-transparent dark:bg-transparent shadow-none hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full"
            onClick={() => setOpenConfigurator(false)}
          >
            <XMarkIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-primary dark:text-primary-dark "
            />
          </Button>
        </div>
        <div className="py-4 px-6">
          <div className="mb-12">
            <Typography variant="h4">Sidenav Colors</Typography>
            <div className="mt-3 flex items-center gap-2">
              {Object.keys(sidenavColors).map((color) => (
                <Typography
                  variant="span"
                  key={color}
                  className={`h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 ${
                    sidenavColors[color]
                  } ${
                    sidenavColor === color
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  onClick={() => setSidenavColor(color)}
                />
              ))}
            </div>
          </div>
          {/* <div className="mb-12">
            <Typography variant="h4">Sidenav Types</Typography>
            <Typography variant="p" color="secondary">
              Choose between 3 different sidenav types.
            </Typography>
            <div className="mt-3 flex items-center gap-2">
              <Button
                variant={sidenavType === "dark" ? "default" : "outline"}
                aria-label="Dark Navbar"
                onClick={() => setSidenavType("dark")}
                size="default"
              >
                Dark
              </Button>
              <Button
                variant={sidenavType === "transparent" ? "default" : "outline"}
                onClick={() => setSidenavType("transparent")}
                size="default"
                aria-label="Transparent Navbar"
              >
                Transparent
              </Button>
              <Button
                variant={sidenavType === "white" ? "default" : "outline"}
                onClick={() => setSidenavType("white")}
                size="default"
                aria-label="White Navbar"
              >
                White
              </Button>
            </div>
          </div> */}
          <div className="mb-12">
            <div className="h-[1px] bg-neutral-200 dark:bg-neutral-600" />
            <Typography variant="h4" className="mt-4">
              Sidenav Layout
            </Typography>
            <Typography variant="p" color="secondary">
              Choose between 3 different sidenav layouts.
            </Typography>
            <div className="flex items-center justify-between py-3">
              <Typography variant="h5">Open Sidebar Fixed</Typography>
              <Switch
                aria-label="Open Sidebar Fixed"
                id="sidenav-open-fixed"
                className={`${
                  !animateSidenav && openSidenav
                    ? ""
                    : "hover:bg-secondary hover:bg-opacity-20"
                }`}
                checked={!animateSidenav && openSidenav}
                onSwitchToggle={() => {
                  setAnimateSidenav(false);
                  setOpenSidenav(true);
                }}
              />
            </div>
            <div className="flex items-center justify-between py-3">
              <Typography variant="h5">Close Sidebar Fixed</Typography>
              <Switch
                aria-label="Close Sidebar Fixed"
                id="sidenav-closed-fixed"
                className={`${
                  !animateSidenav && !openSidenav
                    ? ""
                    : "hover:bg-secondary hover:bg-opacity-20"
                }`}
                checked={!animateSidenav && !openSidenav}
                onSwitchToggle={() => {
                  setAnimateSidenav(false);
                  setOpenSidenav(false);
                }}
              />
            </div>
            <div className="flex items-center justify-between py-3">
              <Typography variant="h5">Default</Typography>
              <Switch
                aria-label="Default Sidebar"
                id="default-sidebar"
                checked={animateSidenav}
                className={`${
                  animateSidenav ? "" : "hover:bg-secondary hover:bg-opacity-20"
                }`}
                onSwitchToggle={() => {
                  setAnimateSidenav(true);
                  setOpenSidenav(false);
                }}
              />
            </div>
            <div className="h-[1px] bg-neutral-200 dark:bg-neutral-600" />
            <div className="my-8 flex flex-col gap-4">
              <a
                href="https://www.creative-tim.com/product/material-tailwind-dashboard-react?rel=mtdr"
                aria-label="Free Download"
                target="_black"
              >
                <Button variant="default" size="default" className="w-full">
                  Free Download
                </Button>
              </a>
              {/* <a
              href="https://www.material-tailwind.com/docs/react/installation?rel=mtdr"
              target="_black"
              aria-label="View Documentation"
            >
              <Button variant="default" size="default" className="w-full">
                View Documentation
              </Button>
            </a> */}
              {/* <a
              href="https://www.material-tailwind.com/blocks/react?rel=mtdr"
              target="_black"
              aria-label="Go Pro"
            >
              <Button variant="outline" size="default" className="w-full">
                Material Tailwind PRO
              </Button>
            </a> */}
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <AnimatedTooltip
              items={themesTypeData}
              className="-top-12 -left-1/2 -translate-x-[15%] "
            />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Configurator;
