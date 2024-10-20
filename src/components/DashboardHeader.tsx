import Settings from "./Settings";
import LaunchSite from "./LaunchSite";

export interface DashboardHeaderProps {
  header: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  header,
}: DashboardHeaderProps) => {
  return (
    <header className="flex py-11 justify-between items-center">
      <h1 className="font-bold text-2xl dark:text-white">{header}</h1>
      <div className="flex">
        <Settings />
        <LaunchSite />
      </div>
    </header>
  );
};

export default DashboardHeader;
