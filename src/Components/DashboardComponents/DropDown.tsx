import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { LS_AUTH_TOKEN } from "../../Constants/constants";

interface Props {
}
const DropDown: FC<Props> = (props) => {
    return (
        <div className="border-2 border-gray-200 rounded w-36 shadow-lg bg-gray-200">
            <Link to="/uploadflat" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Upload Flat</Link>
            <Link to="/uploadhouse" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Upload House</Link>
            <Link to="/uploadplot" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Upload Plot</Link>
            <button className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" onClick={() => {
                localStorage.removeItem(LS_AUTH_TOKEN);
                window.location.href = "/login";
            }} >Logout</button>
        </div>
    );
};
DropDown.defaultProps = {
}
export default memo(DropDown);