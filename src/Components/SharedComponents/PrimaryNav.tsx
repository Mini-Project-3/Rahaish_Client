import { FC, memo, useState } from "react";
import DropDown from "../OtherComponents/DropDown";
import LOGO from "../../images/Logo.png"
import DropdownPro from "../OtherComponents/DropdownPro";
interface Props {
}
const PrimaryNav: FC<Props> = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    return (
        <div className="sticky top-0 z-10 ">
            <div className="flex justify-between p-2 bg-primary  sm:pl-10 sm:pr-10">
                <button className="flex ">
                    <img className="h-10" src={LOGO} alt="" />
                    <h1 className="text-2xl font-semibold text-white pl-4">Rahaish</h1>
                </button>
                <div>
                    <button onClick={() => setIsOpen1(!isOpen1)} className="pt-2">
                        <img className="border-0 rounded h-7 w-7 cursor-pointer " src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/07/Cool-Boys-Girls-Stylish-Dp-1.jpg" alt="" />
                    </button>
                    <div className="absolute mt-14 -ml-28 z-50">{isOpen1 && <DropdownPro></DropdownPro>}</div>
                </div>
            </div>
        </div>
    );
};
PrimaryNav.defaultProps = {
}
export default memo(PrimaryNav);
export { };