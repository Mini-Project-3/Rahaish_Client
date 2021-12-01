import { FC, memo } from "react";
interface Props {
}
const Error404: FC<Props> = (props) => {
    return (
        <div>
            <div className="bg-purple-500 sm:p-15 p-10 ">
                <div className="bg-purple-50 border-2 rounded-3xl hover:shadow-2xl  ">
                    <div className=" lg:flex md:justify-center md:space-x-6 p-6 space-y-6 lg:space-y-0  ">
                        <div className="  font-serif flex-col text-center lg:text-justify ">
                            <h1 className="font-semibold sm:text-5xl text-2xl mx-auto">Oooops !</h1>
                            <p className="sm:text-base text-sm pt-4  ">We can't seem to find a page </p>
                            <p className=" sm:text-base text-sm  pb-5 ">you are looking for</p>
                            <div className=" flex space-x-2 justify-center">
                            <button className="border-0 bg-purple-500 rounded-full text-white h-10 w-36 hover:bg-green-700">
                                <h1 className=" sm:text-base text-xs ">Back to home</h1>
                            </button>
                            <button className="border-0 rounded-full bg-purple-500 text-white h-10 w-36  hover:bg-green-700 ">
                                <h1 className="sm:text-base text-xs">Contact Us</h1>
                            </button>
                            </div>
                        </div>
                        <div className="  ">
                            <img className=" shadow-2xl border-2 border-purple-500 sm:h-96  w-full  " src="https://image.shutterstock.com/image-vector/error-404-page-not-found-260nw-1370848016.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Error404.defaultProps = {
}
export default memo(Error404);
export { };