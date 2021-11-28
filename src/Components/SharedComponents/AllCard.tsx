import { FC, memo } from "react";
import Button from "./Button";
interface Props {
    propertyName: string,
    image?: string,
    location?: string,
    type?: string
    price?: string,
    status?: string,
    bath?: number,
    area?: number,
    description?: string,
    facing?: string
}
const AllCard: FC<Props> = (props) => {
    return (
        <div className="p-5 w-full cursor-pointer">
            <div className="lg:flex justify-center py-2 px-2 border-2 border-gray-300 hover:shadow-2xl">

                <div className="lg:pl-0 w-1/2 ">
                    <div className="">
                        <img className="" src={props.image} alt="" />
                    </div>
                    <div className="flex mt-5" >

                        <div className="mt-2.5 ml-4">
                            <div className="text-xl font-bold">{props.propertyName}</div>
                            <div><p className="text-xs">AGENT</p></div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="lg:pl-8 pt-4 pb-4">
                        <p className="text-gray-600"><span className="text-black font-semibold">3 BHK Villa</span> in Omaxe Eternity</p>
                        <p className="text-gray-600">{props.location}</p>
                    </div>
                    <hr className="ml-5" />
                    <div className=" md:flex lg:pl-8 py-4 justify-between">
                        <div>
                            <div className="flex">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="font-semibold ">{props.price}</p>
                                </div>
                            </div>
                            <p className="text-base text-gray-600">3,672 / sq ft</p></div>


                        <div><p className="font-semibold">{props.area}</p>
                            <p className="text-base text-gray-600">Area in sq ft</p></div>
                        <div><p className="font-semibold">{props.status}</p>
                            <p className="text-base text-gray-600">Construction Status</p></div>
                        {/* <div><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                            </svg></div> */}
                    </div>

                    <hr className="ml-5" />

                    <div className="min-w-3/4 lg:pl-8 pt-4 pb-4">
                        <p >{props.bath} Bathrooms | New | {props.facing}</p>
                        <p className="text-gray-600">{props.description}<span className="text-red-700">MORE</span></p>

                    </div>

                    <div className="lg:flex lg:pl-8 justify-between items-center pt-4 pb-4">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-gray-600 ml-5 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                        <div className="flex p-3 items-center space-x-5">
                            <Button children="View Phone" theme="secondary"></Button>
                            <Button children="Contact Now" theme="primary"></Button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};
AllCard.defaultProps = {
}
export default memo(AllCard);