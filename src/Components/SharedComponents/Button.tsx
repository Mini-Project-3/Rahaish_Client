import { FC, memo } from "react";
interface Props {
    children: string,
    theme?: "primary" | "secondary";
}
const Button: FC<Props> = (props) => {

    const themeClasses = (props.theme === "primary") ? "text-white bg-primary" : "text-black bg-secondary";

    return (
        <div>

            <button className={`flex justify-center py-2 px-4 text-sm font-medium rounded-md ${themeClasses}`}>
                {props.children}
            </button>

        </div>
    );
};
Button.defaultProps = {
}
export default memo(Button);