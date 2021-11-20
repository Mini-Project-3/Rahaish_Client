import { FC, memo } from "react";
interface Props {
}
const WelcomePage: FC<Props> = (props) => {
    return (
        <div>
            this is welcome page
        </div>
    );
};
WelcomePage.defaultProps = {
}
export default memo(WelcomePage);