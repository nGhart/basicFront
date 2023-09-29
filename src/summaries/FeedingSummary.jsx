import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import animalStore from '../stores/animalStore';
import feedStore from '../stores/feedStore';

const FeedingSummary = () => {
  const store = feedStore();
  const animal = animalStore();
  const [recentFeeds, setRecentFeeds] = useState([]);
  useEffect(() => {
    store.getFeeds();
  }, [store]);

  useEffect(() => {
    const feed = (store.feeds || []).slice(-3);
    setRecentFeeds(feed);
  }, [store.feeds]);

  useEffect(() => {
    store.getFeeds();
  }, [store]);

  useEffect(() => {
    animal.getAnimals();
  }, [animal]);

  const animals = animal.animals || [];
  let totalAnimals = animals.length;

  function getEstDuration(feedQuantity, feedServing) {
    return Math.floor(feedQuantity / (totalAnimals * feedServing));
  }

  function addDaysToDate(originalDate, estimate) {
    const date = new Date(originalDate);
    date.setDate(date.getDate() + estimate);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
    return formattedDate.slice(0, 10);
  }

  return (
    <Container>
      <Row>
        <h3 className="font2">Feed Restock Date</h3>
      </Row>
      <Stack className="font1" direction="horizontal" gap={2}>
        {recentFeeds &&
          recentFeeds.map((item, index) => {
            const estimate = getEstDuration(
              item.feedQuantity,
              item.feedServing
            );
            const estimatedDate = addDaysToDate(
              item.feedDatePurchased,
              estimate
            );
            return (
              <div
                className="homeBack"
                key={index}
                style={{
                  textAlign: 'center',
                  margin: 'auto',
                }}
              >
                <h6>{item.feedName}</h6>
                <h6>{estimatedDate}</h6>
              </div>
            );
          })}
      </Stack>
    </Container>
  );
};

export default FeedingSummary;
