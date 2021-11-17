import { FC, memo } from "react";
import { IoHome } from "react-icons/io5"
import { BsSquareHalf } from "react-icons/bs"
import { MdSpaceDashboard } from "react-icons/md"
import { RiBuilding4Fill, RiLogoutBoxFill } from "react-icons/ri"
interface Props {
}
const SideBar: FC<Props> = (props) => {
    return (
        <div>
            <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-primary h-full text-white transition-all duration-300 border-none z-10 sidebar">
                <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-secondary text-white-600 hover:text-primary border-l-4 border-transparent hover:border-green-700  pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <MdSpaceDashboard></MdSpaceDashboard>
                                </span>
                                <span className="ml-2 text-sm font-semibold tracking-wide truncate">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-secondary text-white-600 hover:text-primary border-l-4 border-transparent hover:border-green-700  pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <RiBuilding4Fill></RiBuilding4Fill>
                                </span>
                                <span className="ml-2 text-sm font-semibold tracking-wide truncate">Flats</span>
                                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-primary bg-indigo-50 rounded-full">Rent</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-secondary text-white-600 hover:text-primary border-l-4 border-transparent hover:border-green-700  pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <IoHome></IoHome>
                                </span>
                                <span className="ml-2  text-sm font-semibold tracking-wide truncate">Properties</span>
                                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-primary bg-indigo-50 rounded-full">Sale</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-secondary text-white-600 hover:text-primary border-l-4 border-transparent hover:border-green-700  pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <BsSquareHalf></BsSquareHalf>
                                </span>
                                <span className="ml-2 text-sm font-semibold tracking-wide truncate">Plots</span>
                                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-primary bg-indigo-50 rounded-full">Sale</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-secondary text-white-600 hover:text-primary border-l-4 border-transparent hover:border-green-700  pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <RiLogoutBoxFill></RiLogoutBoxFill>
                                </span>
                                <span className="ml-2 text-sm font-semibold tracking-wide truncate">Logout</span>
                            </a>
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