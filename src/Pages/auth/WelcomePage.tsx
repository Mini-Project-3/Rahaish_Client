import { FC, memo } from "react";
import AgentCard from "../../Components/SharedComponents/AgentCard";
import Footer from "../../Components/SharedComponents/Footer";
import Jumbotron1 from "../../Components/WelcomeComponents/Jumbotron1";
import Jumbotron2 from "../../Components/WelcomeComponents/Jumbotron2";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <div>
            <WelcomeHeader />
            <Jumbotron1></Jumbotron1>
            <Jumbotron2></Jumbotron2>
            <div className="flex">
                <AgentCard name="Mitali Varshney" designation="Property Agent" imag="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"></AgentCard>
                <AgentCard name="Ayush Chauhan" designation="Apartment Agent" imag="https://i.pinimg.com/originals/e0/d1/01/e0d1015b32d1aa7061c1b1aad06d916f.jpg"></AgentCard>
                <AgentCard name="Kanika Varshney" designation="Plot Agent" imag="http://www.helloproject.in/extra-images/profile-img-01.jpg"></AgentCard>
                <AgentCard name="Khushi Varshney" designation="Villa Agent" imag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAL5lx462Rjn-dAsEQHumnRJATsXmXbP2mxHWzbFr_RKitmboHvkL-gnOFfOi-gbyZW60&usqp=CAU"></AgentCard>
            </div>
            <Footer></Footer>
        </div>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);
