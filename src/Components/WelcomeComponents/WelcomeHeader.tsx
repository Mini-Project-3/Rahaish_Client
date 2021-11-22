import { FC, memo } from "react";
interface Props {
}
const WelcomeHeader: FC<Props> = (props) => {
    return (
        <div>
            <div className="w-full bg-cover bg-center bg-hero h-96">
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-3xl font-semibold uppercase md:text-3xl">An Emporium<span className="underline text-green-500 pl-2">RAHAISH</span></h1>
                        <h2 className="mt-4 px-4 py-2 bg-purple-500 text-white text-lg uppercase font-medium hover:bg-purple-400 focus:outline-none">Yahan Search Khatam Karo</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
WelcomeHeader.defaultProps = {
}
export default memo(WelcomeHeader);