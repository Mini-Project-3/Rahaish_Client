import { FC, memo, useEffect, useState } from "react";
import AllCard from "../../Components/SharedComponents/AllCard";
import MainCard from "../../Components/OtherComponents/WishlistCard";
import Footer from "../../Components/SharedComponents/Footer";
import Seachbar from "../../Components/SharedComponents/Seachbar";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
import axios from "axios";
import { LS_AUTH_TOKEN, BASE_URL } from "../../Constants/constants";
import PlotCard from "../../Components/SharedComponents/PlotCard";
interface Props {
}
const Plot: FC<Props> = (props) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    console.log("Token ", token)

    const [response, setResponse] = useState<any[]>();

    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL + "/my-plot";
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
                <WelcomeHeader theme="bg-plot"></WelcomeHeader>
            </div>

            <div className="min-h-screen  justify-center items-center py-20">
                {
                    response?.map((item) => {
                        return <PlotCard
                            propertyName={item?.name}
                            image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                            address={item?.address}
                            city={item?.city}
                            status={item?.status}
                            price={item?.price}
                            length={item?.length}
                            width={item?.width}
                            area={item?.area}
                            description={item?.description}
                            openFaces={item?.openFaces}
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
Plot.defaultProps = {
}
export default memo(Plot);