import { FC, memo } from "react";
import Seachbar from "../SharedComponents/Seachbar";
interface Props {
    theme?: "bg-wel" | "bg-dash" | "bg-plot" | "bg-flat" | "bg-property"
}
const WelcomeHeader: FC<Props> = (props) => {
    return (
        <div>
            <div className={`w-full bg-cover bg-center h-96 ${props.theme}`}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="w-10/12">
                        <Seachbar></Seachbar>
                    </div>
                </div>
            </div>
        </div>
    );
};
WelcomeHeader.defaultProps = {
}
export default memo(WelcomeHeader);