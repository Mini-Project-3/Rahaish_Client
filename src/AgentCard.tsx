import { FC, memo } from "react";
interface Props {
    name: string,
    imag?: string,
    designation: string
}
const AgentCard: FC<Props> = (props) => {
    return (
        <div className="w-full mt-5 lg:mt-0 lg:w-1/4">
            <div className="mx-auto"> 
                <div className="">
                    <img className="mx-auto h-48 w-44" src={props.imag} alt="" />
                </div>
                <h1 className="text-center text-purple-900 font-extrabold font-serif text-2xl mt-2">{props.name}</h1>
                <h2 className="text-center font-mono text-sm text-gray-600 mt-1">{props.designation}</h2>
            </div>
        </div>
    );
};
AgentCard.defaultProps = {
}
export default memo(AgentCard);