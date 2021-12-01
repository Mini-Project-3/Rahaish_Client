import { FC, memo } from "react";
import WelcomeNav from "../../Components/WelcomeComponents/WelcomeNav";
interface Props {
}
const Privacy: FC<Props> = (props) => {
    return (
        <div>
            <WelcomeNav></WelcomeNav>
            <div className="bg-primary h-20">
                <h1 className="font-extralight text-white text-center p-6 sm:text-3xl  text-xl">Your right to privacy is valued</h1>
            </div>
            <div className="sm:p-16 p-8">
                <h1 className="sm:text-xl  text-md pt-5 ">Rahaish website is owned and operated by Rahaish.com Pvt. Ltd.</h1>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm ">Rahaish.com Pvt. Ltd. has created this privacy statement in order to demonstrate our commitment to our user's privacy.</li>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm">We may use IP address to help diagnose problems with our server, and to administer our Web site. Your IP address may be also used to gather broad demographic information.</li>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm">Rahaish.com contains links to other websites.Rahaish.com Pvt. Ltd. is not responsible for the privacy practices or the content of such Web sites.</li>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm">We may use a third party ad company to display ads on makaan.com (e.g. Google Adsense). These ads may contain cookies. While we may use cookies in other parts of our Web site, cookies received with banner ads are collected by our ad company, and we do not have access to this information.</li>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm">Certifiable information is collected from users and/or registered members of makaan.com which includes, but may not be limited to</li>
                <li className="text-gray-700 list-disc sm:text-base text-sm pl-5">Email address.</li>
                <li className="text-gray-700 list-disc sm:text-base text-sm pl-5">Contact person name.</li>
                <li className="text-gray-700 list-disc sm:text-base text-sm pl-5">User-created password.</li>
                <li className="text-gray-700 list-disc sm:text-base text-sm pl-5">Mailing address</li>
                <li className="text-gray-700 list-disc sm:text-base text-sm pl-5">Pin code</li>
                <li className="text-gray-700 list-disc sm:text-base text-sm pl-5">Telephone number or other contact number</li>
                <li className="py-5 text-gray-70 list-disc sm:text-base text-sm">Except where you are explicitly informed, Rahaish.com Pvt. Ltd. does not sell, rent, share, trade or give away any of your personal information.</li>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm">Rahaish.com may tie-up with partners to bring you various services. However, we will never share your personal information, without your explicitly permission. Still, we encourage you to review the privacy policy of the partner for questions about their use, any personally identifiable information that you may separately submit to such partner.</li>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm">If we change our privacy policy, we will prominently post a link to those changes on our Homepage so you are always aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. If at any point we decide to use personally identifiable information in a manner materially different from that stated at the time it was collected, we will notify you by way of an email. We will give you a choice as to whether or not we can use information in this different manner and act accordingly.</li>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm">Quality is of paramount importance for our business, MPL will periodically verify the authenticity, availability and integrity of the content posted by the seller. If it is found that the content is not as per quality guideline or member is not available to answer the call, Makaan.com reserves the right to put the content on hold until the suggested resolution is verified. Repeated abuse of quality guidelines can lead to cancellation of product / services. In case of repeated abuse the amount paid will be forfeited and no refund request will be entertained.</li>
                <li className="py-5 text-gray-700 list-disc sm:text-base text-sm">MPL reserves the right to monitor / record calls between buyers and sellers for quality checks and monitoring purposes.If you have questions or concerns regarding this statement, please write to us:<button className="text-blue-700 underline">Contact Us</button></li>
            </div>
        </div >
    );
};
Privacy.defaultProps = {
}
export default memo(Privacy);
export { };