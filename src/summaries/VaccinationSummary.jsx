import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import vaccinationStore from '../stores/vaccinationStore';

const VaccinationSummary = () => {
  const store = vaccinationStore();
  const [recentVaccinations, setRecentVaccinations] = useState([]);
  useEffect(() => {
    store.getVaccinations();
  }, [store]);

  useEffect(() => {
    const vacc = (store.vaccinations || []).slice(-3);
    setRecentVaccinations(vacc);
  }, [store.vaccinations]);

  function addDaysToDate(originalDate, daysToAdd) {
    const date = new Date(originalDate);
    date.setDate(date.getDate() + daysToAdd);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
    return formattedDate.slice(0, 10);
  }

  return (
    <Container>
      <Row>
        <h3 className="font2">Upcoming Vaccinations</h3>
      </Row>
      <Row>
        <Stack className="font1" gap={2}>
          {recentVaccinations &&
            recentVaccinations.map((item) => {
              return (
                <div className="p-2 homeBack around" key={item._id}>
                  <span>{item.medication}</span>{' '}
                  <span>Due: {addDaysToDate(item.date, item.nextDate)}</span>
                </div>
              );
            })}
        </Stack>
      </Row>
    </Container>
  );
};

export default VaccinationSummary;
