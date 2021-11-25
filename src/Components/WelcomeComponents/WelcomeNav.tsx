import { FC, memo } from "react";
import { Link } from "react-router-dom";
import Button from "../SharedComponents/Button";
interface Props {
}
const WelcomeNav: FC<Props> = (props) => {
    return (
        <div className=" pb-10 sticky z-50 top-0">
            <nav className="bg-black text-white px-4 p-4">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        <button className="flex ">
                            <img className="h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBI3bJaGROWkrhoPeq-VW3NR0bOj6nBQaDG0BgOIzbbamuKT0W_AU6xwZ0ks6pcyG77vs&usqp=CAU" alt="abcd" />
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