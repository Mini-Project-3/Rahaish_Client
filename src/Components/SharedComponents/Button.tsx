import { FC, memo } from "react";
interface Props {
    children: string,
    theme?: "primary" | "secondary";
    size?: "small" | "large";
}
const Button: FC<Props> = (props) => {

    const themeClasses = (props.theme === "primary") ? "text-white bg-primary" : "text-black bg-secondary";
    const sizeClasses = (props.size === "small") ? "px-2" : "px-4";

    return (
        <div>

            <button className={`flex justify-center py-2 text-sm font-medium rounded-md ${themeClasses} ${sizeClasses}`}>
                {props.children}
            </button>

        </div>
    );
};
Button.defaultProps = {
}
export default memo(Button);