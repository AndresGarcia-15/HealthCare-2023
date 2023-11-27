import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import { useAuth0 } from '@auth0/auth0-react';
import "./laboratory.css";

Modal.setAppElement("#root");

const Laboratory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        test1: "",
        test2: "",
        test3: "",
        test4: "",
        test5: "",
    });

    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [token, setToken] = useState("");

    useEffect(() => {
        const getToken = async () => {
            if (isAuthenticated) {
                const accessToken = await getAccessTokenSilently();
                setToken(accessToken);
            }
        };
        getToken();
    }, [isAuthenticated, getAccessTokenSilently]);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const laboratoryData = {
                test1: formData.test1,
                test2: formData.test2,
                test3: formData.test3,
                test4: formData.test4,
                test5: formData.test5,
            };

            const response = await fetch("https://api-healtcare-ultima.onrender.com/laboratory/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(laboratoryData),
            });

            if (response.ok) {
                console.log("Laboratory test creado exitosamente");
                toggleForm();
            } else {
                console.error("Error al crear el laboratory test");
            }
        } catch (error) {
            console.error("Error al procesar la solicitud: ", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div> 

        <button className="add-buton" onClick={toggleForm}>LABORATORY</button>
            <Modal isOpen={isOpen} onRequestClose={toggleForm} contentLabel="ExampleModal" className="form-content">
                <form className="form" onSubmit={handleFormSubmit}>
                <h1 className="title">Enter your patient's results.</h1>
                    <label className='form-child'>Test results</label>
                    <input type='text' name='test1' required className='form-child' placeholder="Test results" onChange={handleInputChange} value={formData.test1}></input>
                    <label className='form-child'>Test results</label>
                    <input type='text' name='test2' required className='form-child' placeholder="Test results" onChange={handleInputChange} value={formData.test2}></input>
                    <label className='form-child'>Test results</label>
                    <input type='text' name='test3'required className='form-child' placeholder="Test results" onChange={handleInputChange} value={formData.test3}></input>
                    <label className='form-child'>Test results</label>
                    <input type='text' name= 'test4'className='form-child' placeholder="Test results" onChange={handleInputChange} value={formData.test4}></input>
                    <label className='form-child'>Test results</label>
                    <input type='text'  name= 'test5'className='form-child' placeholder="Test results" onChange={handleInputChange} value={formData.test5}></input>
                    <button className="Send" type="submit">Send</button>
                    </form>
            </Modal>
            </div>
    );
};

export default Laboratory;
