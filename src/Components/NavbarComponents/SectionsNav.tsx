import { FC, memo } from "react";
interface Props {
}
const SectionsNav: FC<Props> = (props) => {
    return (
        <div className=" ">
            <div className=" border-t-2 invisible absolute md:relative z-20 bg-white  top-0 md:visible  border-b-2 border--gray-300 text-lg font-medium flex flex-col md:flex-row  list-none md:space-x-8 uppercase p-2 md:p-3 justify-center">
                <li className=""><a href="#overview">Overview</a></li>
                <li className=""><a href="#furnishing">furnishings</a></li>
                <li className=""><a href="#amenities">Social Amenities</a></li>
                <li className=""><a href="#ques_ans">Project Q&A</a></li>
                <li className=""><a href="#locality">Locality</a></li>
                <li className=""><a href="#curated">Curated Solutions</a></li>
            </div>
        </div>
    );
};
SectionsNav.defaultProps = {
}
export default memo(SectionsNav);