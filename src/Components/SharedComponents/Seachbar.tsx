import { FC, memo } from "react";
import Button from "./Button";
interface Props {
}
const Seachbar: FC<Props> = (props) => {
    function a() {
        alert("Please Login/Signup first");
    }
    return (

        <div className="w-full bg-gray-300 flex justify-center items-center">
            <div className="container mx-auto bg-purple-200 rounded-lg p-4 md:p-14">
                <form>
                    <h1 className="text-center font-bold text-purple-900 text-xl sm:text-3xl md:text-4xl pb-8">Welcome back, continue your home search</h1>
                    <div className="flex bg-white rounded-lg overflow-hidden px-2 md:py-1 justify-between w-auto">
                        <input className="text-base text-gray-400 outline-none px-4 py-2 sm:px-2 " type="text" placeholder="Search here" />
                        <button onClick={() => a()}><Button children="Search" theme="primary" size="large"></Button></button>
                    </div>
                </form>
            </div>
        </div>

    );
};
Seachbar.defaultProps = {
}
export default memo(Seachbar);