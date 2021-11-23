import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}
const DropDown: FC<Props> = (props) => {
    return (
        <div className="border-2 border-gray-200 rounded w-36 shadow-lg bg-gray-200">
            <Link to="/uploadflat" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Upload Flat</Link>
            <Link to="/uploadhouse" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Upload House</Link>
            <Link to="/uploadplot" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Upload Plot</Link>
            <Link to="/login" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >Logout</Link>
        </div>
    );
};
DropDown.defaultProps = {
}
export default memo(DropDown);