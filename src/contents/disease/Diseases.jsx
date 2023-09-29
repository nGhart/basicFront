import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import SingleDisease from './SingleDisease';
import Table from 'react-bootstrap/Table';
import diseaseStore from '../../stores/diseaseStore';

const Diseases = () => {
  const store = diseaseStore();
  const [currentPage, setCurrentPage] = useState(1);
  const diseases = store.diseases || [];
  const itemsPerPage = 7;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = diseases.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(diseases.length / itemsPerPage);
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
    <div className="tableSection health">
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ANIMAL</th>
            <th>CONDITION</th>
            <th>MANAGEMENT</th>
            <th>DURATION</th>
            <th>OUTCOME</th>
            <th>DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return (
              <SingleDisease index={newIndex} item={item} key={item._id} />
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

export default Diseases;
