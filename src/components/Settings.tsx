import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { themes } from "../utils/themes";
import Toggle from "./Toggle";
import ThemeContext from "../context/theme-context";
import { THEME_ACTIONS } from "../reducers/themes";
import { THEME_TYPE } from "../utils/themes";

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (toggleState: boolean) => {
    setTheme({
      type: toggleState ? THEME_ACTIONS.DARK_MODE : THEME_ACTIONS.LIGHT_MODE,
    });
  };

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`inline-flex w-10 h-10 justify-center items-center rounded-md shadow-md shadow-slate-200 dark:shadow-none px-3 py-3 hover:bg-opacity-30 active:bg-light-blue ${
              (themes as any)[theme.mode].backgroundLevel1
            }`}
          >
            <Cog8ToothIcon
              className="active:text-white text-light-blue dark:text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute right-0 mt-2 w-60 origin-top-right divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              (themes as any)[theme.mode].backgroundLevel2
            }`}
          >
            <div className="px-1 py-1">
              <Menu.Item>
                {() => (
                  <div className="px-3 py-3 text-gray-500 flex justify-between border-b-2 border-gray-200 dark:border-gray-600">
                    Light / Dark Theme
                    <Toggle
                      callback={handleThemeChange}
                      state={theme.mode === THEME_TYPE.DARK}
                    />
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button className="px-3 py-3 group text-gray-500">
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
