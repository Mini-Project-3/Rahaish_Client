import { FC, memo } from "react";
import { BsBuilding } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai"
interface Props {
}
const Jumbotron2: FC<Props> = (props) => {
    return (
        <>
            <div className="relative pt-12 bg-blueGray-50">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." className="w-full rounded-lg shadow-lg" src="https://i.pinimg.com/originals/61/7b/f7/617bf70a92c211c97ef30f9fd7a37290.jpg" />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-green-900 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-300 mt-8">
                                <BsBuilding></BsBuilding>
                            </div>
                            <h3 className="text-3xl font-semibold">Just browse away. It’s all here.</h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis aperiam, consequuntur beatae quo non commodi ea mollitia deser
                            </p>
                            <ul className="list-none mt-4">
                                <li className="py-1">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-900 bg-green-300 mr-3"><AiFillCaretRight></AiFillCaretRight></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Carefully crafted housing
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-1">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-900 bg-green-300 mr-3"><AiFillCaretRight></AiFillCaretRight></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">Amazing property</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Jumbotron2.defaultProps = {
}
export default memo(Jumbotron2);