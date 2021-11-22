import { FC, memo } from "react";
import { GiBed } from "react-icons/gi"
import { FaBath, FaTrello } from "react-icons/fa"
interface Props {
    propertyName: string,
    image?: string,
    location: string,
    price: string,
    type: string,
    bed: number,
    bath: number,
    area: number
}
const WishlistCard: FC<Props> = (props) => {
    return (
        <div>
            <div className="max-w-sm border border-primary rounded-md px-6 pt-6 pb-2 shadow-lg transform hover:scale-105 transition duration-500">
                <div className="relative">
                    <img className="w-full h-80 rounded-sm" src="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg" alt="Colors" />
                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{props.type}</p>
                    <p className="absolute bottom-8 left-5 bg-primary text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">RS {props.price}</p>
                </div>
                <h1 className="mt-4 text-gray-800 text-2xl font-semibold cursor-pointer">{props.propertyName}</h1>
                <h2 className="text-sm font-bold text-gray-500 mt-2 cursor-pointer">{props.location}</h2>
                <div className="my-4 space-x-6 flex">
                    <div className="flex space-x-1 items-center">
                        <GiBed></GiBed>
                        <p>{props.bed} Bed</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <FaBath></FaBath>
                        <p>{props.bath} Bath</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <FaTrello></FaTrello>
                        <p>{props.area} sqft</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
WishlistCard.defaultProps = {
}
export default memo(WishlistCard);