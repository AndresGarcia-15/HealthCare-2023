import Nav from "../Nav";
import Footer from "../Footer";
const Contac = () => {
  return (
    <div className="h-screen">
      <Nav/>
      <div className="container px-10 py-50 mx-auto  ml-28">

        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-black  mt-20 italic">
          Contact us
        </h1>
        <p className=" w-2/5 mb-10 mt-2 mx-auto pl-10  font-light ">
          For Healthcare it's important to maintain a close relationship whit
          our patients, which is why we put the following service channels at
          your disposal
        </p>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2 italic">
                Address
              </h2>
              <p className="leading-relaxed font-light ">
                [Healthcare]
                <br></br>[Street address]
                <br></br>[City, province, postal code]
                <br></br>[Country]<br></br> (If sending overseas)
              </p>
              <a className="mt-3 text-indigo-500  ">Learn More</a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2 italic">
              Contact Information
              </h2>
              <p className="leading-relaxed  font-light ">
                {" "}
                Customer Care Hotline: <br></br> (123)456-7890<br></br> Email: info@healthcare.com<br></br>Emergency Contact: 000-12312-45566<br></br>Customer Hotline: All the week 8:00 AM - 7:00 PM
              </p>
              <a className="mt-3 text-indigo-500  ">Learn More</a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2 italic">
                Key Features
              </h2>
              <p className="leading-relaxed  font-light "> Cutting-Edge Medical Technology <br></br>Convenient Downtown Location<br></br>Personalized Care</p>
              <a className="mt-3 text-indigo-500 ">Learn More</a>
            </div>

          </div>

        </div>
        
     
      </div>
     
      
      <Footer />

    </div>
  );
};

export default Contac;
