import { FC, memo } from "react";
import MainCard from "../../Components/DashboardComponents/MainCard";
import Footer from "../../Components/SharedComponents/Footer";
import Seachbar from "../../Components/SharedComponents/Seachbar";
interface Props {
}
const Flat: FC<Props> = (props) => {
    return (
        <div className="w-full">
            <div className="pt-20 pb-10 px-10">
                <Seachbar></Seachbar>
            </div>
            <div className="min-h-screen flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    <MainCard propertyName="Radha krishna valley" location="Mathura" price="7 k" type="Rent" bed={3} bath={2} area={1200} ></MainCard>
                    <MainCard propertyName="Sunn day valley" location="Mathura" price="6.5 k" type="Rent" bed={3} bath={2} area={1200} ></MainCard>
                    <MainCard propertyName="krishna valley" location="Mathura" price="8 k" type="Rent" bed={3} bath={2} area={1200} ></MainCard>
                    <MainCard propertyName="Radha shayam valley" location="Mathura" price="5.6 k" type="Rent" bed={3} bath={2} area={1200} ></MainCard>
                    <MainCard propertyName="Maa vaishno flats" location="Mathura" price="10 k" type="Rent" bed={3} bath={2} area={1200} ></MainCard>
                    <MainCard propertyName="Sunn day valley" location="Mathura" price="5 k" type="Rent" bed={3} bath={2} area={1200} ></MainCard>
                    <MainCard propertyName="krishna valley" location="Mathura" price="4 k" type="Rent" bed={3} bath={2} area={1200} ></MainCard>
                    <MainCard propertyName="Radha shayam valley" location="Mathura" price="3.7 k" type="Rent" bed={3} bath={2} area={1200} ></MainCard>
                </div>
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