import { FC, memo } from "react";
interface Props {
    address:string,
    city:string,
}
const Map: FC<Props> = (props) => {
    return (
        <div>
            <iframe
                className="w-1/2 h-96 pt-4 "
                loading="lazy"
                allowFullScreen
                src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyC0wl6K0ld283MaUOGIRF8dD0DnQAkwo8k&q="+props.address+props.address}>
            </iframe>
        </div>
    );
};
Map.defaultProps = {
}
export default memo(Map);