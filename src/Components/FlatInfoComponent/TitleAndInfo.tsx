import { FC, memo } from "react";
interface Props {
}
const TitleAndInfo: FC<Props> = (props) => {
    return (
        <div className=" ">
            <div className=" flex flex-col sm:flex-row justify-between items-center pb-5">
                <div>
                    <div className=" flex md:space-x-2 items-center">
                        <h1 className=" text-3xl font-medium pr-4">2 BHK Apartment </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 font-light text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </div>
                    <p className=" text-lg text-gray-400 font-medium">Shivasha Heights, Girdharpur, Mathura</p>
                </div>
                <div className=" pt-6  text-center">
                    <p> <span className=" text-3xl font-bold p-1 ">₹14.0 L</span> <span className=" text-base text-purple font-medium">  EMI starts at ₹7.41 K </span></p>
                    <p className=" text-gray-400 font-medium p-1 text-base"> ₹1.87 K/sq.ft</p>
                    <button className="px-3 py-3 bg-greenHousing">Contact Seller</button>
                </div>
            </div>
            <div className="bg-gray-400 md:p-7">
                <img className="h-2/5 w-1/2" src="https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?k=20&m=1182454657&s=612x612&w=0&h=1xEsm7BqeicA8jYk9KlerUtGsAgzzo530l5Ak1HJdnc=" alt="" />
            </div>
            <div className=" flex flex-col md:flex-row  md:justify-between px-20 py-10 text-center justify-center">
                <div className=" md:border-r-2 md:border-gray-300  p-2 md:p-5">
                    <h1 className=" text-base ">750 sq.ft</h1>
                    <p className="text-lg font-medium">Build Up Area</p>
                </div>
                <div className=" md:border-r-2 md:border-gray-300  p-2 md:p-5">
                    <h1 className=" text-base flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-7 text-purple" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z" clip-rule="evenodd" />
                    </svg>1.87 K/sq.ft</h1>
                    <p className="text-lg font-medium">Avg. Price</p>
                </div>
                <div className=" md:border-r-2 md:border-gray-300  p-2 md:p-5">
                    <h1 className=" text-base flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-7 text-purple" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z" clip-rule="evenodd" />
                    </svg>15000/month</h1>
                    <p className="text-lg font-medium">Rent Price</p>
                </div>
                <div className=" md:border-r-2 border-gray-300  p-2 md:p-5">
                    <h1 className=" text-base ">Ready to move in</h1>
                    <p className="text-lg  font-medium">Possession status</p>
                </div>
                <div className="  p-2 md:p-5">
                    <h1 className=" text-base ">North-East</h1>
                    <p className="text-lg font-medium">Facing</p>
                </div>
            </div>
        </div>
    );
};
TitleAndInfo.defaultProps = {
}
export default memo(TitleAndInfo);