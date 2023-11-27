import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === '' || isNaN(inputValue)) {
      alert('Por favor, ingrese un número válido.');
    } else {

      navigate(`/view/${inputValue}`);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-azulmarino">
      <div className="flex justify-center items-center flex-grow">
        <div className="max-w-md p-8 bg-azulmarino shadow-md border-slate-700 border-2">
          <form onSubmit={handleSubmit}>
            <label htmlFor="idInput" className="text-sm font-medium text-gray-600 mb-1 block">
              ENTER APPOINTMENT ID:
            </label>
            <input
              type="text"
              id="idInput"
              value={inputValue}
              onChange={handleInputChange}
              className="rounded-md w-full p-2 mb-3 bg-azulmarino border-2 border-slate-700 py-2 px-9 hover:bg-slate-400 mx-3 font-weight-bold"
            />
            <button
              type="submit"
              className="bg-azulmarino border-2 border-slate-700 py-2 px-9 hover:bg-slate-400 rounded mx-3 font-weight-bold"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;