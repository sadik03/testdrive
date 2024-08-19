// import React, { useState } from 'react';
// import { Container, Form, Button } from 'react-bootstrap';

// const ProfileCreationForm = () => {
//   const [profile, setProfile] = useState({
//     fullName: '',
//     sport: '',
//     experience: '',
//   });

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(profile);
//     // Handle profile submission logic here
//   };

//   return (
//     <Container>
//       <h2>Create Your Profile</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formFullName">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="fullName"
//             placeholder="Enter full name"
//             value={profile.fullName}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formSport">
//           <Form.Label>Sport</Form.Label>
//           <Form.Control
//             type="text"
//             name="sport"
//             placeholder="Enter sport"
//             value={profile.sport}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formExperience">
//           <Form.Label>Experience</Form.Label>
//           <Form.Control
//             type="text"
//             name="experience"
//             placeholder="Enter experience"
//             value={profile.experience}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default ProfileCreationForm;
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './CSS/ProfileCreationForm.css';

const ProfileCreationForm = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    sport: '',
    experience: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    // Handle profile submission logic here
  };

  return (
    <Container className="profile-form-container">
        <div className='profile'>
      <h2>Create Your Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={profile.fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSport">
          <Form.Label>Sport</Form.Label>
          <Form.Control
            type="text"
            name="sport"
            placeholder="Enter sport"
            value={profile.sport}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExperience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="text"
            name="experience"
            placeholder="Enter experience"
            value={profile.experience}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </Container>
    
  );
};

export default ProfileCreationForm;
