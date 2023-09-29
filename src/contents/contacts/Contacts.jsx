import React, { useState } from 'react';
import SingleContact from './SingleContact';
import Table from 'react-bootstrap/Table';
import contactStore from '../../stores/contactStore';
import Pagination from 'react-bootstrap/Pagination';

const Contacts = () => {
  const store = contactStore();

  const [currentPage, setCurrentPage] = useState(1);
  const contacts = store.contacts || [];
  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = contacts.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(contacts.length / itemsPerPage);
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
            <th>NUMBER</th>
            <th>EMAIL</th>
            <th>GROUP</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return (
              <SingleContact index={newIndex} item={item} key={item._id} />
            );
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

export default Contacts;
