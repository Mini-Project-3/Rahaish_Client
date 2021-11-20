import { FC, memo } from "react";
import {Link} from "react-router-dom";

interface Props {
}
const DropDown: FC<Props> = (props) => {
    return (
        <div className="border-2 border-gray-200 rounded w-36 shadow-lg">
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" to="/editProfile">Settings</Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" to="/editProfile">Mail</Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" to="/editProfile">Print</Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" to="/editProfile">Download</Link>
            <Link className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" to="/editProfile">Share</Link>
            {/* <button className=" text-lg font-semibold hover:bg-white text-gray-800 border-0 p-2 rounded-md" onClick={
                () => {

                    // window.location.href = "/login";
                }
            }>Logout</button> */}



        </div>


        // <div className="origin-top-right absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none mr-5" >
        //                 <div className="py-1" role="none">
        //                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" id="menu-item-0">Settings</a>
        //                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" id="menu-item-1">Mail</a>
        //                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" id="menu-item-2">Print</a>
        //                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" id="menu-item-2">Download</a>
        //                     <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" id="menu-item-2">Share</a>
        //                 </div>
        //             </div>
    );
};
DropDown.defaultProps = {
}
export default memo(DropDown);