import { FC, memo, useEffect, useState } from "react";
import Footer from "../../Components/SharedComponents/Footer";
import { BASE_URL, LS_AUTH_TOKEN } from "../../Constants/constants";
import axios from "axios";
import HouseCard from "../../Components/HouseComponents/HouseCard";
import { Link } from "react-router-dom";
import Button from "../../Components/SharedComponents/Button";
interface Props {
    theme: string;
}
const HousePage: FC<Props> = (props) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    console.log("Token ", token)
    const [response, setResponse] = useState<any[]>();
    const [sResponse, setSResponse] = useState<any[]>();
    const [display, setDisplay] = useState<Boolean>();

    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL + "/all-houses";
            try {
                const response = await axios.get(url, { headers: { 'Content-Type': 'application/json', 'Authorization': token! } });
                setResponse(response.data)
            } catch (error) {
                console.log("Not able to fetch data")
            }
        }
        fetchData();
    }, [])

    let searchResult: any[] = [];

    return (
        <div className="w-full">

            <div className="pt-20 pb-10 px-4">
                <div className={`w-full bg-cover bg-center h-96 bg-` + (props.theme)}>
                    <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-30">
                        <div className="w-10/12">
                            <div className="w-full bg-gray-300 flex justify-center items-center">
                                <div className="container mx-auto bg-purple-200 rounded-lg p-4 md:p-14">
                                    <form >
                                        <h1 className="text-center font-bold text-purple-900 text-xl sm:text-3xl md:text-4xl pb-8">Welcome back, continue your home search</h1>
                                        <div className=" mx-auto sm:flex items-center bg-white rounded-lg overflow-hidden px-2 md:py-1 justify-between">

                                            <input className="text-base text-gray-400 flex-grow outline-none px-6 py-4 sm:py-1 sm:px-2 " placeholder="Search here" type="text"
                                                onChange={(e) => {
                                                    response?.map((res) => {
                                                        if (res.city.toLowerCase().includes(e.target.value.toLowerCase()) || res.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                                            searchResult.push(res);
                                                            setSResponse(searchResult);
                                                            setDisplay(true);
                                                        }
                                                    })
                                                }}
                                            />
                                            <div className="flex items-center px-2  space-x-2 sm:space-x-4 mx-auto p-1">
                                                <select className="text-base text-gray-800 outline-none border-2 px-4 py-1 rounded-lg ">
                                                    <option value="location" selected>Location</option>
                                                    <option value="name">Name</option>
                                                </select>
                                                <Button children="Search" theme="primary"></Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {display && <div className="min-h-screen justify-center items-center py-20">
                {sResponse?.map((r) => {
                    console.log(r)
                    return <Link to={`/house/${r.house_id}`}> <HouseCard
                        propertyName={r?.name}
                        image="https://5.imimg.com/data5/IZ/CL/AO/SELLER-23127414/independent-house-for-sell-500x500.jpeg"
                        address={r?.address}
                        city={r?.city}
                        status={r?.status}
                        price={r?.price}
                        bath={r?.bathroom}
                        area={r?.area}
                        description={r?.description}
                        furnishing={r?.furnishing}
                        facing={r?.facing}
                        contact={r?.contact}
                        floor={r?.floor}
                        bed={r?.bedroom}
                    />
                    </Link>
                })
                }
            </div>
            }
            <div className="">
                <h1 className="text-center text-black font-semibold md:text-3xl text-2xl font-serif pb-0">ALL HOUSES COLLECTION</h1>
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