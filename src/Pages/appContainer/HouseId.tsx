import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import HouseSection from "../../Components/HouseComponents/HouseSection";
import SectionsNav from "../../Components/NavbarComponents/SectionsNav";
import HouseTitle from "../../Components/HouseComponents/HouseTitle";
import { BASE_URL, LS_AUTH_TOKEN } from "../../Constants/constants";
import ContactHouse from "../../Components/HouseComponents/ContactHouse";
interface Props {
}
const HouseId: FC<Props> = (props) => {

  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const [response, setResponse] = useState<any>();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    async function fetchData() {
      const url = BASE_URL + "/house-one";
      try {
        const response = await axios.get(url, { headers: { 'Content-Type': 'application/json', 'Authorization': token! }, params: { house_id: +id } });
        console.log(response.data);
        setResponse(response.data)
      } catch (error) {
        console.log("Not able to fetch data")
      }
    }
    fetchData();
  }, [])
  return (
    <div className="p-3 w-full " >
      <HouseTitle name={response?.name} address={response?.address} city={response?.city} price={response?.price} area={response?.area} facing={response?.facing}></HouseTitle>
      <div className=" md:sticky  bg-white z-20 top-24 absolute invisible md:visible  "><SectionsNav></SectionsNav></div>
      <div className=" flex">
        <div className=" w-full md:w-4/5 "><HouseSection name={response?.name} address={response?.address} city={response?.city} price={response?.price} area={response?.area} facing={response?.facing} bed={response?.bedroom} bath={response?.bathroom} description={response?.description} floor={response?.floor}></HouseSection></div>
        <div className=" md:w-3/5 top-32 absolute invisible md:visible md:sticky "><ContactHouse house_id={+id} contact={response?.contact}></ContactHouse></div>
      </div>
    </div >
  );
};
HouseId.defaultProps = {
}
export default memo(HouseId);