import { FC, memo } from "react";
import AllCard from "../../Components/SharedComponents/AllCard";
import MainCard from "../../Components/OtherComponents/WishlistCard";
import Footer from "../../Components/SharedComponents/Footer";
import Seachbar from "../../Components/SharedComponents/Seachbar";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
interface Props {
}
const House: FC<Props> = (props) => {
    return (
        <div className="w-full">
            <div className="pt-20 pb-10 px-4">
                <WelcomeHeader theme="bg-property"></WelcomeHeader>
            </div>

            <div className="min-h-screen  justify-center items-center py-20">
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
            <div className="pt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};
House.defaultProps = {
}
export default memo(House);