import { useFormik } from "formik";
import { FC, memo } from "react";
interface Props {
}
const UploadPlot: FC<Props> = (props) => {
    const { handleSubmit, getFieldProps } = useFormik({
        initialValues: {
            name: "",
            owner: "",
            address: "",
            city: "",
            contact: "",
            openFaces: "",
            length: "",
            width: "",
            description: "",
            // fileUpload: "",
        },
        onSubmit: (data) => {
            console.log(data)
        },
    }
    )

    return (
        <div className="flex space-x-4 font-mono mx-auto">
            <div className="invisible lg:visible absolute lg:relative  w-1/2 mx-auto  mt-10  "><img className=" p-10 h-full" src="https://www.novalifespace.in/blog/wp-content/uploads/2020/07/plots-for-sale-in-ayanambakkam.jpeg" alt="" /></div>
            <section className="max-w-2xl  lg:p-5 w-full lg:w-1/2  md:pl-6  bg-secondary rounded-md shadow-md dark:bg-gray-800 mt-4">
                <h1 className=" font-semibold text-2xl text-center text-gray-700 capitalize dark:text-white">Upload Your Plot</h1>
                <form className="  p-2 md:p-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 mx-auto gap-3 mt-4 sm:grid-cols-2">


                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Name of Property</label>
                            <input id="name" required {...getFieldProps("name")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Property Name" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Name of Owner</label>
                            <input id="owner" required {...getFieldProps("owner")} type="text" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Owner Name" />
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
                            <label className=" text-sm font-bold text-gray-700" >Open faces</label>
                            <input id="openFaces" required {...getFieldProps("openFaces")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter the Open Faces" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Length(sq.ft)</label>
                            <input id="length" required {...getFieldProps("length")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter the length" />
                        </div>
                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Width(sq.ft)</label>
                            <input id="width" required {...getFieldProps("width")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter the width" />
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Description</label>
                            <textarea id="description" required {...getFieldProps("description")} className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Not more than 50 words..."></textarea>
                        </div>
                        <div>
                            <label className="block  text-sm font-bold text-gray-700">
                                Images
                            </label>
                            {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-sm font-bold text-gray-700" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="fileUpload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input required id="fileUpload" {...getFieldProps("fileUpload")} name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1 text-sm font-bold text-gray-700">or drag and drop</p>
                                    </div>
                                    <p className="text-sm font-bold text-gray-700">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div> */}
                        </div>
                        <div className="flex md:mt-18">
                            <a href="#"><span className="px-6 py-2 leading-5 text-sm font-bold text-white transition-colors duration-200 transform bg-primary rounded-md bg-purple-600 hover:bg-purple-800 focus:outline-none focus:bg-gray-600"><button type="submit">Upload & Submit</button></span> </a>
                        </div>
                    </div>

                </form>
            </section>
        </div>
    );



};
UploadPlot.defaultProps = {
}
export default memo(UploadPlot);