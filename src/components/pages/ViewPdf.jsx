import React, { useState, useEffect } from "react";
import jsPDF from 'jspdf';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Footer';
import 'jspdf-autotable';
const ViewPdf = () => {
  const [laboratoryData, setLaboratoryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-healtcare-ultima.onrender.com/laboratory/5`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        console.log("Complete Data:", data);

        if (!data || Object.keys(data).length === 0) {
          throw new Error('Laboratory data not found.');
        }

        setLaboratoryData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text('Laboratory Data', 20, 10);

    if (Object.keys(laboratoryData).length > 0) {
      const tableData = Object.values(laboratoryData).map(value => [value]);

      doc.autoTable({
        body: tableData,
        startY: 20,
        theme: 'plain', 
      });
    } else {
      doc.text('Error: Laboratory data not found, try with another ID.', 20, 20);
    }

    return doc; 
  };

  const viewPDF = () => {
    const pdfDoc = generatePDF();
    pdfDoc.output('dataurlnewwindow');
  };

  const downloadPDF = () => {
    const pdfDoc = generatePDF();
    pdfDoc.save('laboratory_data.pdf');
  };

  return (
    <section className="text-black body-font h-screen">
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
        <div className="h-full bg-azulmarino bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:bg-slate-400">
          <h2 className="text-3xl font-bold mb-4">Laboratory Data</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="text-black text-left">
              {Object.keys(laboratoryData).length === 0 ? (
                <p>Error: Laboratory data not found, try with another ID.</p>
              ) : (
                <>
                  <div className="mb-4">
                 
                    <table>
                      <tbody>
                        {Object.values(laboratoryData).map((value, index) => (
                          <tr key={index}>
                            <td>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="text-center mt-4">
            <button onClick={viewPDF} className="bg-azulmarino border-2 border-slate-700 py-2 px-9 hover:bg-slate-400 rounded mx-3 font-weight-bold uppercase">
              View PDF
            </button>
            <button onClick={downloadPDF} className="bg-azulmarino border-2 border-slate-700 py-2 px-9 hover:bg-slate-400 rounded mx-3 font-weight-bold uppercase">
              Download PDF
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ViewPdf;
