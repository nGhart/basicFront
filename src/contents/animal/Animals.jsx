import React, { useState } from 'react';
import animalStore from '../../stores/animalStore';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import SingleAnimal from './SingleAnimal';

const Animals = () => {
  const store = animalStore();
  const [currentPage, setCurrentPage] = useState(1);
  const animals = store.animals || [];
  const itemsPerPage = 7;
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
      <TableContainer>
        <Table size="md">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>ID</Th>
              <Th>BREED</Th>
              <Th>SEX</Th>
              <Th>SOURCE</Th>
              <Th>DOB</Th>
              <Th>AGE (wks)</Th>
              <Th>WEIGHT (kg)</Th>
              <Th>STATUS</Th>
              <Th>ACTIONS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {itemsShown.map((item, index) => {
              const newIndex = firstIndex + index;
              return (
                <SingleAnimal item={item} index={newIndex} key={item._id} />
              );
            })}
          </Tbody>

          <TableCaption>
            <div className="page">
              <div className="pageContainer">
                <div className="prev">
                  <i onClick={prevPage}>Prev</i>
                </div>
                {numbers.map((item) => (
                  <div
                    key={item}
                    className={`${
                      currentPage === item ? 'activePage' : 'pages'
                    }`}
                  >
                    <i onClick={() => changePage(item)}>{item}</i>
                  </div>
                ))}
                <div className="next">
                  <i onClick={nextPage}>Next</i>
                </div>
              </div>
            </div>
          </TableCaption>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Animals;
