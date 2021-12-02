import { FC, memo } from "react";
import Map from "../SharedComponents/Map"
interface Props {
    name: string,
    address: string,
    city: string,
    price: string,
    area: string,
    length: number,
    width: number,
    openFaces: number,
    description: string,
}
const PlotSection: FC<Props> = (props) => {
    return (
        <div className=" ">
            <div>
                {/* Overview Section */}

                <div className="bg-gray-100 pl-4 pr-4 md:pl-10 pt-8 w-full " >


                    <div className=" bg-white" id="overview">
                        <h1 className=" text-2xl font-bold p-4 md:p-6 border-b-2 border-gray-300">Overview</h1>
                        <div className=" flex list-none justify-between  px-4 py-2">
                            <div>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Project Name</p>
                                    <p className=" text-base font-medium cursor-pointer">{props.name}</p>
                                </li>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Price</p>
                                    <p className=" text-base font-medium">&#x20b9;{props.price} </p>
                                </li>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Rent Price</p>
                                    <p className=" text-base font-medium">&#x20b9;15000 /month </p>
                                </li>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Open Faces</p>
                                    <p className=" text-base font-medium">{props.openFaces}</p>
                                </li>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Parking</p>
                                    <p className=" text-base font-medium">No </p>
                                </li>
                            </div>
                            <div>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Brokerage</p>
                                    <p className=" text-base font-medium">No charge</p>
                                </li>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Carpet Area</p>
                                    <p className=" text-base font-medium">{props.area} sq.ft </p>
                                </li>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Length in feets</p>
                                    <p className=" text-base font-medium">{props.length} </p>
                                </li>
                                <li className=" p-5">
                                    <p className="text-gray-400 font-semibold ">Width in feets</p>
                                    <p className=" text-base font-medium">{props.width} </p>
                                </li>
                                <li className=" p-5">
                                    <p className="text-gray-400  font-semibold ">Added</p>
                                    <p className=" text-base font-medium">More than a month ago</p>
                                </li>
                            </div>
                        </div>
                        <div className=" p-5 pb-3">
                            <h1 className=" font-semibold text-2xl md:p-5 pb-2">About this Property</h1>
                            <p className="h-28 bg-gray-200 border-2 border-gray-300 rounded-sm overflow-scroll p-2 text-base  text-gray-600 font-semibold">{props.name} for sale in {props.address}, {props.city} with modern-day amenities. The plot is in {props.address} which is a promising investment destination in {props.city}. This might be your chance to grab the best plot for sale in {props.address}. The total area of the plot is {props.area}. This is available at a reasonable price of Rs {props.price}. It is a very spacious property, spread over {props.area} Square feet. An attached servant room is available with this property. This property has provision for {props.width} width and {props.length} length in feets</p>
                        </div>
                    </div>

                    {/* Furnishings */}
                    <div className="bg-gray-100 pt-6 " id="furnishing">
                        <div className="bg-white  pl-4 pr-4 md:pl-10 pt-8 ">
                            <h1 className="text-2xl font-bold p-4 md:p-6 border-b-2 border-gray-300 ">Furnishings</h1>
                            <div className=" flex flex-wrap md:flex-row">
                                <div className=" p-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <h1 className=" text-base text-gray-400 font-semibold">Servant Room</h1>
                                </div>
                                <div className=" p-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-purple " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <h1 className=" text-base text-gray-400 font-semibold">Bed, table (For rent only) </h1>
                                </div>
                                <div className=" p-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-purple " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <h1 className=" text-base text-gray-400 font-semibold">Cup board</h1>
                                </div>

                                <div className=" p-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-purple " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <h1 className=" text-base text-gray-400 font-semibold">Water Purifier</h1>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Social Amenties */}
                    <div className="bg-gray-100 pt-6 " id="amenities">
                        <div className="bg-white  pl-4 pr-4 md:pl-10 pt-8 ">
                            <h1 className="text-2xl font-bold p-4 md:p-6 border-b-2 border-gray-300 ">Social Amenities</h1>
                            <div className=" flex flex-wrap md:flex-row">
                                <div className=" p-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <h1 className=" text-base text-gray-400 font-semibold">Servant Room</h1>
                                </div>
                                <div className=" p-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-purple " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <h1 className=" text-base text-gray-400 font-semibold">Car Parking</h1>
                                </div>

                                <div className=" p-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10 text-purple " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <h1 className=" text-base text-gray-400 font-semibold">24 x 7 Security</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*Project Q&A */}
                    <div className="bg-gray-100 pt-6 " id="ques_ans">
                        <div className="bg-white   pl-4 pr-4 md:pl-10 pt-8 ">
                            <div className=" border-b-2 border-gray-300 flex justify-between items-center">
                                <h1 className="text-2xl font-bold p-4 md:p-6  ">Questions and Answers</h1>
                                <div className=""><button className=" text-lg p-2 border-2 text-purple hover:bg-purple hover:text-white border-purple-700 ">Have any Question?Ask Here...</button></div>
                            </div>
                            <p className=" p-4 pt-0 md:p-6  ">Get answers to your un-answered questions.</p>
                            <div className="">
                                <div className=" p-4 ">
                                    <h1 className=" text-base text-gray-700 font-bold">Q:Do all flats have common bathrooms?</h1>
                                    <p className=" text-base font-medium"><span className=" text-xl text-gray-700 font-bold">A:</span>  There are 1 bathroom in 2 BHK</p>
                                </div>
                                <div className=" p-4 ">
                                    <h1 className=" text-base text-gray-700 font-bold">Q:Is it a residential development alone?</h1>
                                    <p className=" text-base  font-medium"><span className=" text-xl text-gray-700 font-bold">A:</span>  Yes, this is purely a residential project</p>
                                </div>
                            </div>
                            <p className=" p-4 pt-0 md:p-6 text-gray-300 ">Disclaimer: While Rahaish takes all steps to ensure accuracy of the information provided in this section, please check the same with the developers. Rahaish does not take responsibility for any discrepancies in the information provided.</p>
                        </div>
                    </div>


                    {/*Locality */}
                    <div className="bg-gray-100 pt-6 " id="locality">
                        <div className="bg-white  pl-4 pr-4 md:pl-10 pt-8 ">

                            <h1 className="text-2xl font-bold p-4 md:p-6  border-b-2 border-gray-300  ">Locality</h1>
                            <Map address={props.address} city={props.city}></Map>
                        </div>
                    </div>

                    {/* Curated solutions */}

                    <div className="bg-gray-100 pt-6 " id="curated">
                        <div className="bg-white  pl-4 pr-4 md:pl-10 pt-8 ">

                            <h1 className="text-2xl font-bold p-4 md:p-6  border-b-2 border-gray-300  ">Curated Solutions</h1>
                            <img className=" p-2" src="https://cdn.w600.comps.canstockphoto.com/house-rent-banner-home-selection-clipart-vector_csp67176852.jpg" alt="" />
                        </div>
                    </div>

                    <div className="bg-gray-100 pt-6 ">
                        <div className="bg-white  pl-4 pr-4 md:pl-10 pt-8 ">

                            <h1 className="text-lg font-medium  ">Sell your house on Rahaish </h1>
                            <div className="flex flex-wrap md:space-x-5 pt-4">
                                <div className=" flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex text-purple" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg> <span>Free for new user</span>
                                </div>
                                <div className=" flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex text-purple" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg> <span>Get genuine leads</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};
PlotSection.defaultProps = {
}
export default memo(PlotSection);