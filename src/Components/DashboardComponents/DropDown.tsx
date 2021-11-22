import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}
const DropDown: FC<Props> = (props) => {
    return (
        <div className="border-2 border-gray-200 rounded w-36 shadow-lg">
            <Link to="/wishlist" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Settings</Link>
            <Link to="/myprofile" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >My Profile</Link>
            <Link to="/uploadproperty" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Upload Property</Link>
            <Link to="/login" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Logout</Link>
        </div>

    );
};
DropDown.defaultProps = {
}
export default memo(DropDown);