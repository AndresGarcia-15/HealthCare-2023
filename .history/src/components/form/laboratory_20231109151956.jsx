import Modal from "react-modal";
import { useState } from "react";
import "./laboratory.css";
Modal.setAppElement("#root");

export const Laboratory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleform = () =>{
        setIsOpen(!isOpen);
    };
    return (
    <div > 
        <button className="add-buton" onClick={toggleform}>LABORATORY</button>
      

        <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
                <form className="form">
                <h1 className="title">Make a request</h1>
                <h3 className="title2">Enter your request information as indicated</h3>
                    <label className='form-child'>Name</label>
                    <input type='text' required className='form-child' placeholder="Name"></input>
                    <label className='form-child'>Last name</label>
                    <input type='text' required className='form-child' placeholder="Lastname"></input>
                    <label className='form-child1'>Document type
                    <select className="child">
                        <option value="opcion1">Tarjeta de identidad</option>
                        <option value="opcion2">Cedula de ciudadania</option>
                        <option value="opcion3">Cedula extranjera</option>
                    </select>
                    </label>
                    <label className='form-child'>Document ID</label>
                    <input type='number' required className='form-child' placeholder="Documento ID"></input>
                    <label className='form-child'>Phone</label>
                    <input type='tel' className='form-child' placeholder="Phone number"></input>
                    <label className='form-child'>Email</label>
                    <input type='email'  className='form-child' placeholder="example@gmail.com"></input>
                    <label className='form-child'>Explain your reasons</label>
                    <textarea type='text' placeholder="Briefly explain your reasons for requestin a new medical test" className='text-area'></textarea>
                    <div className="policy">
                    <p>Acept healthcare&apos;s data processing policy.</p>
                    <input type="checkbox" id="miCheckbox" name="miCheckbox" value="valorCheckbox"></input>
                    <div className="absolute bottom-12 right-32 w-80 opacity-30">
        <img src="https://www.precisionptandmed.com/wp-content/uploads/2019/02/Doctor-PNG-Clipart.png" alt="Imagen" />
      </div>
                    </div>
                    <button className="Send" type="submit">Enviar</button>
                    </form>
            </Modal>

            
            </div>
                    );
    };


export default Laboratory;

