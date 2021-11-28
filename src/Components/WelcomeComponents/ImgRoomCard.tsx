import { FC, memo } from "react";
interface Props {
    image: string
}
const ImgRoomCard: FC<Props> = (props) => {
    return (
        <div><img className={"md:h-72  "} src={props.image} alt="" /></div>
    );
};
ImgRoomCard.defaultProps = {
}
export default memo(ImgRoomCard);