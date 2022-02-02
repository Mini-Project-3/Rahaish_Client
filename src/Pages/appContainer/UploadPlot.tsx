import axios from "axios";
import { useFormik } from "formik";
import { FC, memo } from "react";
import { BASE_URL } from "../../Constants/constants";
import * as yup from "yup";
interface Props {
}
const UploadPlot: FC<Props> = (props) => {
    const { handleSubmit, getFieldProps  , touched, errors } = useFormik({
        initialValues: {
            name: "",
            price: "",
            address: "",
            city: "",
            contact: "",
            area: "",
            openFaces: "",
            length: "",
            width: "",
            description: "",
            status:"",
            // fileUpload: "",
        },
        validationSchema: yup.object().shape({
            name:yup.string().matches(/^[A-Za-z ]*$/, 'Enter Alphabets only')
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('This field is required'),
            price: yup.string().matches(/^[0-9\.]+$/, 'Enter Numbers only').required('This field is required'),
            address: yup.string()
            .min(2, 'Too Short!')
            .max(25, 'Too Long!')
            .required('This field is required'),
            city:yup.string().matches(/^[A-Za-z ]*$/, 'Enter Alphabets only')
            .min(3, 'Not a valid city')
            .max(10, 'Enter a valid city')
            .required('This field is required'),
            contact:yup.string().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Enter a valid number")
            .min(10, 'Enter a valid number')
            .max(13,"Not a valid number")
            .required('This field is required'),
            area: yup.string().matches(/^[0-9\.]+$/, 'Enter Numbers only')
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('This field is required'),
            status: yup.string().matches(/^[A-Za-z ]*$/, 'Enter Alphabets only').required('This field is required').max(15,"Only 15 characters allowed"),
            openFaces: yup.string().matches(/^[0-9 ]*$/, 'Enter Number only').required('This field is required').max(4, "Not more than 4"),
            length:  yup.number().required('This field is required'),
            width: yup.number().required('This field is required'),
            description: yup.string().required('This field is required').max(150,"Not more than 150"),
		}),
        onSubmit: async (data) => {
            const url = BASE_URL + "/plot-upload";
            await axios.post(url, data);
            window.location.href = "/dashboard"
            alert("Your plot uploaded successfully")
        },
    }
    )

    return (
        <div className="flex space-x-4 font-mono mx-auto">
            <div className="invisible lg:visible absolute lg:relative  w-1/2 mx-auto   "><img className=" p-10 h-full" src="https://www.novalifespace.in/blog/wp-content/uploads/2020/07/plots-for-sale-in-ayanambakkam.jpeg" alt="" /></div>
            <section className="max-w-2xl  lg:p-5 w-full lg:w-1/2  md:pl-6  bg-secondary rounded-md shadow-md dark:bg-gray-800 mt-4">
                <h1 className=" font-semibold text-2xl text-center text-gray-700 capitalize dark:text-white">Upload Your Plot</h1>
                <form className="  p-2 md:p-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 mx-auto gap-3  sm:grid-cols-2">

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Name of Plot</label>
                            <input id="name" required {...getFieldProps("name")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Plot Name" />
                            <div className="h-1">{touched.name && <div className=" text-red-500 text-xs">{errors.name}</div>}</div>
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Price</label>
                            <input id="price" required {...getFieldProps("price")} type="text" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Price" />
                            <div className="h-1">{touched.price && <div className=" text-red-500 text-xs">{errors.price}</div>}</div>
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Address</label>
                            <input id="address" required {...getFieldProps("address")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Address" />
                            <div className="h-1">{touched.address && <div className=" text-red-500 text-xs">{errors.address}</div>}</div>
                        </div>
                        <div>
                            <label className=" text-sm font-bold text-gray-700" >City</label>
                            <input id="city" required {...getFieldProps("city")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter City" />
                            <div className="h-1">{touched.city && <div className=" text-red-500 text-xs">{errors.city}</div>}</div>
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Contact Number</label>
                            <input id="contact" required {...getFieldProps("contact")} type="text" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Your Contact number" />
                            <div className="h-1">{touched.contact && <div className=" text-red-500 text-xs">{errors.contact}</div>}</div>
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Area</label>
                            <input id="area" required {...getFieldProps("area")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter Area (sqft)" />
                            <div className="h-1">{touched.area && <div className=" text-red-500 text-xs">{errors.area}</div>}</div>
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Length</label>
                            <input id="length" required {...getFieldProps("length")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter the length (feets)" />
                            <div className="h-1">{touched.length && <div className=" text-red-500 text-xs">{errors.length}</div>}</div>
                        </div>
                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Width</label>
                            <input id="width" required {...getFieldProps("width")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter the width (feets)" />
                            <div className="h-1">{touched.width && <div className=" text-red-500 text-xs">{errors.width}</div>}</div>
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Open faces</label>
                            <input id="openFaces" required {...getFieldProps("openFaces")} type="text" className="block w-full px-3 py-2 hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter the Open Faces" />
                            <div className="h-1">{touched.openFaces && <div className=" text-red-500 text-xs">{errors.openFaces}</div>}</div>
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Status</label>
                            <input id="status" required {...getFieldProps("status")} type="text" className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Boundary or Not" />
                            <div className="h-1">{touched.status && <div className=" text-red-500 text-xs">{errors.status}</div>}</div>
                        </div>

                        <div>
                            <label className=" text-sm font-bold text-gray-700" >Description</label>
                            <textarea id="description" required {...getFieldProps("description")} className="block w-full px-3 py-2  hover:shadow-md  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Not more than 50 words..."></textarea>
                            <div className="h-1">{touched.description && <div className=" text-red-500 text-xs">{errors.description}</div>}</div>
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
                                            <input required id="fileUpload" {...getFieldProps("fileUpload")} name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1 text-sm font-bold text-gray-700">or drag and drop</p>
                                    </div>
                                    <p className="text-sm font-bold text-gray-700">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        <div className="flex justify-end">
                            <button type="submit"><span className="px-6 py-3 leading-5 text-sm font-bold text-white transition-colors duration-200 transform bg-primary rounded-md bg-purple-600 hover:bg-purple-800 focus:outline-none focus:bg-gray-600">Upload & Submit</span></button>
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