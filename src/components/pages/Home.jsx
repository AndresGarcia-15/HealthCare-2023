import Nav from '../Nav'
import Footer from '../Footer'
import ViewAppointments from '../ViewAppointments';
function Home(){
return(
    <div  className='h-screen w-screen'>
         <Nav></Nav>
         <img src="https://www.ziffytech.com/assets/img/home-icon/bannernew.png" className=" h-3/4 mx-auto my-auto mt-4 opacity-80 " /> 
        
         <Footer></Footer>
         
    </div>
);


}
export default Home