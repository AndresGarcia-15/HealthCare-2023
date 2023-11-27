import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';

const ViewAppointments = () => {
  const [appointment, setApiData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          throw new Error('Appointment ID is undefined.');
        }

        const response = await fetch(
          `https://api-healtcare-ultima.onrender.com/appointment/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        console.log("Datos completos:", data);

        if (!data || data.length === 0) {
          throw new Error('Appointment not found.');
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
    <section className="text-black body-font h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between mb-4">
          <Link
            to="/Search"
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
              <h2 className="text-3xl font-bold mb-4">Appointment Data</h2>

              {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="text-black text-left">
                  {Object.keys(appointment).length === 0 ? (
                    <p>Error: Appointment not found, try whit another ID.</p>
                  ) : (
                    <>
                      <div className="mb-4">
                        <strong>ID:</strong> {appointment[0]}
                      </div>
                      <div className="mb-4">
                        <strong>DATE:</strong> {appointment[1]}
                      </div>
                      <div className="mb-4">
                        <strong>TIME:</strong> {appointment[2]}
                      </div>
                      <div className="mb-4">
                        <strong>DOCTOR:</strong> {appointment[3]}
                      </div>
                      <div className="mb-4">
                        <strong>PRESCRIPTION:</strong> {appointment[4]}
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

export default ViewAppointments;
