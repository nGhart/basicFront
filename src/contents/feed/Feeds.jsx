import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import SingleFeed from './SingleFeed';
import Table from 'react-bootstrap/Table';
import feedStore from '../../stores/feedStore';

const Feeds = () => {
  const store = feedStore();
  const [currentPage, setCurrentPage] = useState(1);
  const feeds = store.feeds || [];
  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = feeds.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(feeds.length / itemsPerPage);
  const numbers = [...Array(noPages).keys()].map((item) => item + 1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== noPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  return (
    <div className="tableSection">
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>DATE PURCHASED</th>
            <th>QUANTITY (g)</th>
            <th>SERVING/DAY (g)</th>
            <th>ESTIMATED DURATION (days)</th>
            <th>ESTIMATED RESTOCKED DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return <SingleFeed index={newIndex} item={item} key={item._id} />;
          })}
        </tbody>
      </Table>
      <div className="page">
        <Pagination>
          <Pagination.Item>
            <i onClick={prevPage} style={{ color: 'black' }}>
              Prev
            </i>
          </Pagination.Item>
          {numbers.map((item) => (
            <Pagination.Item
              key={item}
              className={`${currentPage === item ? 'activePage' : ''}`}
            >
              <i onClick={() => changePage(item)} style={{ color: 'black' }}>
                {item}
              </i>
            </Pagination.Item>
          ))}
          <Pagination.Item>
            <i onClick={nextPage} style={{ color: 'black' }}>
              Next
            </i>
          </Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};

export default Feeds;
