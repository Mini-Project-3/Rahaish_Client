import { FC, memo, useState } from "react";
import DropDown from "../DashboardComponents/DropDown";

interface Props {
}
const SecondaryNav: FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="h-12 z-10 bg-gray-100 flex sticky top-14 justify-between px-7 items-center">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </div>

            <div className="">
                <div>
                    <button onClick={() => setIsOpen(!isOpen)} className="flex space-x-2 text-gray-800  border-2 py-1  px-3 ml-5 rounded shadow bg-white"><h1 className="text-sm">UPLOAD</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div className="absolute mt-2 z-10">{isOpen && <DropDown></DropDown>}</div>
                </div>
            </div>
        </div>
    );
};
SecondaryNav.defaultProps = {
}
export default memo(SecondaryNav);


