import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to= '/'>Home</NavLink></li>
        <li><NavLink to = '/statistics' >Statistics</NavLink></li>
        <li><NavLink to= '/applied'>Applied Jobs</NavLink></li>
        <li><NavLink to= 'blogs'>Blogs</NavLink></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold ">Job<span className="text-violet-400">Portal</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to= '/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to= '/applied'>Applied Jobs</NavLink></li>
        <li><NavLink to= 'blogs'>Blogs</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-active bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 text-white">Start Applying</button>
  </div>
</div>
    );
};

export default Navbar;