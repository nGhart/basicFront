import React, { useState, useEffect } from 'react';
import diseaseStore from '../stores/diseaseStore';
import Container from 'react-bootstrap/Container';

const DiseaseSummary = () => {
  const store = diseaseStore();
  const [inTreatmentDiseases, setInTreatmentDiseases] = useState([]);

  useEffect(() => {
    store.getDiseases();
  }, [store]);

  useEffect(() => {
    const filteredDiseases = (store.diseases || []).filter(
      (item) => item.diseaseOutcome === 'In treatment'
    );
    setInTreatmentDiseases(filteredDiseases);
  }, [store.diseases]);

  return (
    <>
      <Container style={{ textAlign: 'center' }}>
        <h3 className="font2">Disease Summary</h3>
        <h4 className="font1">
          Diseased Animals: {inTreatmentDiseases.length}
        </h4>
        <div style={{ gap: 2 }} className="flex">
          {inTreatmentDiseases.map((item) => (
            <span
              key={item._id}
              className="homeBack flex"
              style={{ width: '60px', height: '60px', borderRadius: '50%' }}
            >
              {item.diseaseAnimal}
            </span>
          ))}
        </div>
      </Container>
    </>
  );
};

export default DiseaseSummary;
