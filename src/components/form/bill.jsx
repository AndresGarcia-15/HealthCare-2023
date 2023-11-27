import React, { useState } from "react";
import Modal from "react-modal";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./bill.css";

Modal.setAppElement("#root");

const Bill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    dueDate: "",
    securityCode: "",
    cardHolderName: "",
    billingAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleform = () => {
    setIsOpen(!isOpen);
  };

  const generatePDF = () => {
    const { cardNumber, dueDate, securityCode, cardHolderName, billingAddress } = formData;


    const pdfDoc = new jsPDF();

  
    pdfDoc.text("Card Details", 20, 20);
    pdfDoc.text(`Card Number: ${cardNumber}`, 20, 30);
    pdfDoc.text(`Due Date: ${dueDate}`, 20, 40);
    pdfDoc.text(`Security Code: ${securityCode}`, 20, 50);
    pdfDoc.text(`Card Holder Name: ${cardHolderName}`, 20, 60);
    pdfDoc.text(`Billing Address: ${billingAddress}`, 20, 70);

    
    pdfDoc.text("", 20, 80);

    pdfDoc.text("Total to pay:", 20, 90);
    pdfDoc.text("-------------COP 5.900", 20, 100);

    pdfDoc.save("billing_details.pdf");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
    toggleform();
  };

  return (
    <div>
      <button className="add-buton" onClick={toggleform}>
        BILLING
      </button>
      <Modal isOpen={isOpen} onRequestClose={toggleform} contentLabel="ExampleModal" className="form-content">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title">Enter your card details</h1>
          <label className="form-child">
            Card number
            <input type="number" name="cardNumber" required className="form-child" onChange={handleInputChange} />
          </label>
          <label className="form-child">
            Due date
            <input type="date" name="dueDate" required className="form-child" onChange={handleInputChange} />
          </label>
          <label className="form-child">
            Security code
            <input type="password" name="securityCode" required className="form-child" onChange={handleInputChange} />
          </label>
          <label className="form-child">
            Card holder name
            <input type="text" name="cardHolderName" required className="form-child" onChange={handleInputChange} />
          </label>
          <label className="form-child">
            Billing address
            <input type="text" name="billingAddress" required className="form-child" onChange={handleInputChange} />
          </label>
          <button className="Send" type="submit">
            Send
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Bill;