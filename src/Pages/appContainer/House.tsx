import { FC, memo, useEffect, useState } from "react";
import AllCard from "../../Components/SharedComponents/AllCard";
import MainCard from "../../Components/OtherComponents/WishlistCard";
import Footer from "../../Components/SharedComponents/Footer";
import Seachbar from "../../Components/SharedComponents/Seachbar";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
import { BASE_URL, LS_AUTH_TOKEN } from "../../Constants/constants";
import axios from "axios";
interface Props {
}
const House: FC<Props> = (props) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    console.log("Token ", token)

    const [response, setResponse] = useState<any[]>();

    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL + "/my-house";
            try {
                const response = await axios.get(url, { headers: { 'Content-Type': 'application/json', 'Authorization': token! } });
                console.log(response.data);
                setResponse(response.data)
            } catch (error) {
                console.log("Not able to fetch data")
            }
        }
        fetchData();
    }, [])

    return (
        <div className="w-full">
            <div className="pt-20 pb-10 px-4">
                <WelcomeHeader theme="bg-property"></WelcomeHeader>
            </div>


            <div className="min-h-screen  justify-center items-center py-20">

                {
                    response?.map((item) => {
                        return <AllCard
                            propertyName={item?.name}
                            image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                            location={item?.address}
                            status={item?.status}
                            price={item?.price}
                            type="Sale"
                            bath={item?.bathroom}
                            area={item?.area}
                            description={item?.description}
                            facing={item?.facing}
                        />
                    })
                }

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