import { FC, memo, useState } from "react";
import DropDown from "../DashboardComponents/DropDown";
interface Props {
}
const PrimaryNav: FC<Props> = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    return (
        <div>
            <div className="flex justify-between bg-black p-3 ">
                <button className="flex ">
                    <img className="h-10 " src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg" alt="" />
                    <h1 className="text-2xl font-semibold text-white">Rahaish</h1>
                </button>
                <div className="flex space-x-4 items-center ">
                    <div>
                        <button >
                            <img className="h-6 pt-1 " src="https://designreset.com/cork/ltr/demo4/assets/img/ca.png" alt="" />
                        </button>
                        <div className=" absolute mt-5 -ml-10"></div>
                    </div>




                    <div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </button>
                        <div className=" absolute mt-5 -ml-16 "></div>
                    </div>



                    <div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <div className=" absolute mt-5 -ml-20  "></div>
                    </div>




                    <div>
                        <button onClick={() => setIsOpen1(!isOpen1)}>
                            <img className="border-0 rounded h-7 w-7 cursor-pointer " src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/07/Cool-Boys-Girls-Stylish-Dp-1.jpg" alt="" />
                        </button>
                        <div className=" absolute mt-5 -ml-28 ">{isOpen1 && <DropDown></DropDown>}</div>
                    </div>







                </div>
            </div>
        </div>
    );
};
PrimaryNav.defaultProps = {
}
export default memo(PrimaryNav);
export { };