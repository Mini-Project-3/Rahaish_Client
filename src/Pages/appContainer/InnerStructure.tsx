import { FC, memo } from "react";
import ContactOwnerForm from "../../Components/FlatInfoComponent/ContactOwnerForm";
import Sections from "../../Components/FlatInfoComponent/Sections";
import SectionsNav from "../../Components/FlatInfoComponent/SectionsNav";
import TitleAndInfo from "../../Components/FlatInfoComponent/TitleAndInfo";
interface Props {
}
const InnerStructure: FC<Props> = (props) => {
  return (
    <div className="p-3 w-full " >
      <TitleAndInfo></TitleAndInfo>
      <div className=" md:sticky  bg-white z-20 top-0 absolute invisible md:visible  "><SectionsNav></SectionsNav></div>
      <div className=" flex">
        <div className=" w-full md:w-4/5 "><Sections></Sections></div>
        <div className=" md:w-3/5 top-0 absolute invisible md:visible md:sticky "><ContactOwnerForm></ContactOwnerForm></div>
      </div>
    </div >
  );
};
InnerStructure.defaultProps = {
}
export default memo(InnerStructure);