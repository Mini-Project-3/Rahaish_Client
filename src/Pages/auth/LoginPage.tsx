import axios from "axios";
import { useFormik } from "formik";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { BASE_URL, LS_AUTH_TOKEN } from "../../Constants/constants";
interface Props {
}
const LoginPage: FC<Props> = (props) => {
	const { handleSubmit, getFieldProps, touched, errors } = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema: yup.object().shape({
			email: yup.string().required("This field is required").matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/, "Enter a valid email").email(() => "Enter a valid email"),
			password: yup.string().required("This field is required").min(8, ({ min }) => `Atleast ${min} characters`)
		}),
		onSubmit: async (data) => {
			const url = BASE_URL + "/login";
			const response = await axios.post(url, data);
			if (response.status === 200) {
				localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
				window.location.href = "/forgotPassword";
			}
			else {
				console.log(response.data);
			}
		},
	})

	return (
		<div>
			<body className="font-mono ">
				<div className="container mx-auto">
					<div className="flex justify-center px-6 my-12">
						<div className="w-full xl:w-3/4 lg:w-11/12 flex">
							<div
								className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
								style={{ backgroundImage: "url('https://www.stratadata.com.au/wp-content/uploads/2017/03/StrataData-7-New-Design-Trends-for-Apartment-Complex-Living-in-2017.jpg')" }}
							></div>

							<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
								<h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
								<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
									<div className="">
										<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
											Email Address
										</label>
										<input
											className="w-full hover:shadow-md px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="email"
											type="text"
											placeholder="Email Address"
											//autoComplete="email"
											required
											{...getFieldProps("email")}

										/>
									</div>
									<div className="h-6 ">{touched.email && <div className=" text-red-500 text-xs ">{errors.email}</div>}</div>
									<div className="">
										<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
											Password
										</label>
										<input
											className="w-full hover:shadow-md px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="password"
											type="password"
											placeholder="******************"
											autoComplete="password"
											required
											{...getFieldProps("password")}
										/>

									</div>
									<div className="h-6">{touched.password && <div className="text-red-500 text-xs">{errors.password}</div>}</div>
									<div className="mb-4 flex items-center">
										<input className="mr-2 leading-tight  items-center" type="checkbox" id="checkbox_id" />
										<label className="text-sm" htmlFor="checkbox_id">
											Remember Me
										</label>
									</div>
									<div className="mb-6 text-center">
										<button
											className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
											type="submit"
										>
											Sign In
										</button>
									</div>
									<hr className="mb-6 border-t" />
									<div className="text-center">
										<a
											className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
											href="/signup"
										>
											Create an Account!
										</a>
									</div>
									<div className="text-center">
										<a
											className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
											href="/forgotPassword"
										>
											Forgot Password?
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
};
LoginPage.defaultProps = {
}
export default memo(LoginPage);