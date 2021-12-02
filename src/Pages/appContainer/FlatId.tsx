import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import SectionsNav from "../../Components/NavbarComponents/SectionsNav";
import { BASE_URL, LS_AUTH_TOKEN } from "../../Constants/constants";
import FlatTitle from "../../Components/FlatComponents/FlatTitle";
import FlatSection from "../../Components/FlatComponents/FlatSection";
import ContactFlat from "../../Components/FlatComponents/ContactFlat";
interface Props {
}
const FlatId: FC<Props> = (props) => {

    const token = localStorage.getItem(LS_AUTH_TOKEN);
    const [response, setResponse] = useState<any>();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL + "/flat-one";
            try {
                const response = await axios.get(url, { headers: { 'Content-Type': 'application/json', 'Authorization': token! }, params: { flat_id: +id } });
                console.log(response.data);
                setResponse(response.data)
            } catch (error) {
                console.log("Not able to fetch data")
            }
        }
        fetchData();
    }, [])
    return (
        <div className="p-3 w-full" >
            <FlatTitle name={response?.name} address={response?.address} city={response?.city} rent={response?.rent} area={response?.area}></FlatTitle>
            <div className=" md:sticky  bg-white z-20 top-24 absolute invisible md:visible  "><SectionsNav></SectionsNav></div>
            <div className=" flex">
                <div className=" w-full md:w-4/5 "><FlatSection name={response?.name} address={response?.address} city={response?.city} rent={response?.rent} area={response?.area} furnishing={response?.furnishing} bed={response?.bedroom} bath={response?.bathroom} description={response?.description} floor={response?.floor}></FlatSection></div>
                <div className=" md:w-3/5 top-32 absolute invisible md:visible md:sticky "><ContactFlat contact={response?.contact} flat_id={+id}></ContactFlat></div>
            </div>
        </div >
    );
};
FlatId.defaultProps = {
}
export default memo(FlatId);