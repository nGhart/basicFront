// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// // import animalStore from '../../stores/store';
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const DisplayAnimal = ({ match }) => {
// //   const store = animalStore();

// //   const [animal, setAnimal] = useState(null);

// //   useEffect(() => {
// //     // Fetch the data for the selected animal using the route parameter (animal ID)
// //     const { id } = match.params;
// //     axios
// //       .get(`http://localhost:1994/animals/${id}`)
// //       .then((response) => {
// //         setAnimal(response.data.animal);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching animal data:', error);
// //       });
// //   }, [match.params]);

// //   if (!animal) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <div>
// //         <h1>View Animal</h1>
// //         <div>
// //           <p>Name: {animal.name}</p>
// //           <p>Breed: {animal.breed}</p>
// //           <p>Sex: {animal.sex}</p>
// //           {/* Add more details here */}
// //         </div>
// //       </div>
// //       <Row>
// //         <h1>Rabbit Profile</h1>
// //         <Col xs={6}>
// //           <img src="" alt="Profile" width="100%" />
// //         </Col>
// //         <Col xs={6}>
// //           <h4 className="profileText">ID</h4>
// //           <h4 className="profileText">Sex</h4>
// //           <h4 className="profileText">Breed</h4>
// //           <h4 className="profileText">DATE OF BIRTH</h4>
// //           <h4 className="profileText">BRED/BOUGHT</h4>
// //           <h4 className="profileText">PARENTS</h4>
// //           <h5 className="profileSubtextParents">Dame</h5>
// //           <h5 className="profileSubtextParents">Sire</h5>
// //           <h5 className="profileSubtextParents">Grand Dame</h5>
// //           <h5 className="profileSubtextParents">Grand Sire</h5>
// //           <h4 className="profileText">WEANING</h4>
// //           <h4 className="profileText">WEIGHT</h4>
// //           <h5 className="profileSubtextWeight">At Birth</h5>
// //           <h5 className="profileSubtextWeight">At Weaning</h5>
// //           <h5 className="profileSubtextWeight">At 8W</h5>
// //           <h5 className="profileSubtextWeight">Current</h5>
// //           <h5 className="profileSubtextWeight">At Sale</h5>
// //           <h4 className="profileText">FERTILITY</h4>
// //           <h5 className="profileSubtextFertility">Age at First Service</h5>
// //           <h5 className="profileSubtextFertility">Number of Services</h5>
// //           <h5 className="profileSubtextFertility">Number of Litters</h5>
// //           <h4 className="profileText">LITTER</h4>
// //           <h5 className="profileSubtextFertility">Number of Kits</h5>
// //           <h5 className="profileSubtextFertility">Number of Kits Alive</h5>
// //           <h5 className="profileSubtextFertility">Number of Kits Dead</h5>
// //           <h5 className="profileSubtextFertility">Number Sold</h5>
// //           <h5 className="profileSubtextFertility">Number Butchered</h5>
// //         </Col>
// //       </Row>
// //     </div>
// //   );
// // };

// // export default DisplayAnimal;

// // ViewAnimal.js

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// //import authStore from '../../stores/authStore';
// import Cookies from 'js-cookie';

// const ViewAnimal = () => {
//   const { id } = useParams();
//   const [animal, setAnimal] = useState(null);
//   const token = Cookies.get('token');

//   // useEffect(() => {
//   //   if (!token) {
//   //     console.log('User is not authenticated');
//   //     return;
//   //   }

//   //   fetch(`http://localhost:1994/animals/${id}`, {
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   })
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error('Network response was not ok');
//   //       }
//   //       return response.json();
//   //     })
//   //     .then((data) => setAnimal(data))
//   //     .catch((error) => {
//   //       console.error('Error fetching data:', error);
//   //     });
//   // }, [id]);

//   if (!animal) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Animal Details</h1>
//       <p>Name: {animal.name}</p>
//       <p>Breed: {animal.breed}</p>
//     </div>
//   );
// };

// export default ViewAnimal;
