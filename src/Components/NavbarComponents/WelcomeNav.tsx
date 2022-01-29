import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Button from "../SharedComponents/Button";
import LOGO from "../../images/Logo.png";
interface Props {
}
const WelcomeNav: FC<Props> = (props) => {
    return (
        <div className="pb-10 sticky z-50 top-0">
            <nav className="bg-gray-900 text-white px-4 p-4">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        <button className="flex ">
                            <img className="h-10 w-10" src={LOGO} alt="logo.png" />
                            <h1 className="text-2xl font-semibold text-white p-2">Rahaish</h1>
                        </button>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-6">
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/login"><Button children=" Login " theme="primary" ></Button></Link>
                        <Link to="/signup"><Button children="Sign Up" theme="secondary" size="small"></Button></Link>
                    </div>
                </div>
            </nav >
        </div>
    );
};
WelcomeNav.defaultProps = {
}
export default memo(WelcomeNav);