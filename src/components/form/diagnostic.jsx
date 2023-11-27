import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import { useAuth0 } from '@auth0/auth0-react';
import "./diagnostic.css";

Modal.setAppElement("#root");

export const Diagnostic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        diagnostico_principal: "",
        diagnosticos_secundario: "",
        plan_de_tratamiento: "",
        medicamentos_recetados: "",
        procedimientos_realizados: "",
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

        try {
            const diagnosticData = {
                diagnostico_principal: formData.diagnostico_principal,
                diagnosticos_secundarios: formData.diagnosticos_secundario,
                plan_de_tratamiento: formData.plan_de_tratamiento,
                medicamentos_recetados: formData.medicamentos_recetados,
                procedimientos_realizados: formData.procedimientos_realizados,
            };

            const response = await fetch("https://api-healtcare-ultima.onrender.com/diagnosticimaging/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(diagnosticData),
            });

            if (response.ok) {
                console.log("formulario creada exitosamente");
                toggleform(); 
            } else {
                console.error("Error al crear el formulario");
            }
        } catch (error) {
            console.error("Error al procesar la solicitud: ", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Aquí va tu formulario...

    return (
        <div>
        <button className="add-buton" onClick={toggleform}>DIAGNOSES</button>
        <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
            <form className="form" onSubmit={handleFormSubmit}>
            <h1 className="title">Diagnostic Results</h1>
                <label className='form-child'>Principal Diagnostic</label>
                <input type='text' name='diagnostico_principal'  className='form-child' placeholder="Principal diagnostic" onChange={handleInputChange} value={formData.diagnostico_principal}></input>
                <label className='form-child'>Secundary Diagnostic</label>
                <input type='text' name='diagnosticos_secundario' className='form-child' placeholder="Secundary diagnostic" onChange={handleInputChange} value={formData.diagnosticos_secundario}></input>
                <label className='form-child'>Treatment plan</label>
                <input type='text' name= 'plan_de_tratamiento' required className='form-child' placeholder="Treatment plan" onChange={handleInputChange} value={formData.plan_de_tratamiento}></input>
                <label className='form-child'>Reset medications</label>
                <input type='text'name='medicamentos_recetados' required className='form-child' placeholder="Reset medications" onChange={handleInputChange} value={formData.medicamentos_recetados}></input>
                <label className='form-child'>Procedures performed</label>
                <input type='text'name='procedimientos_realizados' required className='form-child' placeholder="Procedures performed" onChange={handleInputChange} value={formData.procedimientos_realizados}></input>
                <button className="Send" type="submit">Submit</button>
                </form>
        </Modal>
    </div>
    );
};

export default Diagnostic;