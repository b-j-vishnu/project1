import searchIcon from "../Images/search.png";
import notifyIcon from "../Images/notifiy.png";
import userIcon from "../Images/user.png";

const Header = () => {
  return (
    <div className="md:w-[93%] z-50 px-4 lg:w-[80%]  fixed top-0 right-0  flex justify-center bg-gray-100">
      <div className=" w-full  flex justify-between items-center  h-16 bg-[#CDEEFF]  md:px-4 lg:px-6 rounded-md">
        <section className="flex flex-col justify-center items-center">
          <p className="poppins-bold">Hello Thilak</p>
          <p className="poppins-regular">Good Morning</p>
        </section>
        <section className="h-1/2 flex items-center md:w-1/4 lg:w-1/5 bg-white px-2 rounded-lg">
          <img src={searchIcon} className=" md:w-4 lg:w-5"></img>
          <input
            type="text"
            className="outline-none block mx-2 py-0 focus:ring-0  border-none w-full"
            autoComplete="off"
            placeholder="Search..."
          />
        </section>
        <section className="flex lg:w-1/4 items-center justify-around h-1/2">
          <img src={notifyIcon} className="md:w-5 lg:w-7"></img>
          <div className="flex  items-center justify-around">
            <img src={userIcon} className="md:w-9 lg:w-12"></img>
            <div className="flex flex-col mx-2 justify-center items-center">
              <p className="poppins-bold">Thilak</p>
              <p className="poppins-regular">Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
