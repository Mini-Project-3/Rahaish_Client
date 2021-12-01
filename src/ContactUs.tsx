import {FC, memo} from "react";
interface Props{
}
const ContactUs: FC<Props> = (props) =>{
return (
 <div>
<div className="bg-red-600 h-20 shadow-md">
                <h1 className="font-extralight text-white text-center p-6 sm:text-3xl  text-xl">Joy is just a click away</h1>
            </div>
            <h1 className=" text-gray-700 sm:text-3xl text-lg text-center pt-14 ">Let's get started</h1>
            <div className="  ">
            <div className=" flex justify-center space-x-20 ">
            <div className="border-b border-teal-500 py-4 pt-6 w-1/4 hover:border-red-600 ">
    <input className=" hover: animate-pulse appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Full name"/>
    </div>
            <div className="border-b border-teal-500 py-4 pt-6 w-1/4 hover:border-red-600 ">
    <input className=" hover: animate-pulse appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="Email"/>
    </div>
    </div>
    <div className=" flex justify-center space-x-20 ">
    <div className="border-b border-teal-500 py-4 pt-6 w-1/4 hover:border-red-600 ">
    <input className=" hover: animate-pulse appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="tel" placeholder="Mobile" aria-label="Mobile"/>
    </div>
    <div className="border-b border-teal-500 py-4 pt-6 w-1/4 hover:border-red-600">
    <input className=" hover: animate-pulse appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="City" aria-label="Full name"/>
    </div>
    </div>
    <div className=" flex space-x-20 justify-center ">
    <div className="border-b border-teal-500 py-4 pt-6 w-1/4  hover:border-red-600 ">
    <input className=" hover: animate-pulse appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Subject" aria-label="Full name"/>
    </div>
    <div className="border-b border-teal-500 py-4 pt-6 w-1/4 hover:border-red-600 content-center  ">
    <input className=" hover: animate-pulse appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  type="text" placeholder="Message" aria-label="Full name"/>
    </div>
    </div>
    </div>
    <div className=" pt-12 pb-8 text-center">
    <button className=" border-0 bg-red-600 w-1/4 h-12 rounded-md hover:bg-blue-900  ">
        <h1 className=" font-semibold text-white text-center">submit</h1>
    </button>
    </div>


 </div>
);
};
ContactUs.defaultProps={
}
export default memo(ContactUs);
export{};