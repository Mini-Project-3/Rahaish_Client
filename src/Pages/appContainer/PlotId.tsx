import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import SectionsNav from "../../Components/NavbarComponents/SectionsNav";
import ContactPlot from "../../Components/PlotComponents/ContactPlot";
import PlotSection from "../../Components/PlotComponents/PlotSection";
import PlotTitle from "../../Components/PlotComponents/PlotTitle";
import { LS_AUTH_TOKEN, BASE_URL } from "../../Constants/constants";
interface Props {
}
const PlotId: FC<Props> = (props) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    const [response, setResponse] = useState<any>();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL + "/plot-one";
            try {
                const response = await axios.get(url, { headers: { 'Content-Type': 'application/json', 'Authorization': token! }, params: { plot_id: +id } });
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
            <PlotTitle name={response?.name} address={response?.address} city={response?.city} price={response?.price} area={response?.area} openFaces={response?.openFaces} ></PlotTitle>
            <div className=" md:sticky  bg-white z-20 top-24 absolute invisible md:visible  "><SectionsNav></SectionsNav></div>
            <div className=" flex">
                <div className=" w-full md:w-4/5 "><PlotSection name={response?.name} address={response?.address} city={response?.city} price={response?.price} area={response?.area} length={response?.length} width={response?.width} openFaces={response?.openFaces} description={response?.description} ></PlotSection></div>
                <div className=" md:w-3/5 top-32 absolute invisible md:visible md:sticky "><ContactPlot contact={response?.contact} plot_id={+id}></ContactPlot></div>
            </div>
        </div >
    );
};
PlotId.defaultProps = {
}
export default memo(PlotId);