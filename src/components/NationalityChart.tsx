import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";
import { themes } from "../utils/themes";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

const NationalityCount = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div
          className={`${
            (themes as any)[theme.mode].backgroundLevel1
          } px-6 py-4 rounded-t-lg mb-1`}
        >
          <h1 className={`text-2xl dark:text-white flex items-center`}>
            Payload Count By Nationality
            <QuestionMarkCircleIcon className="w-5 h-5 ml-2" />
          </h1>
        </div>
        <div
          className={`${
            (themes as any)[theme.mode].backgroundLevel1
          } px-6 py-4 rounded-t-lg mb-2`}
        ></div>
      </div>
    </div>
  );
};

export default NationalityCount;
