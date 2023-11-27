import Modal from "react-modal";
import { useState } from "react";
import "./historialM.css";
Modal.setAppElement("#root");

export const HistorialM = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleform = () =>{
        setIsOpen(!isOpen);
    };
    return (
    <div> 
        <button className="add-buton" onClick={toggleform}>MEDICAL HISTORIAL</button>
            <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
                <form className="form">
                <h1 className="title">Patient medical historial</h1>
                <h3 className="title2">Enter historial medical of your patient</h3>
                    <label className='form-child'>Fullname</label>
                    <input type='text' required className='form-child' placeholder="Fullname"></input>
                    <label className='form-child'>ID</label>
                    <input type='number' required className='form-child' placeholder="Identificacion"></input>
                    <label className='form-child'>Age</label>
                    <input type='number' required className='form-child' placeholder="Age"></input>
                    <label className='form-child'>Birthdate</label>
                    <input type='date' className='form-child' placeholder="Birthdate"></input>
                    <label className='form-child1'>Document type
                    <select className="child">
                        <option value="opcion1">Femenino</option>
                        <option value="opcion2">Masculino</option>
                    </select>
                    </label>
                    <label className='form-child'>Placebirth</label>
                    <input type='text' required className='form-child' placeholder="Placebirth"></input>
                    <label className='form-child'>Emergency person</label>
                    <input type='text' className='form-child' placeholder="Emergency Person"></input>
                    <label className='form-child'>Diseases</label>
                    <input type='text' required className='form-child' placeholder="Diseases"></input>
                    <label className='form-child'>Allergies</label>
                    <input type='text' className='form-child' placeholder="Allergies"></input>
                    <button className="Send" type="submit">Send</button>
                    </form>
            </Modal>
            </div>
                    );
    };


export default HistorialM;

