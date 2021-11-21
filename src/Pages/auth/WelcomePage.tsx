import { FC, memo } from "react";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <div>
            this is welcome
        </div>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);