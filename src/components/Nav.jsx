 import {NavLink} from 'react-router-dom'
  import moduleName from './Login'
  import LogOutButton from './LogOutButton'
  import SingUp from './SingUp'
  import Profile from './Profile'
  import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Login from './Login'


  function Nav() {
    
    const {isAuthenticated}=useAuth0()
    console.log(isAuthenticated)


  return (
  
    <div>
    
      <header className="text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-azulmarino rounded-lg border-2 border-black">
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <div className="w-20 h-20 overflow-hidden">
              <img
                src="https://i.ibb.co/Bzm3nZQ/health-Care-logo.jpg"
                alt="Logo"
                className="w-800 h-full rounded-lg border-2 border-black"
              />
            </div>
            <span className="ml-2 mr-4 sm:text-4xl italic ">HEALTHCARE</span>
          </a>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            <NavLink 
              className="mr-4  hover:bg-slate-400 border-2 rounded-md border-black px-5 text-base font-extralight" to="/">
              Home
            </NavLink>  
            <NavLink className="mr-4  hover:bg-slate-400 border-2 rounded-md border-black px-5 text-base font-extralight" to={isAuthenticated? "/services " : "/Singerror"} >
              Services
            </NavLink>
            <NavLink className="mr-4  hover:bg-slate-400 border-2 rounded-md border-black px-5 text-base font-extralight" to="/About">
              About us
            </NavLink>
            <NavLink className="mr-6  hover:bg-slate-400 border-2 rounded-md border-black px-5 text-base font-extralight" to="/contact">
              Contact us
            </NavLink>
            <NavLink className="mr-3  hover:bg-slate-400 border-2 rounded-md border-black px-5 text-base font-extralight" to="/frequentQ">
              Frequent Q
            </NavLink>
          </nav>
          

          {isAuthenticated?<LogOutButton></LogOutButton> :<SingUp> </SingUp> }
          {isAuthenticated? <Profile></Profile> : <Login></Login> }
  
          
        </div>
      </header>
    </div>
  );
  
}
export default Nav;