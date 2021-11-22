import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}
const DropDown: FC<Props> = (props) => {
    return (
        <div className="border-2 border-gray-200 rounded w-36 shadow-lg h-36  ">
            
        </div>
    );
};
DropDown.defaultProps = {
}
export default memo(DropDown);