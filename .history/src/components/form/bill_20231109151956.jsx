import Modal from "react-modal";
import { useState } from "react";
import "./bill.css";
Modal.setAppElement("#root");

export const Bill = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleform = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <button className="add-buton" onClick={toggleform}>BILLING</button>
            <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
                <form className="form">
                <h1 className="title">Enter your card details</h1>
                    <label className='form-child'>Card number</label>
                    <input type='number' required className='form-child'></input>
                    <label className='form-child'>Due date</label>
                    <input type='date' required className='form-child'></input>
                    <label className='form-child'>Security code</label>
                    <input type='password' required className='form-child'></input>
                    <label className='form-child'>Card holder name</label>
                    <input type='text' required className='form-child'></input>
                    <label className='form-child'>Billing address</label>
                    <input type='text' required className='form-child'></input>
                    <button className="Send" type="submit">Enviar</button>
                    </form>
            </Modal>
        </div>
    );
}

export default Bill;
