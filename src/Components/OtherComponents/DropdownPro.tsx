import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const DropdownPro: FC<Props> = (props) => {
    return (
        <div className="border-2 border-gray-200 rounded w-36 shadow-lg absolute bg-gray-200 z-40">
            <Link to="/profile" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >My Profile</Link>
            <Link to="/wishlist" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Wishlist</Link>
            <Link to="/dashboard" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Logout</Link>
        </div>
    );
};
DropdownPro.defaultProps = {
}
export default memo(DropdownPro);