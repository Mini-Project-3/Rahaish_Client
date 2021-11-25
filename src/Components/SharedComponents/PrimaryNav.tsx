import { FC, memo, useState } from "react";
import DropDown from "../DashboardComponents/DropDown";
import DropdownPro from "../DashboardComponents/DropdownPro";
interface Props {
}
const PrimaryNav: FC<Props> = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    return (
        <div className="sticky top-0 z-40 ">
            <div className="flex justify-between bg-gray-900 p-2 sm:pl-10 sm:pr-10">
                <button className="flex ">
                    <img className="h-10 " src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg" alt="" />
                    <h1 className="text-2xl font-semibold text-white">Rahaish</h1>
                </button>
                <div className="p-2">
                    <button onClick={() => setIsOpen1(!isOpen1)}>
                        <img className="border-0 rounded h-7 w-7 cursor-pointer " src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/07/Cool-Boys-Girls-Stylish-Dp-1.jpg" alt="" />
                    </button>
                    <div className="absolute mt-5 -ml-28 z-50">{isOpen1 && <DropdownPro></DropdownPro>}</div>
                </div>
            </div>
        </div>
    );
};
PrimaryNav.defaultProps = {
}
export default memo(PrimaryNav);
export { };