import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import Formulariocita from "./form/formulariocita";
import Laboratory from "./form/laboratory";
import Diagnostic from "./form/diagnostic";
import HistorialM from "./form/historialM";
import Bill from "./form/bill";
const Blocks = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    if (isAuthenticated && user?.sub) {
      const userId = encodeURIComponent(user.sub);
      fetch(`https://api-healtcare-ultima.onrender.com/api/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('API data:', data);
          setUserType(data[3]);
        })
        .catch((error) => console.error("Error fetching user type:", error));
    }
  }, [user, isAuthenticated]);

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap m-0">
          {(userType === "admin" || userType === "patient") && (
            <>
              {userType === "admin" && (
                <>
                  <div className="p-5 lg:w-1/4 hover:border-2 border-black">
                    <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
                      <img
                        src="https://icones.pro/wp-content/uploads/2022/08/icone-du-calendrier-des-evenements-noir.png"
                        alt="Logo "
                        className="w-36 m-auto"
                      />
                      <button className="text-3xl mt-3">
                        <Formulariocita></Formulariocita>
                      </button>
                    </div>
                  </div>
                  <div className="p-5 lg:w-1/4 hover:border-2 border-black">
                    <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/404/404042.png"
                        alt="Logo "
                        className="w-36 m-auto"
                      />
                      <button className="text-3xl mt-3">
                        <HistorialM></HistorialM>
                      </button>
                    </div>
                  </div>
                  <div className="p-5 lg:w-1/4 hover:border-2 border-black">
                    <div className="h-full bg-azulmarino bg-opacity-75 py-5 px-8  rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/33/33819.png"
                        alt="Logo "
                        className="w-36 mt-10 ml-8"
                      />
                      <button className="text-3xl mt-3">
                        <Laboratory></Laboratory>
                      </button>
                    </div>
                  </div>
                  <div className="p-5 lg:w-1/4 hover:border-2 border-black">
                    <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
                      <img
                        src="  https://cdn-icons-png.flaticon.com/512/3789/3789786.png"
                        alt="Logo "
                        className="w-36 m-auto"
                      />
                      <button className="text-3xl mt-3">
                        <Diagnostic></Diagnostic>
                      </button>
                    </div>
                  </div>
                </>
              )}

              {userType === "patient" && (
                <>
                  <div className="p-4 lg:w-1/4 hover:border-2 border-black">
                    <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
                      <img
                        src="https://images.vexels.com/media/users/3/143466/isolated/preview/b47bfb19d11e66c3be00ccb0632047ce-lupa-simple.png"
                        alt="Logo "
                        className="w-36 m-auto"
                      />
                      <nav>
                        <NavLink className="text-3xl mt-3" to="/Search">
                          SEARCH AN APPOINTMENT
                        </NavLink>
                      </nav>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 hover:border-2 border-black">
                    <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3622/3622063.png"
                        alt="Logo "
                        className="w-36 m-auto"
                      />
                      <nav>
                        <NavLink className="text-3xl mt-3" to="/Viewhistorial">
                          VIEW YOUR MEDICAL HISTORIAL
                        </NavLink>
                      </nav>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 hover:border-2 border-black">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover:bg-slate-400">

              <img
                src="https://png.pngtree.com/png-clipart/20230818/original/pngtree-dropper-icon-simple-vector-isolated-picture-image_8009954.png"
                alt="Logo "
                className="w-36 m-auto  "
              />
              <nav>
                <NavLink className="text-3xl mt-3" to="/pdf">
                  VIEW LABORATORY RESULTS
                </NavLink>
              </nav>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 hover:border-2 border-black">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover:bg-slate-400">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3209/3209214.png"
                alt="Logo "
                className="w-36 m-auto  "
              />
              <nav>
                <NavLink className="text-3xl mt-3" to="/pdf2">
                VIEW IMAGE DIAGNOSIS RESULTS
                </NavLink>
              </nav>
            </div>
          </div>
          <div className="p-5 lg:w-1/4 hover:border-2 border-black">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover:bg-slate-400">
              <img
                src="https://cdn.icon-icons.com/icons2/606/PNG/512/money-black-bag-with-dollar-sign_icon-icons.com_56165.png"
                alt="Logo "
                className="w-36 m-auto  "
              />
              <button className="text-3xl mt-3">
                <Bill></Bill>
              </button>
            </div>
          </div>
                  
                  
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blocks;

