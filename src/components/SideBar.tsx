import {
  BsPlus,
  BsFillLightningFill,
  BsPatchQuestionFill,
} from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SideBarIcon from "./SideBarIcon";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 h-screen w-16 m-0 
                 flex flex-col
                bg-gray-800 text-white shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />

      <p className="w-4/5 bg-gray-700 h-0.5 mx-auto my-2 rounded-md"></p>

      <SideBarIcon icon={<BsPatchQuestionFill size="20" />} />
    </div>
  );
};

export default SideBar;
