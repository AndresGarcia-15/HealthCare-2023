import Formulariocita from "./form/formulariocita";
import Bill from "./form/bill";
import Laboratory from "./laboratory";
import { NavLink } from "react-router-dom";
import Diagnostic from "./form/diagnostic";
const Blocks = () => {

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap m-0">
        
          <div className="p-5 lg:w-1/4  hover:border-2 border-black  ">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover:bg-slate-400 ;">
            <img src="https://icones.pro/wp-content/uploads/2022/08/icone-du-calendrier-des-evenements-noir.png" alt="Logo " className="w-36 m-auto  "  />
            <button className="text-3xl mt-3">
            <Formulariocita></Formulariocita>
            </button>
            
                
        
            </div>
          </div>
          <div className="p-5 lg:w-1/4  hover:border-2 border-black  ">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover:bg-slate-400 ;">
            <img src="https://cdn-icons-png.flaticon.com/512/404/404042.png" alt="Logo " className="w-36 m-auto  "  />
            <button className="text-3xl mt-3">
            <HistorialM></HistorialM>
            </button>
            
                
        
            </div>
          </div>
          <div className="p-5 lg:w-1/4 hover:border-2 border-black">
            <div className="h-full bg-azulmarino bg-opacity-75 py-5 px-8  rounded-lg overflow-hidden text-center relative  hover:bg-slate-400">
            <img src="https://cdn-icons-png.flaticon.com/512/33/33819.png" alt="Logo " className="w-36 mt-10 ml-8   "  />
            <button className="text-3xl mt-3">
            <Laboratory></Laboratory>
            </button>
            
              
            </div>
          </div>
          <div className="p-5 lg:w-1/4 hover:border-2 border-black">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover:bg-slate-400">
            <img src="  https://cdn-icons-png.flaticon.com/512/3789/3789786.png" alt="Logo " className="w-36 m-auto  "  />
            <button className="text-3xl mt-3">
            <Diagnostic></Diagnostic>
            </button>
              
              
            </div>
          </div>
          <div className="p-5 lg:w-1/4 hover:border-2 border-black">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover:bg-slate-400">
            <img src="https://cdn.icon-icons.com/icons2/606/PNG/512/money-black-bag-with-dollar-sign_icon-icons.com_56165.png" alt="Logo " className="w-36 m-auto  "  />
            <button className="text-3xl mt-3">
            <Bill></Bill>
            </button>
              
              
            </div>
          </div>
          <div className="p-4 lg:w-1/4 hover:border-2 border-black">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative  hover:bg-slate-400">
            <img src="https://cdn-icons-png.flaticon.com/128/4403/4403520.png" alt="Logo " className="w-36 m-auto  "  />
            <nav>
            <NavLink className="text-3xl mt-3" to="/FrequentQ">FREQUENT QUESTIONS</NavLink>
            </nav>
            

              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blocks;
