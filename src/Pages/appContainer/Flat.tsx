import { FC, memo, useEffect, useState } from "react";
import Footer from "../../Components/SharedComponents/Footer";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
import axios from "axios";
import { LS_AUTH_TOKEN, BASE_URL } from "../../Constants/constants";
import FlatCard from "../../Components/SharedComponents/FlatCard";
interface Props {
}
const Flat: FC<Props> = (props) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    console.log("Token ", token)

    const [response, setResponse] = useState<any[]>();

    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL + "/my-flat";
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
                <WelcomeHeader theme="bg-flat"></WelcomeHeader>
            </div>

            <div className="min-h-screen justify-center items-center py-20">

                {
                    response?.map((item) => {
                        return <FlatCard
                            propertyName={item?.name}
                            image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                            address={item?.address}
                            city={item?.city}
                            status={item?.status}
                            rent={item?.rent}
                            bath={item?.bathroom}
                            area={item?.area}
                            description={item?.description}
                            furnishing={item?.furnishing}
                            contact={item?.contact}
                            floor={item?.floor}
                            bed={item?.bedroom}

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
Flat.defaultProps = {
}
export default memo(Flat);