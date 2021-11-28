import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import ContactOwnerForm from "../../Components/FlatInfoComponent/ContactOwnerForm";
import Sections from "../../Components/FlatInfoComponent/Sections";
import SectionsNav from "../../Components/FlatInfoComponent/SectionsNav";
import TitleAndInfo from "../../Components/FlatInfoComponent/TitleAndInfo";
import { BASE_URL, LS_AUTH_TOKEN } from "../../Constants/constants";
interface Props {
}
const InnerStructure: FC<Props> = (props) => {

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
      <div className="bg-red-400 h-48">{response?.address}</div>
      <TitleAndInfo></TitleAndInfo>
      <div className=" md:sticky  bg-white z-20 top-0 absolute invisible md:visible  "><SectionsNav></SectionsNav></div>
      <div className=" flex">
        <div className=" w-full md:w-4/5 "><Sections></Sections></div>
        <div className=" md:w-3/5 top-0 absolute invisible md:visible md:sticky "><ContactOwnerForm></ContactOwnerForm></div>
      </div>
    </div >
  );
};
InnerStructure.defaultProps = {
}
export default memo(InnerStructure);