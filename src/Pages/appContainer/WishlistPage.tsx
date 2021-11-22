import { FC, memo } from "react";
import WishlistCard from "../../Components/DashboardComponents/WishlistCard";
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
                        image="https://thumbs.dreamstime.com/b/modern-business-buildings-11681736.jpg"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Radha shayam valley"
                        location="Mathura"
                        price="3.7 k"
                        image="https://thumbs.dreamstime.com/b/modern-business-buildings-11681736.jpg"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Radha shayam valley"
                        location="Mathura"
                        price="3.7 k"
                        image="https://thumbs.dreamstime.com/b/modern-business-buildings-11681736.jpg"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Radha shayam valley"
                        location="Mathura"
                        price="3.7 k"
                        image="https://thumbs.dreamstime.com/b/modern-business-buildings-11681736.jpg"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Radha shayam valley"
                        location="Mathura"
                        price="3.7 k"
                        image="https://thumbs.dreamstime.com/b/modern-business-buildings-11681736.jpg"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Radha shayam valley"
                        location="Mathura"
                        price="3.7 k"
                        image="https://thumbs.dreamstime.com/b/modern-business-buildings-11681736.jpg"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                </div>
            </div>
        </div>
    );
};
WishlistPage.defaultProps = {
}
export default memo(WishlistPage);