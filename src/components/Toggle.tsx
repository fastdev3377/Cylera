import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

interface ToggleProps {
  state: boolean;
  callback: (enabled: boolean) => void;
}

export default function Toggle({ state, callback }: ToggleProps) {
  const [enabled, setEnabled] = useState(state);

  useEffect(() => {
    callback(enabled);
  }, [enabled, callback]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-light-blue" : "bg-gray-500"}
relative inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-4" : "translate-x-0"}
absolute pointer-events-none inline-block top-[-4px] left-[-4px] h-[24px] w-[24px] transform rounded-full bg-white drop-shadow-md grayscale-0 ring-0 transition duration-200 ease-in-out `}
      />
    </Switch>
  );
}
