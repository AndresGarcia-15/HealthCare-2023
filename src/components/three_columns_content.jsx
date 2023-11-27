import {NavLink} from 'react-router-dom'  
function Three_columns_content() {
  return (
    <div>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-black body-font text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-black md:text-3xl">
                Page not found
              </p>
              <p className="mb-12 text-center text-black body-fontn">
                The page you’re looking for doesn’t exist.
              </p>
              <NavLink className=" bg-azulmarino border-2  border-slate-700  py-2 px-9   hover:bg-slate-400 rounded  mx-3 font-weight-bold " to="/">
              Go Home
              </NavLink> 
                

            </div>
            <div className="mt-4">
              <img
                src="https://cdn.icon-icons.com/icons2/2385/PNG/512/face_dead_icon_144349.png"
                alt="img"
                className="object-cover max-w-xl h-full ml-28 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Three_columns_content;
