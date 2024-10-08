import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../Hooks/useAuth";
import { IoIosLogIn } from "react-icons/io";
import DarkMode from "../../Shared/DarkMode/DarkMode";
import logo from '../../../assets/Images/logo.png'
// import useAdmin from "../../../Hooks/useAdmin";
import profile from '../../../assets/Images/profile.png'



const NavBar = () => {
  const { user, logOutUser } = useAuth();
  // const [isAdmin] = useAdmin();
  // const isAdmin = false;

  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        console.log('User Logged Out')
      })
  }


  const links = (
    <div className="text-black font-medium flex flex-col lg:flex-row gap-5">
      <NavLink className="px-5 text-lg" to="/">
        Home
      </NavLink>
      <NavLink className="px-5 text-lg" to="/about">
        About
      </NavLink>
      <NavLink className="px-5 text-lg" to="/contact">
        Contact
      </NavLink>
    </div>
  );
  return (
    <>
      <div className="navbar bg-[#FAE94E] fixed max-w-screen-xl mx-auto  z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 scale-125 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <nav
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow-2xl border border-gray-300 bg-gray-100  rounded-box w-28"
            >
              {links}
            </nav>
          </div>
          <Link to={`/`} className="btn btn-ghost text-[#F97316] text-2xl font-bold p-0 ">
            <img src={logo} className="w-10" />
            Easy Buy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="menu menu-horizontal px-1">{links}</nav>
        </div>
        <div className="navbar-end">
          <div className="mt-4 mr-4"><DarkMode></DarkMode></div>
          {
            user ?
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn rounded-full p-1 ">
                  <img src={profile} className="w-10 rounded-full" />
                </div>
                <ul tabIndex={0} className="dropdown-content border mt-1 z-50 menu p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                  <li className="font-semibold text-xl pl-1">{user.displayName}</li>
                  {/* {
                    isAdmin ?
                      <li><Link className="btn btn-primary border-none bg-orange-500 text-white">Dashboard</Link></li>
                      :
                      <li><Link  className="btn btn-primary border-none bg-orange-500 text-white">Profile</Link></li>
                  } */}
                  <li>
                    {
                      user ?
                        <button onClick={handleSignOut} to={`/sign-in`} className="btn btn-primary border-none bg-orange-500 text-white">
                          Sign Out
                        </button>
                        :
                        <Link to={`/sign-in`} className="btn btn-primary border-none bg-orange-500 text-white">
                          Sign In
                        </Link>
                    }
                  </li>
                </ul>
              </div>
              :
              <Link to={`/signIn`} className=" text-2xl  p-2 rounded-lg  bg-orange-500 text-white"><IoIosLogIn></IoIosLogIn> </Link>
          }

        </div>
      </div>
    </>
  );
};

export default NavBar;
