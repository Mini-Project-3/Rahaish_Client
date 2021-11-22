import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}
const DropDown: FC<Props> = (props) => {
    return (
        <div className="border-2 border-gray-200 rounded w-36 shadow-lg">
            <Link to="/wishlist" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Settings</Link>
            <button className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" onClick={() => { window.location.href = "/editProfile" }}>Mail</button>
            <button className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" onClick={() => { window.location.href = "/editProfile" }}>Print</button>
            <button className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" onClick={() => { window.location.href = "/editProfile" }}>Download</button>
            <button className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" onClick={() => { window.location.href = "/editProfile" }}>Share</button>
        </div>

    );
};
DropDown.defaultProps = {
}
export default memo(DropDown);