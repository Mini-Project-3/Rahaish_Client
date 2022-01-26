import { FC, memo } from "react";
interface Props {
    address: string,
    city: string,
}
const Map: FC<Props> = (props) => {
    return (
        <div>
            <iframe
                className="w-full h-96 pt-4 "
                loading="lazy"
                title="map location"
                allowFullScreen
                src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyC0wl6K0ld283MaUOGIRF8dD0DnQAkwo8k&q=" + props.address + props.city}>
            </iframe>
        </div>
    );
};
Map.defaultProps = {
}
export default memo(Map);