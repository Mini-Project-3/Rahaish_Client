import { FC, memo, useState } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SecondaryNav from "../../Components/SharedComponents/SecondaryNav";
import SideBar from "../../Components/SharedComponents/SideBar";
import PrimaryNav from "../../Components/SharedComponents/PrimaryNav";
import Dashboard from "./Dashboard";
import Flat from "./Flat";
import Plot from "./Plot";
import WishlistPage from "./WishlistPage";
import InnerStructure from "./InnerStructure";
import House from "./House";
import UploadHouse from "./UploadHouse";
import PlotDetailsForm from "./UploadPlot";
import UploadPlot from "./UploadPlot";
import UploadFlat from "./UploadFlat";

interface Props {
}
const AppContainer: FC<Props> = (props) => {
    return (
        <div>
            <BrowserRouter>
                <PrimaryNav />
                <SecondaryNav />
                <div className="flex flex-row">
                    <SideBar></SideBar>
                    <Switch>
                        <Route exact path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route exact path="/plot">
                            <Plot></Plot>
                        </Route>
                        <Route exact path="/house">
                            <House></House>
                        </Route>
                        <Route exact path="/flat">
                            <Flat></Flat>
                        </Route>
                        <Route exact path="/wishlist">
                            <WishlistPage></WishlistPage>
                        </Route>
                        <Route exact path="/uploadhouse">
                            <UploadHouse></UploadHouse>
                        </Route>
                        <Route exact path="/uploadplot">
                            <UploadPlot></UploadPlot>
                        </Route>
                        <Route exact path="/uploadflat">
                            <UploadFlat></UploadFlat>
                        </Route>
                        <Route exact path="/house/:id">
                            <InnerStructure></InnerStructure>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};
AppContainer.defaultProps = {
}
export default memo(AppContainer);