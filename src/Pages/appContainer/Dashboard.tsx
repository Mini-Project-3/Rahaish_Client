import { FC, memo } from "react";
import AllCard from "../../Components/SharedComponents/AllCard";
import MainCard from "../../Components/OtherComponents/WishlistCard";
import Footer from "../../Components/SharedComponents/Footer";
import Seachbar from "../../Components/SharedComponents/Seachbar";
import BouncerCard from "../../Components/DashboardComponents/BouncerCard";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
import axios from "axios";
import { BASE_URL } from "../../Constants/constants";
interface Props {
}

// async function getHouse() {
//     const url = BASE_URL + "/my-house";
//     const response = await axios.get(url);
//     console.log(response.data);
//     return response.data;
// }

const Dashboard: FC<Props> = (props) => {

    return (
        <div className="w-full">
            <div className="pt-20 pb-10 px-4">
                <WelcomeHeader theme="bg-dash"></WelcomeHeader>
            </div>

            <div className="pb-10 pt-10">
                <div className=" border-primary border-2 rounded-md sm:text-2xl md:text-4xl text-center  font-bold text-primary pt-5 pb-5">
                    Best Property Collection
                </div>
            </div>
            <div className="min-h-screen justify-center items-center py-20">
                <AllCard
                    propertyName="Property 1"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

            </div>

            <div className="pb-10 pt-10">
                <div className=" border-primary border-2 rounded-md text-center sm:text-2xl md:text-4xl font-bold text-primary pt-5 pb-5">
                    Best Flat Collection
                </div>
            </div>
            <div className="min-h-screen justify-center items-center py-20">

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

            </div>

            <div className="pb-10 pt-10">
                <div className=" border-primary border-2 rounded-md text-center sm:text-2xl md:text-4xl font-bold text-primary pt-5 pb-5">
                    Best Plot Collection
                </div>
            </div>
            <div className="min-h-screen justify-center items-center py-20">
                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

                <AllCard
                    propertyName="Radha krishna valley"
                    image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                    location="Mathura"
                    status="under construction"
                    price="60 lac"
                    type="Sale"
                    bath={2}
                    area={1200}
                    description="Lorem ispsdksn kdnfjd ieriwqd nekdwqod wjhfuendnowjdo ijiowfno iwjdoqwjod"
                    facing="north"
                ></AllCard>

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
Dashboard.defaultProps = {
}
export default memo(Dashboard);