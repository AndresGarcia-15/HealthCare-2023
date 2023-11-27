import Footer from '../Footer'
import Login from '../Login'
import {NavLink} from 'react-router-dom'

function SingInError() {
    
   return( 
   <div>
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-black body-font text-3xl">You can't do this </h1>
            
            <p className="mb-12 text-center text-black body-fontnc text-1xl">
            You have to log in first
            </p>
            <NavLink className=" bg-azulmarino border-2 mb-4 border-slate-700  py-2 px-9   hover:bg-slate-400 rounded  mx-3 font-weight-bold " to="/">
            Go Home
            </NavLink> 
            <Login/>


              

          </div>
          <div className="mt-4">
            <img
              src="https://cdn.icon-icons.com/icons2/621/PNG/512/key-black-silhouette-interface-symbol-for-login_icon-icons.com_56953.png"
              alt="img"
              className="object-cover  w-1/2 ml-20 mt-16 "
            />
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>

    
   )

}
export default SingInError