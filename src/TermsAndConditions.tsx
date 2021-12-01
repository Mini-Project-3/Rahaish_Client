import { FC, memo } from "react";
interface Props {
}
const TermsAndConditions: FC<Props> = (props) => {
    return (
        <div>
            <div className="bg-red-600 h-20">
                <h1 className="font-extralight text-white text-center p-5 sm:text-4xl  text-3xl">The fine print</h1>
            </div>
            <div className="p-14">
                <h1 className="font-semibold sm:text-2xl text-lg pb-3">Terms of use</h1>
                <div className=" w-full hover:shadow-md rounded-md cursor-pointer h-1/2  ">
                    <div className=" group w-full  p-3 border-2 bg-gray-200 border-gray-300  ">
                        <h1 className="font-semibold text-lg group-hover:text-red-600 pb-5 ">Contract</h1>
                        <div className=" text-gray-800 text-sm sm:text-base ">
                            <p>Welcome to Rahaish.com! We are a digital real estate advertising / marketing and information services platform connecting people with the real estate market.Rahaish.com and our subsidiaries and affiliates (collectively the “Company” or "Rahaish.com" ) provide you with access to a variety of services, including but not limited to the www.Rahaish.com website (the "Website" ) and Rahaish.com's mobile applications (the “Mobile App” ) and all the products and services available through our Website and Mobile App (collectively the "Services"). The Website and Mobile App is owned and operated by Makaan.com Private Limited, a company incorporated under the laws of India.</p>
                        </div>
                    </div>
                </div>

                <div className=" w-full hover:shadow-md rounded-md cursor-pointer pt-4 ">
                    <div className=" group w-full  p-3 border-2 bg-gray-200 border-gray-300 ">
                        <h1 className="font-semibold text-lg group-hover:text-red-600 pb-5 ">To whom does this policy apply?</h1>
                        <div className=" text-gray-800 text-sm sm:text-base ">
                            <p>Some parts of this Policy are directed at specific types of people. We use some special terminology to refer to them, which we define below. This Policy applies to everyone who uses our Services, but sometimes we direct parts of it toward particular groups of users.
                                Users: "Users" are everyone who uses our Services.

                                Real Estate Professionals (REPs): "Real Estate Professionals," or "REPs" are users who have created accounts (free or paid) with us to avail our advertising services, and avail our other Services that we direct towards the professional real estate community. REPs include landlords, agents, developers, institutional property consultants, mortgage professionals and other service providers.</p>
                        </div>
                    </div>
                </div>

                <div className=" w-full hover:shadow-md rounded-md cursor-pointer  pt-4">
                    <div className=" group w-full  p-3 border-2 bg-gray-200 border-gray-300 ">
                        <h1 className="font-semibold text-lg group-hover:text-red-600 pb-5 ">Why we collect information from you?</h1>
                        <div className=" text-gray-800  text-sm sm:text-base">
                            <p>Makaan.com provides digital real estate advertising / marketing and information services through its Website, Mobile App and other services. To provide our Services, we use the information we collect to:

                                Help you find the most relevant information for your situation by customizing our Services to optimize your experience.

                                Keep you connected with Makaan.com across the internet and update you with residential real estate-related news and information.

                                Put you in touch with the right people to sell, buy, rent, or research residential real estate, obtain a mortgage, avail related services and to optimize the information we share with those parties to initiate a productive and efficient relationship.</p>


                        </div>
                    </div>
                </div>

                <div className=" w-full hover:shadow-md rounded-md cursor-pointer pt-4 ">
                    <div className=" group w-full  p-3 border-2 bg-gray-200 border-gray-300 ">
                        <h1 className="font-semibold text-lg group-hover:text-red-600 pb-5 ">General matters</h1>
                        <div className=" text-gray-800 text-sm sm:text-base ">
                            <p>The accuracy and confidentiality of your account information is your responsibility: You are responsible for maintaining the secrecy and accuracy of your password, email address, and other account information at all times. We recommend a strong password that you do not use with other services. We are not responsible for personal data transmitted to a third party as a result of an incorrect email address or loss of passwords from you.</p>

                        </div>
                    </div>
                </div>

                <h1 className=" font-semibold sm:text-2xl text-lg pb-3 pt-4">Terms of broker Signup</h1>
                <div className=" w-full hover:shadow-md rounded-md cursor-pointer pt-4 ">
                    <div className=" group w-full  p-3 border-2 bg-gray-200 border-gray-300 ">
                        <h1 className="font-semibold text-lg group-hover:text-red-600 pb-5 ">Eligibility</h1>
                        <div className=" text-gray-800 text-sm sm:text-base ">
                            <p>You can become a registered broker on Makaan.com by successfully registering on the website www.makaan.com. For using this site you must be eligible to enter into, execute and abide the terms of this contract as per the applicable laws of India. Your registration on Makaan.com will mean that that you will abide by all of the terms of this Agreement.

                                You will inform Makaan.com of your subsequent disability to enter into any contract. In the event of such subsequent disability, Makaan.com will be entitled to restrict/change/terminate this agreement at its own discretion with or without any notice to you. Access rights to the Makaan.com services may also be withdrawn.</p>


                        </div>
                    </div>
                </div>
                <div className=" w-full hover:shadow-md rounded-md cursor-pointer pt-4 ">
                    <div className=" group w-full  p-3 border-2 bg-gray-200 border-gray-300 ">
                        <h1 className="font-semibold text-lg group-hover:text-red-600 pb-5 ">Free Consent</h1>
                        <div className=" text-gray-800  text-sm sm:text-base">
                            <p>You agree with a sound mind, without undue force, pressure or coercion on you - that your registration as a Broker on Makaan.com is your complete unqualified acceptance, relating to various terms detailed in this Agreement. You further undertake that in case of any dispute relating to this Contract the exclusive jurisdiction to file law suits against you shall be in the courts at GURGAON only.</p>


                        </div>
                    </div>
                </div>
                <div className=" w-full hover:shadow-md rounded-md cursor-pointer pt-4 ">
                    <div className=" group w-full  p-3 border-2 bg-gray-200 border-gray-300 ">
                        <h1 className="font-semibold text-lg group-hover:text-red-600 pb-5 ">Seller score</h1>
                        <div className=" text-gray-800 text-sm sm:text-base ">
                            <p>Rahaish.com may decide to assign a score called Seller Score to Broker based on quality of listings and their conduct/interaction with customers. You also agrees to grant a license to Makaan.com to display the seller score to users on any of its platforms.</p>


                        </div>
                    </div>
                </div>
                <div className=" w-full hover:shadow-md rounded-md cursor-pointer pt-4 ">
                    <div className=" group w-full  p-3 border-2 bg-gray-200 border-gray-300 ">
                        <h1 className="font-semibold text-lg group-hover:text-red-600 pb-5 ">Applicable Laws</h1>
                        <div className=" text-gray-800 text-sm sm:text-base ">
                            <p>The Parties agree that all matters related to this Agreement shall be governed by the Laws of India each Party irrevocably consents to the exclusive jurisdiction of the state of Haryana with respect to any action brought in connection with this Agreement.</p>


                        </div>
                    </div>
                </div>





            </div>


        </div>

    );
};
TermsAndConditions.defaultProps = {
}
export default memo(TermsAndConditions);
export { };