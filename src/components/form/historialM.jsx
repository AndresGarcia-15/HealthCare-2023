import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import { useAuth0 } from '@auth0/auth0-react';
import "./historialM.css";

Modal.setAppElement("#root");

export const HistorialM = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        age: "",
        daybirthday: "",
        genre: "", 
        placebirth: "",
        emergency_person: "",
        diseases: "",
        allergies: "",
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

    const toggleform = () => {
        setIsOpen(!isOpen);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const historialData = {
                fullname: formData.fullname,
                age: formData.age,
                daybirthday: formData.daybirthday,
                genre: formData.genre,
                placebirth: formData.placebirth,
                emergency_person: formData.emergency_person,
                diseases: formData.diseases,
                allergies: formData.allergies,
            };

            const response = await fetch("https://api-healtcare-ultima.onrender.com/medicalhistorial/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(historialData),
            });

            if (response.ok) {
                console.log("Historial creado exitosamente");
                toggleform();
            } else {
                console.error("Error al crear el historial:", response.statusText);
            }
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <button className="add-buton" onClick={toggleform}>
                MEDICAL HISTORIAL
            </button>
            <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
                <form className="form" onSubmit={handleFormSubmit}>
                <h1 className="title">Patient medical historial</h1>
                    <h3 className="title2">Enter medical history of your patient</h3>
                    <label className='form-child'>Fullname</label>
                    <input type='text' name='fullname' required className='form-child' onChange={handleInputChange} value={formData.fullname}/>
                    <label className='form-child'>Age</label>
                    <input type='number' name="age"required className='form-child' onChange={handleInputChange} value={formData.age}/>
                    <label className='form-child'>daybirthday</label>
                    <input type='date' name="daybirthday" className='form-child' onChange={handleInputChange} value={formData.daybirthday}/>
                    <label className='form-child1'>Genre
                        <select className="child" name="genre" onChange={handleInputChange} value={formData.genre}>
                            <option>Femenino</option>
                            <option>Masculino</option>
                        </select>
                    </label>
                    <label className='form-child'>Place of birth</label>
                    <input type='text' name="placebirth" required className='form-child' onChange={handleInputChange} value={formData.placebirth}/>
                    <label className='form-child'>Emergency person</label>
                    <input type='text' name="emergency_person" required className='form-child' onChange={handleInputChange} value={formData.emergency_person}/>
                    <label className='form-child'>Diseases</label>
                    <input type='text' name= "diseases"  className='form-child' onChange={handleInputChange} value={formData.diseases}/>
                    <label className='form-child'>Allergies</label>
                    <input type='text' name="allergies" className='form-child' onChange={handleInputChange} value={formData.allergies}/>
                    <button className="Send" type="submit">
                        Send
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default HistorialM;