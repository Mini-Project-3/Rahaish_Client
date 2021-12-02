import { FC, memo } from "react";
import Button from "../SharedComponents/Button";
interface Props {
    propertyName: string,
    price: string,
    image?: string,
    address: string,
    city: string,
    contact?: string,
    area: number,
    length: number,
    width: number,
    status: string,
    openFaces: string,
    description: string,
}
const PlotCard: FC<Props> = (props) => {
    return (
        <div className="px-5 pb-5 cursor-pointer">
            <div className=" p-5 hover:shadow-md border border-gray-700">
                <div className=" flex  flex-col md:flex-row">
                    <div className="  md:w-1/3">
                        <img className=" h-60 w-full" src="https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I=" alt="" />
                    </div>
                    <div className=" md:w-2/3 sm:pl-4 items-center mx-auto pt-4 md:pt-0">
                        <h1 className=" font-bold text-lg">{props.propertyName}</h1>
                        <h2 className=" text-gray-700 text-base font-normal">{props.address}, {props.city}</h2>
                        <div className=" flex justify-between pt-2 pb-2 border-t-2 border-b-2 border-gray-200">
                            <div className=" ">
                                <h1 className=" text-lg font-semibold">&#8377; {props.price}</h1>
                                <p className=" text-gray-600">21 k/sqft</p>
                            </div>
                            <div className=" ">
                                <h1 className=" text-lg font-semibold">{props.area}</h1>
                                <p className=" text-gray-600">Area in sq.ft</p>
                            </div>
                            <div className=" ">
                                <h1 className=" text-lg font-semibold">{props.status}</h1>
                                <p className=" text-gray-600">Construction status</p>
                            </div>
                            <div className=" items-center text-purple"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg></div>
                        </div>
                        <div className=" pt-3 font-semibold pb-3 "> <span className="p-1 sm:p-3 sm:pl-0 pl-0"> Length * Width = {props.length} * {props.width} </span>   |   <span className="p-1 sm:p-3">{props.openFaces} Open Faces</span></div>
                        <div className="w-full h-16 overflow-auto">
                            <p className=" text-gray-600 text-sm">{props.description}</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col sm:flex-row  justify-between pt-2">
                    <div className="flex pb-3 sm:pb-0">
                        <div className="w-12 h-12">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9A3s6FOJk-erF1D65VQx_NWjX2AEuxN7kSw&usqp=CAU" alt="" />
                        </div>
                        <div className="pl-2">
                            <h1 className=" font-semibold ">Mitali Varshney</h1>
                            <div className="text-white bg-green-500 text-sm rounded-sm">VERIFIED OWNER</div>
                        </div>
                    </div>
                    <div className="flex space-x-3 sm:space-x-5">
                        <button className="text-red-500 pb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <Button children="View Phone" theme="secondary"></Button>
                        <Button children="Connect Now" theme="primary"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
PlotCard.defaultProps = {
}
export default memo(PlotCard);