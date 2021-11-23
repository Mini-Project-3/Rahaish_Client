import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Button from "../SharedComponents/Button";
interface Props {
}
const WelcomeNav: FC<Props> = (props) => {
    return (
        <div className="pt-5 pb-10">
            <nav className="bg-black text-white px-4 p-4">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        <button className="flex ">
                            <img className="h-10 " src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg" alt="" />
                            <h1 className="text-2xl font-semibold text-white">Rahaish</h1>
                        </button>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link to="/login"><Button children=" Login " theme="primary"></Button></Link>
                        <Link to="/signup"><Button children="Sign Up" theme="secondary"></Button></Link>
                    </div>
                </div>
            </nav >
        </div>
    );
};
WelcomeNav.defaultProps = {
}
export default memo(WelcomeNav);