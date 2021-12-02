import { FC, memo } from "react";
import AgentCard from "../../Components/OtherComponents/AgentCard";
import Footer from "../../Components/SharedComponents/Footer";
import FeaturedColl from "../../Components/WelcomeComponents/FeaturedColl";
import ImgRoomCard from "../../Components/WelcomeComponents/ImgRoomCard";
import InstaHover from "../../Components/WelcomeComponents/InstaHover";
import Jumbotron1 from "../../Components/WelcomeComponents/Jumbotron1";
import Jumbotron2 from "../../Components/WelcomeComponents/Jumbotron2";
import RoomCards from "../../Components/WelcomeComponents/RoomCards";
import WelcomeHeader from "../../Components/WelcomeComponents/WelcomeHeader";
import WelcomeNav from "../../Components/NavbarComponents/WelcomeNav";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <div>
            <WelcomeNav />
            <WelcomeHeader theme="bg-wel"></WelcomeHeader>

            <div className="pt-10 ">
                <h1 className="text-center text-black font-semibold md:text-3xl text-2xl font-serif pb-0">Featured Collection</h1>
                <FeaturedColl></FeaturedColl>
            </div>


            <div>
                <div className="flex flex-col md:flex-row  pb-2 md:pb-0 ">
                    <div className="md:w-1/4" ><ImgRoomCard image="https://www.interiorzine.com/wp-content/uploads/2017/11/50-small-studio-apartment-design-ideas-modern-tiny-clever.jpg" ></ImgRoomCard></div>
                    <div className="md:w-1/4"><RoomCards type={"Studio Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>
                    <div className="md:w-1/4" ><ImgRoomCard image="https://www.interiorzine.com/wp-content/uploads/2017/11/50-small-studio-apartment-design-ideas-modern-tiny-clever.jpg" ></ImgRoomCard></div>
                    <div className="md:w-1/4"><RoomCards type={"Micro Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>



                </div>
                <div className="flex flex-col md:flex-row  pb-2 md:pb-0">

                    <div className=" w-full md:w-1/4"><RoomCards type={"Alcove Studio "} Rs={"Rs.1000.00"}  ></RoomCards></div>
                    <div className="md:w-1/4" ><ImgRoomCard image="https://i.redd.it/slja8x86d5n11.jpg" ></ImgRoomCard></div>
                    <div className="md:w-1/4"><RoomCards type={"Garden Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>
                    <div className="md:w-1/4"><ImgRoomCard image="https://i2.au.reastatic.net/800x600/da454e31c14de6d77b51d02581c114350aebfe81d8fa57efaecdae7fbddb7d1c/main.jpg" ></ImgRoomCard></div>
                </div>

                <div className=" flex flex-col md:flex-row pb-2 md:pb-0">



                    <div className="md:w-1/4"><ImgRoomCard image="https://media.designcafe.com/wp-content/uploads/2020/09/25151949/master-bedroom-2bhk-interior-ideas.jpg" ></ImgRoomCard></div>
                    <div className="md:w-1/4"><RoomCards type={"Loft Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>
                    <div className="md:w-1/4" ><ImgRoomCard image="https://www.cbreresidential.com/resources/fileassets/GB-ReapIT-cbrrps-WES210352/7a07bdc9/WES210352_16_Photo_2_large.jpg" ></ImgRoomCard></div>
                    <div className="md:w-1/4"><RoomCards type={"Convertible Apartment"} Rs={" Rs.5000.00"} ></RoomCards></div>
                </div>
            </div>

            <div className="pt-10 pb-10">
                <h1 className="text-center text-black font-semibold md:text-4xl text-2xl font-serif">In Spotlight</h1>
            </div>

            <Jumbotron2></Jumbotron2>

            <Jumbotron1></Jumbotron1>
            <iframe className="h-screen w-full p-10" src="https://www.youtube.com/embed/mb8s4Hsqzyw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <div className="pt-10">
                <h1 className="text-center text-black font-semibold md:text-3xl text-2xl font-serif">Our Team</h1>
            </div>
            <div className="md:flex pb-10 pt-10">
                <AgentCard name="Mitali Varshney" designation="MERN Stack Developer" imag="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"></AgentCard>
                <AgentCard name="Ayush Chauhan" designation="Full Stack Developer" imag="https://i.pinimg.com/originals/e0/d1/01/e0d1015b32d1aa7061c1b1aad06d916f.jpg"></AgentCard>
                <AgentCard name="Kanika Varshney" designation="Front End Developer" imag="http://www.helloproject.in/extra-images/profile-img-01.jpg"></AgentCard>
                <AgentCard name="Khushi Varshney" designation="UI UX Developer" imag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAL5lx462Rjn-dAsEQHumnRJATsXmXbP2mxHWzbFr_RKitmboHvkL-gnOFfOi-gbyZW60&usqp=CAU"></AgentCard>
            </div>

            <InstaHover />

            <Footer></Footer>
        </div>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);
