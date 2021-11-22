import {FC, memo} from "react";
interface Props{
}
const BouncerCard: FC<Props> = (props) =>{
return (
 <div>
     <div className="flex  flex-col  sm:flex-row justify-center p-14 bg-gray-50  ">
  <div className="text-center">
    <img className="md:h-48 border-0 rounded-full md:w-48 mx-auto h-32 w-32" src="https://st4.depositphotos.com/1512153/i/600/depositphotos_253028086-stock-photo-man-using-tablet-on-wooden.jpg" alt="" />
    <p className="border-2 rounded-full md:w-11 md:p-2 md:h-11 h-8 w-8 px-1 py-0  border-green-600 bg-green-600 text-white mx-auto animate-bounce  ">1</p>
    <h1 className="font-bold font-serif md:text-xl text-base items-center text-center">Your Category</h1>
    <p className="text-gray-400 items-center pt-4 text-center pb-5 sm:pb-0">Rhoncus est pellen tesque elit ullam corper dignissin</p>
  </div>
  <div>
    <img className="md:h-48 border-0 rounded-full md:w-48 mx-auto h-32 w-32" src="https://image.freepik.com/free-photo/rear-view-man-sitting-chair-using-computer-office_23-2148164263.jpg" alt="" />
    <p className="border-2 rounded-full md:w-11 md:px-4 md:py-2 md:h-11 h-8 w-8 px-3 py-0 pl-3 mx-auto  border-green-600 bg-green-600 text-white  animate-bounce">2</p>
    <h1 className="font-bold font-serif md:text-xl text-base text-center">Real Estate</h1>
    <p className="text-gray-400 pt-4 text-center pb-5 sm:pb-0">Rhoncus est pellen tesque elit ullam corper dignissin</p>
  </div>
  <div>
    <img className="md:h-48 border-0 rounded-full md:w-48 mx-auto h-32 w-32" src="https://images.squarespace-cdn.com/content/v1/5cd8592daadd34286cabb67d/1585670106991-A3XO8XCW9OLO79J5CSFK/photo-of-people-doing-handshakes-3183197.jpg?format=1000w" alt="" />
    <p className="border-2 rounded-full md:w-11 md:px-4 md:py-2 md:h-11 h-8 w-8 px-3 py-0 pl-3   border-green-600 bg-green-600 text-white mx-auto animate-bounce">3</p>
    <h1 className="font-bold font-serif md:text-xl text-base text-center">Take The Keys</h1>
    <p className="text-gray-400 pt-4 text-center pb-5 sm:pb-0">Rhoncus est pellen tesque elit ullam corper dignissin</p>
  </div>
  <div className=" invisible md:invisible lg:visible absolute md:absolute lg:relative ">
    <img className="md:h-48 border-0 rounded-full md:w-48 mx-auto h-32 w-32" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_618547538_2000121520009280169_336140.jpg" alt="" />
    <p className="border-2 rounded-full md:w-11 md:px-4 md:py-2 md:h-11 h-8 w-8 px-3 py-0 pl-3 border-green-600 bg-green-600 text-white mx-auto animate-bounce">4</p>
    <h1 className="font-bold font-serif md:text-xl text-base text-center">Live Happy</h1>
    <p className="text-gray-400 pt-4 text-center pb-5 sm:pb-0">Rhoncus est pellen tesque elit ullam corper dignissin</p>
  </div>
</div>





 </div>
);
};
BouncerCard.defaultProps={
}
export default memo(BouncerCard);
export{};