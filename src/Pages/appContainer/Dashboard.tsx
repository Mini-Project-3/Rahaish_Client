import { FC, memo, useEffect, useState } from "react";
import Footer from "../../Components/SharedComponents/Footer";
import BouncerCard from "../../Components/DashboardComponents/BouncerCard";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
interface Props {
}

const Dashboard: FC<Props> = (props) => {

    return (
        <div className="w-full">
            <div className="pt-20 pb-10 px-4">
                <WelcomeHeader theme="bg-dash"></WelcomeHeader>
            </div>

            <div>
                <BouncerCard></BouncerCard>
            </div>
            <div className="pt-10">
                <Footer></Footer>
            </div>

        </div>
    );
};
Dashboard.defaultProps = {
}
export default memo(Dashboard);