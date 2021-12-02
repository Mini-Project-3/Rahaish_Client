import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { LS_AUTH_TOKEN, BASE_URL } from "../../Constants/constants";
interface Props {
}
const ProfileCard: FC<Props> = (props) => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  console.log("Token ", token)
  const [response, setResponse] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const url = BASE_URL + "/me";
      try {
        const response = await axios.get(url, { headers: { 'Content-Type': 'application/json', 'Authorization': token! } });
        setResponse(response.data)

      } catch (error) {
        console.log("Not able to fetch data")
      }
    }
    fetchData();
  }, [])
  return (
    <div className="mx-auto">
      <div className="flex justify-center flex-col sm:flex-row  h-full w-full items-center  ">
        <div className="">
          <img className="sm:h-80 h-72 sm:w-full  border-1 rounded-full border-gray-300 p-11" src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" alt="" />
        </div>
        <div className=" p-4 sm:p-0 ">
          <div className="flex space-x-9 sm:py-9 py-2 ">
            <div>
              <h1 className="font-serif font-semibold sm:text-3xl text-sm">{response?.firstName} {response?.lastName}</h1>
              <p className="text-gray-400 ">UP , India</p>
            </div>
            <button className="flex space-x-4 border-0  rounded-lg h-9 py-1 px-6 group hover:bg-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
              </svg>
              <p className="text-black text-center group-hover:text-white ">EDIT</p>
            </button>
          </div>
          <div className="flex space-x-11  pt-5 sm:pt-0 ">
            <div className="text-gray-400  ">
              <p className="py-1">Email</p>
              <p className="py-1">City</p>
              <p className="py-1">State</p>
              <p className="py-1">Country</p>
              <p className="py-1">Phone</p>
            </div>
            <div className="text-gray-500  font-bold">
              <p className="py-1">{response?.email}</p>
              <p className="py-1">Mathura</p>
              <p className="py-1">UP</p>
              <p className="py-1">India</p>
              <p className="py-1">+91 0123456789</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};
ProfileCard.defaultProps = {
}
export default memo(ProfileCard);