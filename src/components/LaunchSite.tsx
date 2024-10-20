import { Popover } from "@headlessui/react";
import { ChevronDownIcon, BuildingOfficeIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import ThemeContext from "../context/theme-context";
import { themes } from "../utils/themes";

const LaunchSite = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Popover className="relative ml-2">
      {() => (
        <>
          <Popover.Button
            className={`group inline-flex items-center rounded-md px-3 py-2 text-base text-light-blue dark:text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
             ${(themes as any)[theme.mode].backgroundLevel1}`}
          >
            <BuildingOfficeIcon
              className={`ml-1 mr-2 h-5 w-5 transition duration-150 ease-in-out`}
              aria-hidden="true"
            />
            <span>Launch Site</span>
            <ChevronDownIcon
              className={`ml-20 h-5 w-5 transition duration-150 ease-in-out`}
              aria-hidden="true"
            />
          </Popover.Button>
        </>
      )}
    </Popover>
  );
};

export default LaunchSite;
