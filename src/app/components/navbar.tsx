import Image from "next/image"
const Navbar = () => {
    return (
        <> 
        <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#000000] flex justify-between items-center">
            <div className="w-[191px] h-[34px]">
            
            </div>

            <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                <div className="w-[549px] h-[23px]">
                    <ul className="flex flex-row justify-between text-white">
                        <li className=" hover:text-yellow-500 hover:cursor-pointer hover:scale-110">Home</li>
                        <li className=" hover:text-yellow-500 hover:cursor-pointer hover:scale-110">Menu</li>
                        <li className=" hover:text-yellow-500 hover:cursor-pointer hover:scale-110">Blog</li>
                        <li className=" hover:text-yellow-500 hover:cursor-pointer hover:scale-110">Pages</li>
                        <li className=" hover:text-yellow-500 hover:cursor-pointer hover:scale-110">About</li>
                        <li className=" hover:text-yellow-500 hover:cursor-pointer hover:scale-110">Shop</li>

                    </ul>
                </div>

                <div className="w-[126px] h-[60px]">
                    <button className="px-10 py-4 rounded-lg bg-[#e4b98f] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300" >Foodtuck</button>
                </div>

            </div>
        </div>
        
        </>
    );
}
export default Navbar