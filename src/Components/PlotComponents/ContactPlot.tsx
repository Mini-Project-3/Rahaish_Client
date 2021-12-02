import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { LS_AUTH_TOKEN, BASE_URL } from "../../Constants/constants";
interface Props {
    contact: string
    plot_id: number;
}
const ContactPlot: FC<Props> = (props) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    console.log("Token ", token)
    const [plotResponse, setResponse] = useState<any>();


    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL + "/house-creator";
            try {
                const plotResponse = await axios.get(url, { headers: { 'Content-Type': 'application/json', 'Authorization': token! }, params: { plot_id: props.plot_id } });
                setResponse(plotResponse.data)
            } catch (error) {
                console.log("Not able to fetch data")
            }
        }
        fetchData();

    }, [])
    return (
        <div className=" md:sticky top-32 bg-gray-100">
            <div className="md:px-20 py-4 invisible md:visible absolute md:relative ">
                <div className="p-5 w-full max-w-lg border-0 rounded-lg shadow-lg bg-white  ">
                    <div className="pb-5  w-full items-center">
                        <div className=" flex space-x-2  border-2 rounded-md border-yellow-600 bg-yellow-50 w-full p-2 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 items-center text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                            </svg>
                            <h1 className="items-center text-sm text-black">Great choice!Better price property in this area </h1>
                        </div>
                    </div>
                    <div className="border-2  w-full  h-96 rounded-lg p-6 shadow-2xl pt-2 ">
                        <h1 className="text-2xl ">Contact Owner</h1>
                        <div className="flex space-x-7 pt-3">
                            <img className="rounded-full h-12 w-12" src="https://image.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg" alt="" />
                            <div>
                                <h1 className="font-semibold text-gray-800">{plotResponse?.firstName} {plotResponse?.lastName}</h1>
                                <p className="text-gray-500">Owner</p>
                                <p className="font-bold">+91 {props.contact}</p>
                            </div>
                        </div>
                        <h1 className="font-bold pt-5 text-base">Please share your contact</h1>
                        <form className="w-full max-w-sm">
                            <div className="border-b border-teal-500 py-4 pt-6">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Full name" />
                            </div>
                            <div className="border-b border-teal-500 py-2 pt-5">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="tel" placeholder="Phone" aria-label="Full number" />
                            </div>
                            <div className="border-b border-teal-500 py-2 pt-5">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="Full id" />
                            </div>
                        </form>
                    </div>
                    <div className="flex space-x-1 pt-6 pb-2 ">
                        <input className="font-bold mt-1 bg-purple" type="checkbox" name="" id="" />
                        <div className="">
                            <p className="font-semibold font-serif sm:text-sm text-xs ">I agree to be contacted by Housing and other owner via WhatsApp , SMS , phone , email etc</p>
                        </div>
                    </div>
                    <button className="border-0 border-purple bg-purple h-14 w-full hover:bg-indigo-800 ">
                        <p className="text-white">Get Contact Details</p>
                    </button>
                </div>


            </div>
        </div>
    );
};
ContactPlot.defaultProps = {
}
export default memo(ContactPlot);
export { };