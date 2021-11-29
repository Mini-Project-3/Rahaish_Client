import { FC, memo, useState } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SecondaryNav from "../../Components/SharedComponents/SecondaryNav";
import SideBar from "../../Components/SharedComponents/SideBar";
import PrimaryNav from "../../Components/SharedComponents/PrimaryNav";
import WishlistPage from "./WishlistPage";
import UploadHouse from "./UploadHouse";
import UploadPlot from "./UploadPlot";
import UploadFlat from "./UploadFlat";
import DashboardPage from "./DashboardPage";
import FlatPage from "./FlatPage";
import HousePage from "./HousePage";
import PlotPage from "./PlotPage";
import HouseId from "./HouseId";
import FlatId from "./FlatId";

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
                            <DashboardPage></DashboardPage>
                        </Route>
                        <Route exact path="/plot">
                            <PlotPage></PlotPage>
                        </Route>
                        <Route exact path="/house">
                            <HousePage></HousePage>
                        </Route>
                        <Route exact path="/flat">
                            <FlatPage></FlatPage>
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
                            <HouseId></HouseId>
                        </Route>
                        <Route exact path="/flat/:id">
                            <FlatId></FlatId>
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