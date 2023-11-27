import "./frequent.css";
import Nav from '../Nav';
import Footer from '../Footer';
import { useState } from 'react';
export const FrequentQ = () => {
    const [preguntasExpandidas, setPreguntasExpandidas] = useState([]);
    const togglePregunta = (indice) => {
        if (preguntasExpandidas.includes(indice)) {
            setPreguntasExpandidas(preguntasExpandidas.filter((i) => i !== indice));
        }else {
            setPreguntasExpandidas([...preguntasExpandidas, indice]);
    }
  };
    const preguntas = [
    {
      titulo: 'Do the elderly have priority?',
      respuesta: 'At Healthcare, we value all of our patients, including the elderly. While there is no specific priority based on age, we strive to provide equitable, quality service to all. However, if you have specific needs or require additional assistance Please do not hesitate to inform us when making your appointment, and we will do our best to accommodate your requirements.',
    },
    {
      titulo: 'How long does an appointment take?',
      respuesta: 'The length of a Healthcare appointment can vary depending on several factors, such as the type of visit, medical specialty, and complexity of the case. Routine visits typically take approximately 30 minutes, while more detailed exams or procedures may require more time. "Our staff will make every effort to keep appointments within a reasonable time frame to minimize waits and ensure quality care.',
    },
    {
      titulo: 'What are the opening hours?',
      respuesta: 'The Healthcare facility is open Monday through Friday from 8:00 a.m. to 5:00 p.m. to 6:00 p.m. and on Saturdays from 9:00 a.m. to 1:00 p.m. We are closed on Sundays. For information on specific doctor hours and appointments, we recommend contacting us.',
    },
    {
      titulo: 'What are the accepted payment methods?',
      respuesta: 'We accept various forms of payment, including credit cards, debit cards, and cash. Additionally, we work with several health insurance companies to provide a variety of coverage options. For specific details about your insurance plan, please feel free to contact our administrative team.',
    },
    {
      titulo: 'What should I bring to my medical appointment?',
      respuesta: 'At your medical appointment at Healthcare, we recommend bringing your health insurance card, a photo ID, and any medications you are currently taking. Additionally, if you have relevant past medical test results, it would be helpful to provide that information.',
    },
    {
      titulo: 'How do I cancel or reschedule an appointment?',
      respuesta: 'To cancel or reschedule an appointment at Healthcare, we ask that you notify us at least 24 hours in advance. You can do this by calling our patient care team or using our online platform. Appointments canceled with sufficient notice allow us to provide a better service to all our patients.',
    },
    {
      titulo: 'How long should I wait to get the results of my medical tests?',
      respuesta: 'Waiting times to receive medical test results may vary depending on the type of test. At Healthcare, we strive to provide results in a timely manner. Your doctor will inform you of the estimated time frame during your appointment, and our staff will be available to answer any additional questions.',
    },
    {
      titulo: 'How can I obtain copies of my medical records?',
      respuesta: 'You can request copies of your medical records from Healthcare by completing our records request form. This form is available at our front desk or online.',
    },
    {
      titulo: 'Do you have any other questions?',
      respuesta: 'Contact us by: HealtcareFaQ@gmail.com',
    },
    
  ];
    return (
        <div className="father">
            <Nav></Nav>
            <br/>
            <h1 className='title'>Frequent questions</h1>
            <h1 className='subtitle'> Here you will find answers to the most 
            common questions that our patients usually ask. If you cannot find the information
            you are looking for, do not hesitate to contact our team. We are here to help
              you every step of your experience with us. </h1>
              <br />
            {preguntas.map((pregunta, indice) => (
            <div  key={indice}>
                <h3 onClick={() => togglePregunta(indice)} className = "faq-question"> 
                {pregunta.titulo}
                </h3>
                {preguntasExpandidas.includes(indice) && <p className = "faq-answer">
                  {pregunta.respuesta}
                  </p>
                }
        </div>
        ))}
      
<Footer></Footer>
      </div>
    );
}
export default FrequentQ;

