import { FC, memo } from "react";
import { BsBuilding } from "react-icons/bs"
import { AiFillCaretRight } from "react-icons/ai"
interface Props {
}
const WelcomePagess: FC<Props> = (props) => {
    return (
        <div>


            {/* 1st jumbotron start */}
            <div>
                <div className="flex justify-center items-center w-full h-full bg-green-300">
                    <div className="container mx-auto mt-10 mb-10 lg:mb-40 lg:px-20">
                        <div className="relative w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
                            <img alt="Card" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F947014356%2F960x0.jpg%3Ffit%3Dscale" className="max-w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="relative w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-green-900 rounded-2xl z-50">
                            <div className="flex flex-col text-white">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" /></svg>
                                </div>
                                <p className="text-white my-5 px-2">
                                    Become a part of the growing Rahaish family. As a promise to our real-estate agent community, all our listings are completely free & always will be. Now you can grow your business happily. Further more, over a million buyers visit us every month, giving you the audience that you need.
                                </p>
                                <div className="flex justify-between pl-2">
                                    <h3 className="font-bold text-2xl">- Ayush Chauhan</h3>
                                    <i className="fas fa-quote-right text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* first jumbotron end */}


            {/* 2st jumbotron start */}
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
            {/* 2st jumbotron end */}

            <div>
                <img src="" alt="" />
            </div>

        </div>
    );
};
WelcomePagess.defaultProps = {
}
export default memo(WelcomePagess);