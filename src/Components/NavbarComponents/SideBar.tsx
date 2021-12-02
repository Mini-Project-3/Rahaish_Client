import { FC, memo } from "react";
import { IoHome } from "react-icons/io5"
import { BsSquareHalf } from "react-icons/bs"
import { MdSpaceDashboard } from "react-icons/md"
import { RiBuilding4Fill, RiLogoutBoxFill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { LS_AUTH_TOKEN } from "../../Constants/constants";
interface Props {
}
const SideBar: FC<Props> = (props) => {
    return (
        <div className="h-screen top-24 sticky bg-gray-900 z-0">
            <div className="min-h-screen flex flex-row w-14 hover:w-64 lg:w-64  text-white">
                <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                    <ul className="flex flex-col  space-y-1 bg-gray-900">
                        <li className=" pt-4">
                            <Link to="/dashboard" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-white-600 hover:text-gray-900 border-l-4 border-transparent hover:border-gray-500  pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <MdSpaceDashboard></MdSpaceDashboard>
                                </span>
                                <span className="ml-2 text-sm font-semibold tracking-wide truncate"><button >Dashboard</button></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/flat" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-white-600 hover:text-gray-900 border-l-4 border-transparent hover:border-gray-500  pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <RiBuilding4Fill></RiBuilding4Fill>
                                </span>
                                <span className="ml-2 text-sm font-semibold tracking-wide truncate"><button>Flat</button></span>
                                <span className="hidden lg:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-800 bg-indigo-50 rounded-full">Rent</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/house" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-white-600 hover:text-gray-900 border-l-4 border-transparent hover:border-gray-500  pr-6">

                                <span className="inline-flex justify-center items-center ml-4">
                                    <IoHome></IoHome>
                                </span>
                                <span className="ml-2  text-sm font-semibold tracking-wide truncate"><button>House</button></span>
                                <span className="hidden lg:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-800 bg-indigo-50 rounded-full">Sale</span>

                            </Link>
                        </li>

                        <li>
                            <Link to="/plot" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-white-600 hover:text-gray-900 border-l-4 border-transparent hover:border-gray-500  pr-6">

                                <span className="inline-flex justify-center items-center ml-4">
                                    <BsSquareHalf></BsSquareHalf>
                                </span>
                                <span className="ml-2 text-sm font-semibold tracking-wide truncate"><button>Plot</button></span>
                                <span className="hidden lg:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-800 bg-indigo-50 rounded-full">Sale</span>

                            </Link>
                        </li>

                        <li>
                            <Link to="/login" onClick={() => {
                                localStorage.removeItem(LS_AUTH_TOKEN);
                                window.location.href = "/login";
                            }} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-white-600 hover:text-gray-900 border-l-4 border-transparent hover:border-gray-500 pr-6">

                                <span className="inline-flex justify-center items-center ml-4">
                                    <RiLogoutBoxFill></RiLogoutBoxFill>
                                </span>
                                <span className="ml-2 text-sm font-semibold tracking-wide truncate"><button>Logout</button></span>

                            </Link>
                        </li>

                    </ul>
                    <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
                </div>
            </div>
        </div>
    );
};
SideBar.defaultProps = {
}
export default memo(SideBar);