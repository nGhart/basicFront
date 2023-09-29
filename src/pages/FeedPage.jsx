import React, { useEffect } from 'react';
import AddFeed from '../contents/feed/AddFeed';
import Feeds from '../contents/feed/Feeds';
import feedStore from '../stores/feedStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const FeedPage = () => {
  const store = feedStore();

  useEffect(() => {
    store.getFeeds();
  }, [store]);

  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <h1 className="title">Feed Records</h1>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddFeed />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="tableContainer">
        <Feeds />
      </div>
    </div>
  );
};

export default FeedPage;
