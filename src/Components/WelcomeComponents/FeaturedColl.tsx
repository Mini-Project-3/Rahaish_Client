import { FC, memo } from "react";
import WishlistCard from "../OtherComponents/WishlistCard";
interface Props {
}
const FeaturedColl: FC<Props> = (props) => {
    return (
        <div className="w-full">
            <div className="min-h-screen flex  justify-around items-center py-4">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    <WishlistCard
                        propertyName="Radha shayam valley"
                        location="Mathura"
                        price="5.7 k"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3IW4r8g_XvC4pqyv6RwUvkYU6SLQAA6TBQ&usqp=CAU"
                        type="Rent"
                        bed={3}
                        bath={2}
                        area={1200}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Ashiyana Builders"
                        location="Mathura"
                        price="65 lacs"
                        image="https://thumbs.dreamstime.com/b/modern-business-buildings-11681736.jpg"
                        type="Sale"
                        bed={4}
                        bath={2}
                        area={1900}
                    ></WishlistCard>
                    <WishlistCard
                        propertyName="Omax eternity"
                        location="Mathura"
                        price="4.5 k"
                        image="https://www.planradar.com/wp-content/uploads/2020/02/iStock-1093042428.jpg.webp"
                        type="Rent"
                        bed={3}
                        bath={1}
                        area={1100}
                    ></WishlistCard>
                </div>
            </div>
        </div>
    );
};
FeaturedColl.defaultProps = {
}
export default memo(FeaturedColl);