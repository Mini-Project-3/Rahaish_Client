
import axios from "axios";
import { useFormik } from "formik";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { BASE_URL, LS_AUTH_TOKEN } from "../../Constants/constants";
interface Props {
}
const SignupPage: FC<Props> = (props) => {
	const { handleSubmit, getFieldProps, touched, errors, } = useFormik({
		initialValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			// c_password: ""
		},
		validationSchema: yup.object().shape({
			firstName: yup.string().matches(/^[A-Za-z ]*$/, 'Enter Alphabets only')
				.min(2, 'Too Short!')
				.max(50, 'Too Long!')
				.required('This field is required'),
			lastName: yup.string().matches(/^[A-Za-z ]*$/, 'Enter Alphabets only')
				.min(2, 'Too Short!')
				.max(50, 'Too Long!')
				.required('This field is required'),
			email: yup.string().required("This field is required").matches(/^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-z]+)$/, "Enter a valid email").email(() => "Enter a valid email"),
			password: yup.string().matches(
				/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
				"must contain at least 8 chars, 1 upper, 1 number and 1 special"
			).required("This field is required").min(8, ({ min }) => `Atleast ${min} characters`),
			// c_Password: yup.string().required('This field is required').oneOf([yup.ref("password"), null], "Passwords must match"),

		}),
		onSubmit: async (data) => {
			const url = BASE_URL + "/signup";
			const response = await axios.post(url, data);
			if (response.status === 200) {
				localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
				window.location.href = "/dashboard";
			} else {
				console.log("error");
			}
		},
	})
	return (
		<div>
			<body className="font-mono leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
				<div className="container mx-auto">
					<div className="flex justify-center px-6 my-12">
						<div className="w-full xl:w-3/4 lg:w-11/12 flex">
							<div
								className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
								style={{ backgroundImage: "url('https://www.smokecontrol.org.uk/client/news/Apartment-Buildings.jpg')" }}
							></div>
							<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
								<h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
								<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
									<div className="md:flex md:justify-between">
										<div className="flex flex-col">
											<div className="md:mr-2 md:mb-0">
												<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
													First Name
												</label>
												<input
													className="w-full hover:shadow-md px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
													id="firstName"
													type="text"
													placeholder="First Name"
													autoComplete="firstName"
													required
													{...getFieldProps("firstName")}
												/>
											</div>
											<div className="h-6 ">{touched.firstName && <div className=" text-red-500 text-xs">{errors.firstName}</div>}</div>
										</div>
										<div className="md:ml-2">
											<div className="flex flex-col">
												<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
													Last Name
												</label>
												<input
													className="w-full hover:shadow-md px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
													id="lastName"
													type="text"
													placeholder="Last Name"
													{...getFieldProps("lastName")}
												/>
											</div>
											<div className="h-6 ">{touched.lastName && <div className=" text-red-500 text-xs ">{errors.lastName}</div>}</div>
										</div>
									</div>
									<div className="">
										<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
											Email
										</label>
										<input
											className="w-full px-3 hover:shadow-md py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="email"
											type="email"
											placeholder="Email"
											{...getFieldProps("email")}
										/>
									</div>
									<div className="h-6 ">{touched.email && <div className=" text-red-500 text-xs ">{errors.email}</div>}</div>
									<div className="mb-4 md:flex md:justify-between">
										<div className="mb-4 md:mr-2 md:mb-0 ">
											<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
												Password
											</label>
											<input
												className="w-full hover:shadow-md px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
												id="password"
												type="password"
												placeholder="******************"
												{...getFieldProps("password")}
											/>
											<div className="h-8 ">{touched.password && <div className="text-red-500 text-xs">{errors.password}</div>}</div>
										</div>
										{/* <div className="md:ml-2 md:w-1/2">
											<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
												Confirm Password
											</label>
											<input
												className="w-full hover:shadow-md px-3 py-2  text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
												id="c_password"
												type="password"
												placeholder="******************"
												{...getFieldProps("c_password")}
											/>
										</div>
										<div className="h-8">{touched.c_password && <div className="text-red-500 text-xs">{errors.c_password}</div>}</div> */}
									</div>
									<div className="mb-6 text-center">
										<button
											className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
											type="submit"
										>
											Sign Up
										</button>
									</div>
									<hr className="mb-6 border-t" />
									<div className="text-center">
										<a
											className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
											href="/forgotPassword"
										>
											Forgot Password?
										</a>
									</div>
									<div className="text-center">
										<a
											className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
											href="/login"
										>
											Already have an account? Login!
										</a>
									</div>
									<div className="text-center pt-5 ">
										<Link to="/" className="underline rounded-md  inline-block text-lg  text-gray-900 align-baseline hover:text-blue-800">Back to Welcome Page</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</body>





		</div>
	);
}
SignupPage.defaultProps = {
}
export default memo(SignupPage);