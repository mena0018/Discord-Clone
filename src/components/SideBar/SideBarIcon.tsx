import { ReactElement } from "react";

type SideBarIconProps = {
  icon: ReactElement;
  text?: string;
};

const SideBarIcon = ({ icon, text = "Tooltip 💡" }: SideBarIconProps) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBarIcon;
