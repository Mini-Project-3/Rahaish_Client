import { FC, memo, useState } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../../Components/SharedComponents/SideBar";
import LoginPage from "../auth/LoginPage";
import Dashboard from "./Dashboard";
import Flat from "./Flat";
import Plot from "./Plot";
import Property from "./Property";
interface Props {
}
const AppContainer: FC<Props> = (props) => {
    return (
        <div>
            <BrowserRouter>
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
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};
AppContainer.defaultProps = {
}
export default memo(AppContainer);