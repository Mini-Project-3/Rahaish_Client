import axios from "axios";
import { useFormik } from "formik";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../Constants/constants";
interface Props {


}
const UploadFlat: FC<Props> = (props) => {

    const { handleSubmit, getFieldProps } = useFormik({
        initialValues: {
            name: "",
            rent: "",
            address: "",
            city: "",
            contact: "",
            area: "",
            floor: "",
            bedroom: "",
            bathroom: "",
            status: "",
            furnishing: "",
            description: "",
            // fileUpload: "",
        },
        onSubmit: async (data) => {
            const url = BASE_URL + "/flat-upload";
            const response = await axios.post(url, data);
            window.location.href = "/dashboard"
            alert("Your flat uploaded successfully")
        },
    }
    )

    return (
        <div className="flex space-x-4 mx-auto justify-center font-mono  ">
            <div className="invisible lg:visible absolute lg:relative  w-1/2  mt-10  "><img className="p-10 h-full" src="https://profiles.sulekha.com/mstore/24036103/albums/default/thumbnailfull/flats.jpg" alt="" /></div>
            <section className="max-w-2xl  lg:p-5 w-full lg:w-1/2 md:pl-6  bg-secondary rounded-md shadow-md dark:bg-gray-800 mt-4">
                <h1 className=" font-semibold text-2xl text-center text-gray-700 capitalize dark:text-white">Upload Your Flat</h1>
                <form className="p-2 md:p-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2">

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Name of Flat</label>
                            <input id="name" required {...getFieldProps("name")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Flat Name" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Rent</label>
                            <input id="rent" required {...getFieldProps("rent")} type="text" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Rent/month" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Address</label>
                            <input id="address" required {...getFieldProps("address")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Address" />
                        </div>
                        <div>
                            <label className=" text-sm font-bold text-gray-700" >City</label>
                            <input id="city" required {...getFieldProps("city")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter City" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Contact Number</label>
                            <input id="contact" required {...getFieldProps("contact")} type="text" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Your Contact number" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Area of House</label>
                            <input id="area" required {...getFieldProps("area")} type="text" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter area (sqft)" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Floor of Flat</label>
                            <input id="floor" required {...getFieldProps("floor")} type="number" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter No. of floor" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >No. of Bedrooms</label>
                            <input id="bedroom" required {...getFieldProps("bedroom")} type="number" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter No. of bedrooms" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >No. of Bathrooms</label>
                            <input id="bathroom" required {...getFieldProps("bathroom")} type="number" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter No. of bathrooms" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Status</label>
                            <input id="status" required {...getFieldProps("status")} type="text" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Completed  or under construction or furnished" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Furnishing</label>
                            <input id="furnishing" required {...getFieldProps("furnishing")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="furnished or unfurnished" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Description</label>
                            <textarea id="description" required {...getFieldProps("description")} className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Not more than 50 words..."></textarea>
                        </div>
                        {/* <div>
                            <label className="block  text-sm font-bold text-gray-700">
                                Images
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-sm font-bold text-gray-700" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="fileUpload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input id="fileUpload" {...getFieldProps("fileUpload")} name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1 text-sm font-bold text-gray-700">or drag and drop</p>
                                    </div>
                                    <p className="text-sm font-bold text-gray-700">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        <div className="flex justify-end md:mt-36">
                            <a href="#"><span className="px-6 py-2 leading-5 text-sm font-bold text-white transition-colors duration-200 transform bg-primary rounded-md bg-purple-600 hover:bg-purple-800 focus:outline-none focus:bg-gray-600"><button type="submit">Upload & Submit</button></span> </a>
                        </div>
                    </div>


                </form>
            </section>
        </div>
    );
};
UploadFlat.defaultProps = {
}
export default memo(UploadFlat);
export { };