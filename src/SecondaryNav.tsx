import { FC, memo, useState } from "react";

interface Props {
}
const SecondaryNav: FC<Props> = (props) => {
    const [isOpen , setIsOpen]=useState(false);
    return (
        <>
            <div className="h-12 bg-gray-100 flex justify-between px-7 items-center">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <p className="text-gray-500 ml-8">Dashboard</p>
                </div>

                <div className="">
                        <div>
                        <button onClick={() => setIsOpen(!isOpen)} className="flex space-x-2 text-gray-800  border-2 py-1  px-3 ml-5 rounded shadow bg-white"><h1 className="text-sm">Settings</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div className=" absolute mt-2">{isOpen && <DropDownRahaish></DropDownRahaish>}</div>
                        </div>
                    

                    {/* <div className="origin-top-right absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none mr-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" role="menuitem" id="menu-item-0">Settings</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" role="menuitem" id="menu-item-1">Mail</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" role="menuitem" id="menu-item-2">Print</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" role="menuitem" id="menu-item-2">Download</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" role="menuitem" id="menu-item-2">Share</a>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    );
};
SecondaryNav.defaultProps = {
}
export default memo(SecondaryNav);


