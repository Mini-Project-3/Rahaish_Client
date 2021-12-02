import { FC, memo, useEffect, useState } from "react";
import Footer from "../../Components/SharedComponents/Footer";
import BouncerCard from "../../Components/OtherComponents/BouncerCard";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
interface Props {
}

const DashboardPage: FC<Props> = (props) => {

    return (
        <div className="w-full">
            <div>
                <BouncerCard></BouncerCard>
            </div>
            <div className="pt-10">
                <Footer></Footer>
            </div>

        </div>
    );
};
DashboardPage.defaultProps = {
}
export default memo(DashboardPage);