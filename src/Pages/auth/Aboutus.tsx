import { FC, memo } from "react";
import WelcomeNav from "../../Components/NavbarComponents/WelcomeNav";
interface Props {
}
const Aboutus: FC<Props> = (props) => {
    return (
        <div>
            <WelcomeNav></WelcomeNav>
            <div className=" sm:space-x-1 p-6 sm:flex ">
                <div className="sm:w-1/2 w-full">
                    <h1 className="font-semibold text-3xl text-primary pt-4 pb-4">About us</h1>
                    <p className=" pb-3 text-gray-700">At rahaish.com, we understand that people everywhere are searching for a home to call their own. A home is a cherished memory that lasts forever, where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate.</p>
                    <p className=" text-gray-700">We want to make the journey as joyful as the moment when you finally find the perfect home. So we begin by partnering with our customers from the start and being there when it matters the most - right from online search to brokers to home loans to paperwork to finally finding that perfect home. At makaan.com, we help you find joy.</p>
                    <h1 className=" font-semibold text-xl text-primary pt-4 pb-4">Our Vision</h1>
                    <p className=" pb-4 text-gray-700">Delivering trustworthy experiences that you cherish for a lifetime.</p>
                    <h1 className=" text-xl font-semibold text-primary pb-4">Our Mission</h1>
                    <p className=" text-gray-700">To be the first choice for our consumers and partners in their journey of discovering, renting, buying, selling and financing a home. We do that with data, design, technology, and above all the passion of our people, while delivering value to our shareholders.</p>
                </div>
                <div>
                    <img className=" w-full h-full" src="https://static.makaan.com/images/aboutUs/abt-mg.25a0b33e.png" alt="" />
                </div>
            </div>
            <iframe className=" p-6 w-full sm:h-screen  h-1/2 " src="https://www.youtube.com/embed/4CuDubH2L9s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
    );
};
Aboutus.defaultProps = {
}
export default memo(Aboutus);
export { };