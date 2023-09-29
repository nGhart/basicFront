import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import matingStore from '../stores/matingStore';

const MatingSummary = () => {
  const store = matingStore();

  const [recentMatings, setRecentMatings] = useState([]);
  useEffect(() => {
    store.getMatings();
  }, [store]);
  useEffect(() => {
    const mate = (store.matings || []).slice(-7);
    setRecentMatings(mate);
  }, [store.matings]);

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
    <div>
      <Container style={{ textAlign: 'center' }}>
        <h3 className="font2">Nesting Dates</h3>
        <Stack gap={2} className="font1">
          {recentMatings &&
            recentMatings.map((item, index) => {
              return (
                <div className="p-2 homeBack around" key={index}>
                  <span>ID: {item.matingDoe}</span>{' '}
                  <span>
                    Est Nesting: {addDaysToDate(item.matingDate2, 28)}
                  </span>
                </div>
              );
            })}
        </Stack>
      </Container>
    </div>
  );
};

export default MatingSummary;
