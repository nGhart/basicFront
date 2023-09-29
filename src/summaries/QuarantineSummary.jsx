import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import quarantineStore from '../stores/quarantineStore';

const QuarantineSummary = () => {
  const store = quarantineStore();
  const [quarantined, setQuarantined] = useState([]);

  useEffect(() => {
    store.getQuarantines();
  }, [store]);

  useEffect(() => {
    const filteredQuarantines = (store.quarantines || []).filter(
      (item) => item.outcome === 'Quarantined'
    );
    setQuarantined(filteredQuarantines);
  }, [store.quarantines]);
  return (
    <Container>
      <h3 className="font2">Quarantine Summary</h3>
      <h4 className="font1">In quarantine:</h4>
      <div className="flex" style={{ margin: 'auto' }}>
        <span
          className="homeBack flex"
          style={{ width: '60px', height: '60px', borderRadius: '50%' }}
        >
          {quarantined.length}
        </span>
      </div>
    </Container>
  );
};

export default QuarantineSummary;
