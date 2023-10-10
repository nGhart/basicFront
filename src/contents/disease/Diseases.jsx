import React, { useState } from 'react';
import SingleDisease from './SingleDisease';
import diseaseStore from '../../stores/diseaseStore';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

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
    <div className="tableSection">
      <TableContainer>
        <Table className="tables">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>ANIMAL</Th>
              <Th>CONDITION</Th>
              <Th>MANAGEMENT</Th>
              <Th>DURATION</Th>
              <Th>OUTCOME</Th>
              <Th>DATE</Th>
              <Th>ACTIONS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {itemsShown.map((item, index) => {
              const newIndex = firstIndex + index;
              return (
                <SingleDisease index={newIndex} item={item} key={item._id} />
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

export default Diseases;
