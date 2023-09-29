import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import animalStore from '../../stores/animalStore';
import Table from 'react-bootstrap/Table';
import SingleAnimal from './SingleAnimal';

const Animals = () => {
  const store = animalStore();
  const [currentPage, setCurrentPage] = useState(1);
  const animals = store.animals || [];
  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = animals.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(animals.length / itemsPerPage);
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
      <Table bordered hover style={{ width: '100%' }}>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>BREED</th>
            <th>SEX</th>
            <th>SOURCE</th>
            <th>DOB</th>
            <th>AGE (wks)</th>
            <th>WEANED (wks)</th>
            <th>WEIGHT (kg)</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return <SingleAnimal item={item} index={newIndex} key={item._id} />;
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

export default Animals;
