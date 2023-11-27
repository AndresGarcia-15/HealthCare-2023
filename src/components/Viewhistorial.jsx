import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';

const Viewhistorial = () => {

  const [medicalhistorial, setApiData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-healtcare-ultima.onrender.com/medicalhistorial/5`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        if (!data || data.length === 0) {
          throw new Error('Medical historial not found.');
        }

        setApiData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <section className="text-black body-font h-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between mb-4">
          <Link
            to="/Services"
            className="bg-azulmarino border-2 border-slate-700 py-2 px-9 hover:bg-slate-400 rounded mx-3 font-weight-bold uppercase"
          >
            Back
          </Link>
          <Link
            to="/"
            className="bg-azulmarino border-2 border-slate-700 py-2 px-9 hover:bg-slate-400 rounded mx-3 font-weight-bold uppercase"
          >
            Go Home
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="p-8 lg:w-1/2">
            <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
              <h2 className="text-3xl font-bold mb-4">Medical historial data</h2>
              <div className="absolute bottom-12 right-32 w-80 opacity-50 top-5">
                <img src="https://www.precisionptandmed.com/wp-content/uploads/2019/02/Doctor-PNG-Clipart.png" alt="Imagen" />
              </div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="text-black text-left">
                  {Object.keys(medicalhistorial).length === 0 ? (
                    <p>Error: Medical historial not found, try with another ID.</p>
                  ) : (
                    <>
                      <div className="mb-4">
                        <strong>FULLNAME:</strong> {medicalhistorial[1]}
                      </div>
                      <div className="mb-4">
                        <strong>AGE:</strong> {medicalhistorial[2]}
                      </div>
                      <div className="mb-4">
                        <strong>DAYBIRTHDAY:</strong> {medicalhistorial[3]}
                      </div>
                      <div className="mb-4">
                        <strong>GENRE:</strong> {medicalhistorial[4]}
                      </div>
                      <div className="mb-4">
                        <strong>PLACEBIRTH:</strong> {medicalhistorial[5]}
                      </div>
                      <div className="mb-4">
                        <strong>EMERGENCY PERSON:</strong> {medicalhistorial[6]}
                      </div>
                      <div className="mb-4">
                        <strong>DISEASES:</strong> {medicalhistorial[7]}
                      </div>
                      <div className="mb-4">
                        <strong>ALLERGIES:</strong> {medicalhistorial[8]}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Viewhistorial;