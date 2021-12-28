import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import ForgotPassPage from "./ForgotPassPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

interface Props {
}

const Auth: FC<Props> = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/signup">
                    <SignupPage></SignupPage>
                </Route>
                <Route exact path="/login">
                    <LoginPage></LoginPage>
                </Route>
                <Route exact path="/forgotPassword">
                    <ForgotPassPage></ForgotPassPage>
                </Route>
            </Switch>
        </div>
    );
};

Auth.defaultProps = {}

export default memo(Auth);