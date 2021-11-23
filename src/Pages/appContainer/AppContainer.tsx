import { FC, memo, useState } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SecondaryNav from "../../Components/SharedComponents/SecondaryNav";
import SideBar from "../../Components/SharedComponents/SideBar";
import PrimaryNav from "../../Components/SharedComponents/PrimaryNav";
import Dashboard from "./Dashboard";
import Flat from "./Flat";
import Plot from "./Plot";
import Property from "./Property";
import UploadProperty from "./UploadProperty";
import WishlistPage from "./WishlistPage";
import InnerStructure from "../../Components/FlatInfoComponent/InnerStructure";
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
                        <Route path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route path="/plot">
                            <Plot></Plot>
                        </Route>
                        <Route path="/property">
                            <Property></Property>
                        </Route>
                        <Route path="/flat">
                            <Flat></Flat>
                        </Route>
                        <Route path="/wishlist">
                            <WishlistPage></WishlistPage>
                        </Route>
                        <Route path="/uploadproperty">
                            <UploadProperty></UploadProperty>
                        </Route>
                        <Route path="/innertemplate">
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