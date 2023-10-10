import React, { useState } from 'react';
import SingleMating from './SingleMating';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import matingStore from '../../stores/matingStore';

const Matings = () => {
  const store = matingStore();
  const [currentPage, setCurrentPage] = useState(1);
  const matings = store.matings || [];
  const itemsPerPage = 7;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = matings.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(matings.length / itemsPerPage);
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
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>DOE</Th>
              <Th>BUCK</Th>
              <Th>FIRST SERVICING</Th>
              <Th>LAST SERVICING</Th>
              <Th>ESTIMATED NESTING DATE</Th>
              <Th>NESTING DATE</Th>
              <Th>KINDLING DATE</Th>
              <Th>STATUS</Th>
              <Th>ACTIONS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {itemsShown.map((item, index) => {
              const newIndex = firstIndex + index;
              return (
                <SingleMating index={newIndex} item={item} key={item._id} />
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

export default Matings;
