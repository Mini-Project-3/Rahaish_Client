import { FC, memo, useState } from "react";
import DropDown from "../OtherComponents/DropDown";
import LOGO from "../../images/Logo.png"
import DropdownPro from "../OtherComponents/DropdownPro";
import { Link } from "react-router-dom";
interface Props {
}
const PrimaryNav: FC<Props> = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    return (
        <div className="sticky top-0 z-10 ">
            <div className="flex justify-between p-2 bg-gray-900  sm:pl-10 sm:pr-10">
                <button className="flex ">
                    <img className="h-10" src={LOGO} alt="" />
                    <h1 className="text-2xl font-semibold text-white pl-4">Rahaish</h1>
                </button>
                <div className="">
                    <Link to="/wishlist"><button className="text-gray-100 font-bold pb-4 pr-8 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    </Link>
                    <button onClick={() => setIsOpen1(!isOpen1)} className="pt-2">
                        <img className="border-0 rounded h-7 w-7 cursor-pointer " src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/07/Cool-Boys-Girls-Stylish-Dp-1.jpg" alt="" />
                    </button>
                    <div className="absolute mt-14 -ml-14 z-50">{isOpen1 && <DropdownPro></DropdownPro>}</div>
                </div>
            </div>
        </div>
    );
};
PrimaryNav.defaultProps = {
}
export default memo(PrimaryNav);
export { };