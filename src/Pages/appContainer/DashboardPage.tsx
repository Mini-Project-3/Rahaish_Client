import { FC, memo, useEffect, useState } from "react";
import Footer from "../../Components/SharedComponents/Footer";
import BouncerCard from "../../Components/OtherComponents/BouncerCard";
import WishlistCard from "../../Components/OtherComponents/WishlistCard";
interface Props {
}

const DashboardPage: FC<Props> = (props) => {

    return (
        <div className="w-full">

            <div className="  sm:h-96 pb-5 font-serif ">
                <div className="text-center p-4  pt-14 text-lg text-yellow" >
                    <p>WELCOME TO RAHAISH</p>
                </div>
                <div className="text-center text-3xl font-serif">
                    <p>A New Vision Of Luxury Property</p>
                </div>
                <div className="flex justify-center ">
                    <div className=" font-serif sm:space-x-1 p-5 space-y-1 sm:space-y-0 text-xl sm:text-base  sm:flex-row flex-wrap sm:flex-nowrap flex flex-col  ">


                        <button className="  px-4 py-10 p-1 hover:bg-primary group hover:text-white bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto text-yellow group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
                            </svg>
                            <div className="pt-2 text-lg">Friendly Services</div>
                        </button>
                        <button className=" px-8 py-10 p-1 hover:bg-primary group  hover:text-white bg-black text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto  " viewBox="0 0 20 20" fill="currentColor">
                                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                            </svg>

                            <div className="pt-2 text-lg">Rental Services</div>
                        </button>

                        <button className="px-4 py-10 p-1 hover:bg-primary group  hover:text-white bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto text-yellow group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                            <div className="pt-2 text-lg">Buying Services</div>
                        </button>


                        <button className=" px-8 py-10 p-1 hover:bg-primary group hover:text-white bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto text-yellow group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                            <div className="pt-2 text-lg">Luxury Apartment</div>
                        </button>

                        <button className=" hover:text-white px-8 py-10 p-1 group hover:bg-primary  bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-11 mx-auto group-hover:text-white text-yellow" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
                            </svg>
                            <div className="pt-2 text-lg">Deluxe Houses</div>
                        </button>

                    </div>
                </div>
            </div>

            <div className="p-10">
                <div className=" flex flex-col lg:flex-row">
                    <div className=" flex h-full  lg:w-1/2 ">
                        <div className=" sm:visible w-1/2 p-1 invisible absolute sm:relative">
                            <img className=" h-1/2 w-full p-1 " src="https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg" alt="##" />
                            <img className=" h-1/2 p-1 pb-0" src="https://media-cdn.tripadvisor.com/media/photo-s/05/2c/b6/8c/de-java-hotel.jpg" alt="" />
                        </div>
                        <div className="  h-4/5 p-1 pl-0">
                            <img src="https://www.ihgplc.com/-/media/ihg/images/brands/regent/regent_carousel_1.jpg" alt="" />
                        </div>
                    </div>

                    <div className=" lg:w-1/2 lg:px-14 lg:py-10 px-8 py-6 sm:pb-0 text-center">
                        <h1 className=" text-4xl sm:text-5xl  font-serif pb-4 lg:pb-6"> Welcome to your Rahaish</h1>
                        <p className=" text-medium sm:text-xl text-gray-600 pb-4 lg:pb-6">“If you want to be a leader in your community, buying your own home is an important step, because it is a well-known fact that, if you don’t own your own space, you are subconsciously telling your peers that your perspectives and judgments are unworthy.”</p>
                        <button className=" border-solid border-4 text-xl font-medium text-white border-gray-600 bg-gray-600 px-3 py-1 sm:px-5 sm:py-2 hover:border-gray-600 hover:bg-white hover:text-black ">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="">
                <h1 className="text-center text-black font-semibold md:text-3xl text-2xl font-serif pb-0">UPCOMING PROJECTS</h1>
            </div>

            <div className="min-h-screen flex  justify-around items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    <WishlistCard
                        propertyName="Shayam valley"
                        location="Mathura"
                        price="4.5 k"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgu6g0EDcefqKdtOeQeHLAfbTM-RESCRfHQ&usqp=CAU"
                        type="Rent"
                        bed={4}
                        bath={5}
                        area={1000}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="The Paradise"
                        location="Alighar"
                        price="35 lakhs"
                        image="https://is1-2.housingcdn.com/4f2250e8/b99c98d2f3b89e994b607314a3d1f892/v5/fs/ayya_aathiguru-velachery-chennai-ayya_flats__builder_pvt_ltd.jpg"
                        type="Sale"
                        bed={4}
                        bath={4}
                        area={1500}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Basera"
                        location="Noida"
                        price="56 lakhs"
                        image="https://is1-3.housingcdn.com/4f2250e8/d34af5a992d5eda29fc1924b6587329b/v0/fs/sri_agathiya_flats-vengaivasal_chennai-chennai-anu_builders_pvt_ltd.jpg"
                        type="Sale"
                        bed={4}
                        bath={2}
                        area={1600}
                    ></WishlistCard>
                </div>
            </div>

            <div>
                <BouncerCard></BouncerCard>
            </div>
            <div className="pt-10">
                <Footer></Footer>
            </div>

        </div>
    );
};
DashboardPage.defaultProps = {
}
export default memo(DashboardPage);