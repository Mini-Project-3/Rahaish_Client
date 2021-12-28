import { FC, memo } from "react";
import WishlistCard from "../../Components/OtherComponents/WishlistCard";
interface Props {
}
const WishlistPage: FC<Props> = (props) => {
    return (
        <div className="w-full">
            <div className="min-h-screen flex  justify-around items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    <WishlistCard
                        propertyName="Radha shayam valley"
                        location="Mathura"
                        price="3.7 k"
                        image="https://is1-2.housingcdn.com/4f2250e8/c7c271c175cab8925188b5e187aaf929/v0/fs/anu_gowsalya_flats-medavakkam-chennai-anu_builders_pvt_ltd.jpeg"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Paradise Villa"
                        location="Alighar"
                        price="35 lakhs"
                        image="https://5.imimg.com/data5/KD/RX/YS/SELLER-27306064/flats-for-sale-at-multipara-500x500.jpg"
                        type="Sale"
                        bed={4}
                        bath={4}
                        area={1500}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Shayam valley"
                        location="Mathura"
                        price="4.5 k"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvBfDu6dZ_Timvx3TkqrxhvolOz8GcmYsaATkoPa1IVoElSKsPWC01Apc8cu2nif57J0&usqp=CAU"
                        type="Rent"
                        bed={4}
                        bath={5}
                        area={1000}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Radha valley"
                        location="Mathura"
                        price="3.7 k"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5wNyufr1Tf2GI5a45DrmIqMFueTAUfJB_w&usqp=CAU"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Shayam valley"
                        location="Mathura"
                        price="4.5 k"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgu6g0EDcefqKdtOeQeHLAfbTM-RESCRfHQ&usqp=CAU"
                        type="Rent"
                        bed={4}
                        bath={5}
                        area={1000}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="The Paradise"
                        location="Alighar"
                        price="35 lakhs"
                        image="https://is1-2.housingcdn.com/4f2250e8/b99c98d2f3b89e994b607314a3d1f892/v5/fs/ayya_aathiguru-velachery-chennai-ayya_flats__builder_pvt_ltd.jpg"
                        type="Sale"
                        bed={4}
                        bath={4}
                        area={1500}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Basera"
                        location="Noida"
                        price="56 lakhs"
                        image="https://is1-3.housingcdn.com/4f2250e8/d34af5a992d5eda29fc1924b6587329b/v0/fs/sri_agathiya_flats-vengaivasal_chennai-chennai-anu_builders_pvt_ltd.jpg"
                        type="Sale"
                        bed={4}
                        bath={2}
                        area={1600}
                    ></WishlistCard>
                </div>
            </div>
        </div>
    );
};
WishlistPage.defaultProps = {
}
export default memo(WishlistPage);