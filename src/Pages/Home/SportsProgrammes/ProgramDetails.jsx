// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import Container from "../../../Components/Container/Container";
// // import "./ProgramDetails.css";
// // const ProgramDetails = () => {
// //   const { id } = useParams();
// //   const [program, setProgram] = useState(null);

// //   useEffect(() => {
// //     fetch('/programmes.json') // Adjust the path if necessary
// //       .then(res => res.json())
// //       .then(data => {
// //         const programDetail = data.find(p => p.id === parseInt(id));
// //         setProgram(programDetail);
// //       })
// //       .catch(err => console.error('Error fetching program details:', err));
// //   }, [id]);

// //   if (!program) return <div>Loading...</div>;

// //   return (
// //     <Container>
// //       <div className="p-8">
// //         <h1 className="text-4xl font-bold mb-4">{program.name}</h1>
// //         <img src={program.image1} alt={program.name} className="w-full h-auto mb-4" />
// //         <p className="text-lg mb-4">{program.description}</p>
// //         <p className="text-lg mb-4">Schedule: {program.schedule}</p>
// //         <p className="text-lg mb-4">Price: ${program.price}</p>
// //         <p className="text-lg mb-4">Duration: {program.duration}</p>
// //         <p className="text-lg mb-4">Available Seats: {program.availableSeats}</p>
        
// //         {/* Coaches Information */}
// //         <div className="mt-8">
// //           <h2 className="text-2xl font-bold mb-4">Coaches</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {program.coaches.map((coach, index) => (
// //               <div key={index} className="flex items-center space-x-4">
// //                 <img src={coach.image} alt={coach.name} className="w-16 h-16 rounded-full" />
// //                 <p className="text-lg font-semibold">{coach.name}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default ProgramDetails;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Container from "../../../Components/Container/Container";
// import "./ProgramDetails.css";

// const ProgramDetails = () => {
//   const { id } = useParams();
//   const [program, setProgram] = useState(null);

//   useEffect(() => {
//     fetch('/programmes.json') // Adjust the path if necessary
//       .then(res => res.json())
//       .then(data => {
//         const programDetail = data.find(p => p.id === parseInt(id));
//         setProgram(programDetail);
//       })
//       .catch(err => console.error('Error fetching program details:', err));
//   }, [id]);

//   if (!program) return <div className="fade-in">Loading...</div>;

//   return (

//     <div className= "bg-amber-300  text-gray-800 dark:text-white ">

   
//     <Container>
//      <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="text-4xl font-bold  slide-up  ">{program.name}</h1>
//         <img src={program.image1} alt={program.name} className="responsive-image mb-4 slide-up" />
//         <p className="text-lg mb-4 slide-up">{program.description}</p>
//         <p className="text-lg mb-4 slide-up">Schedule: {program.schedule}</p>
//         <p className="text-lg mb-4 slide-up">Price: ${program.price}</p>
//         <p className="text-lg mb-4 slide-up">Duration: {program.duration}</p>
//         <p className="text-lg mb-4 slide-up">Available Seats: {program.availableSeats}</p>
        
//         {/* Coaches Information */}
//         <div className="mt-8 fade-in">
//           <h2 className="text-2xl font-bold mb-4 slide-up">Coaches</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {program.coaches.map((coach, index) => (
//               <div key={index} className="flex items-center space-x-4 slide-up">
//                 <img src={coach.image} alt={coach.name} className="w-16 h-16 rounded-full" />
//                 <p className="text-lg font-semibold">{coach.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Container>
//     </div>
//   );
// };

// export default ProgramDetails;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from "../../../Components/Container/Container";
import "./ProgramDetails.css";

const ProgramDetails = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    fetch('/programmes.json') // Adjust the path if necessary
      .then(res => res.json())
      .then(data => {
        const programDetail = data.find(p => p.id === parseInt(id));
        setProgram(programDetail);
      })
      .catch(err => console.error('Error fetching program details:', err));
  }, [id]);

  if (!program) return <div className="fade-in">Loading...</div>;

  return (
    <div className="bg-amber-300 text-gray-800 dark:text-white">
      <Container>
        <div className="flex flex-col items-center  justify-center min-h-screen p-8">
          <div className="flex flex-col md:flex-row gap-9 items-center justify-center w-full">
            {/* Left Side: Image */}
            <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
              <img src={program.image1} alt={program.name} className="responsive-image slide-up" />
            </div>
            
            {/* Right Side: Text Information */}
            <div className="flex-1 flex flex-col items-start md:items-center gap-3 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 slide-up">{program.name}</h1>
              <div className="info-cards">
                <p className="info-card slide-up">{program.description}</p>
                <p className="info-card slide-up">Schedule: {program.schedule}</p>
                <p className="info-card slide-up">Price: <span>${program.price}</span></p>
                <p className="info-card slide-up">Duration: {program.duration}</p>
                <p className="info-card slide-up">Available Seats: {program.availableSeats}</p>
              </div>
              
              {/* Coaches Information */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 slide-up">Coaches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {program.coaches.map((coach, index) => (
                    <div key={index} className="coach-card slide-up">
                      <img src={coach.image} alt={coach.name} className="w-16 h-16 rounded-full" />
                      <p className="text-lg font-semibold">{coach.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProgramDetails;
