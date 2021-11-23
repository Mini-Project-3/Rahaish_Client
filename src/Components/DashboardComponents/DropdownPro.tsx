import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const DropdownPro: FC<Props> = (props) => {
    return (
        <div className="border-2 border-gray-200 rounded w-36 shadow-lg bg-gray-200">
            <Link to="/myprofile" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >myprofile</Link>
            <Link to="/login" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >xyzabc</Link>
            <Link to="/login" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >xyzabc</Link>
            <Link to="/login" className="text-gray-700 block px-4 py-2 text-sm hover:text-blue-600 hover:bg-gray-100" >xyzabc</Link>
        </div>
    );
};
DropdownPro.defaultProps = {
}
export default memo(DropdownPro);