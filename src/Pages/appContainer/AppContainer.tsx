import { FC, memo } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SecondaryNav from "../../Components/NavbarComponents/SecondaryNav";
import SideBar from "../../Components/NavbarComponents/SideBar";
import PrimaryNav from "../../Components/NavbarComponents/PrimaryNav";
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
import PlotId from "./PlotId";
import ProfilePage from "./ProfilePage";

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
                            <PlotPage theme={"plot"}></PlotPage>
                        </Route>
                        <Route exact path="/house">
                            <HousePage theme={"property"}></HousePage>
                        </Route>
                        <Route exact path="/flat">
                            <FlatPage theme={"flat"}></FlatPage>
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
                        <Route exact path="/plot/:id">
                            <PlotId></PlotId>
                        </Route>
                        <Route exact path="/profile">
                            <ProfilePage></ProfilePage>
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