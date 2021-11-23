import { FC, memo } from "react";
import AgentCard from "../../Components/OtherComponents/AgentCard";
import Footer from "../../Components/SharedComponents/Footer";
import FeaturedColl from "../../Components/WelcomeComponents/FeaturedColl";
import InstaHover from "../../Components/WelcomeComponents/InstaHover";
import Jumbotron1 from "../../Components/WelcomeComponents/Jumbotron1";
import Jumbotron2 from "../../Components/WelcomeComponents/Jumbotron2";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
import WelcomeNav from "../../Components/WelcomeComponents/WelcomeNav";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <div>
            <WelcomeNav />
            <WelcomeHeader theme="bg-wel"></WelcomeHeader>

            <div className="pt-10">
                <h1 className="text-center text-black font-semibold md:text-3xl text-2xl font-serif">Featured Collection</h1>
                <FeaturedColl></FeaturedColl>
            </div>

            <div className="pt-10 pb-10">
                <h1 className="text-center text-black font-semibold md:text-3xl text-2xl font-serif">In Spotlight</h1>
            </div>
            <Jumbotron2></Jumbotron2>

            <InstaHover />

            <Jumbotron1></Jumbotron1>

            <div className="pt-10">
                <h1 className="text-center text-black font-semibold md:text-3xl text-2xl font-serif">Our Team</h1>
            </div>
            <div className="md:flex pb-10 pt-10">
                <AgentCard name="Mitali Varshney" designation="MERN Stack Developer" imag="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"></AgentCard>
                <AgentCard name="Ayush Chauhan" designation="Full Stack Developer" imag="https://i.pinimg.com/originals/e0/d1/01/e0d1015b32d1aa7061c1b1aad06d916f.jpg"></AgentCard>
                <AgentCard name="Kanika Varshney" designation="Front End Developer" imag="http://www.helloproject.in/extra-images/profile-img-01.jpg"></AgentCard>
                <AgentCard name="Khushi Varshney" designation="UI UX Developer" imag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAL5lx462Rjn-dAsEQHumnRJATsXmXbP2mxHWzbFr_RKitmboHvkL-gnOFfOi-gbyZW60&usqp=CAU"></AgentCard>
            </div>

            <Footer></Footer>
        </div>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);
