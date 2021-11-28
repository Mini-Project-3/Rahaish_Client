import { FC, memo } from "react";
import Button from "./Button";
interface Props {
}
const Seachbar: FC<Props> = (props) => {
    return (

        <div className="w-full bg-gray-300 flex justify-center items-center">
            <div className="container mx-auto bg-purple-200 rounded-lg p-4 md:p-14">
                <form>
                    <h1 className="text-center font-bold text-purple-900 text-xl sm:text-3xl md:text-4xl pb-8">Welcome back, continue your home search</h1>
                    <div className=" mx-auto sm:flex items-center bg-white rounded-lg overflow-hidden px-2 md:py-1 justify-between">
                        <input className="text-base text-gray-400 flex-grow outline-none px-6 py-4 sm:py-1 sm:px-2 " type="text" placeholder="Search here" />
                        <div className="flex items-center px-2  space-x-2 sm:space-x-4 mx-auto">
                            <select className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg ">
                                <option value="location" selected>Location</option>
                                <option value="name">Name</option>
                                <option value="owner">Owner</option>
                            </select>
                            <Button children="Search" theme="primary"></Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};
Seachbar.defaultProps = {
}
export default memo(Seachbar);