import { FC, memo, useEffect, useState } from "react";
import Footer from "../../Components/SharedComponents/Footer";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
import { BASE_URL, LS_AUTH_TOKEN } from "../../Constants/constants";
import axios from "axios";
import HouseCard from "../../Components/HouseComponents/HouseCard";
import { Link } from "react-router-dom";
interface Props {
}
const HousePage: FC<Props> = (props) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    console.log("Token ", token)

    const [response, setResponse] = useState<any[]>();
    const [pdata, setpdata] = useState<any[]>();

    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL + "/all-houses";
            try {
                const response = await axios.get(url, { headers: { 'Content-Type': 'application/json', 'Authorization': token! } });
                console.log(response.data);
                const pdata = response?.data?.slice(0, 2);
                setpdata(pdata)
                console.log(pdata)
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
                        return <Link to={`/house/${item.house_id}`}> <HouseCard
                            propertyName={item?.name}
                            image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                            address={item?.address}
                            city={item?.city}
                            status={item?.status}
                            price={item?.price}
                            bath={item?.bathroom}
                            area={item?.area}
                            description={item?.description}
                            furnishing={item?.furnishing}
                            facing={item?.facing}
                            contact={item?.contact}
                            floor={item?.floor}
                            bed={item?.bedroom}
                        />
                        </Link>
                    })
                }

            </div>
            <div className="pt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};
HousePage.defaultProps = {
}
export default memo(HousePage);