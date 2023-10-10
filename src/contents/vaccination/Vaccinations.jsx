import React, { useState } from 'react';
import SingleVaccination from './SingleVaccination';
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
import vaccinationStore from '../../stores/vaccinationStore';

const Vaccinations = () => {
  const store = vaccinationStore();
  const [currentPage, setCurrentPage] = useState(1);
  const vaccinations = store.vaccinations || [];
  const itemsPerPage = 7;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = vaccinations.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(vaccinations.length / itemsPerPage);
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
        <Table size="lg">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>MEDICATION</Th>
              <Th>DATE</Th>
              <Th>INTERVAL(days)</Th>
              <Th>NEXT DATE</Th>
              <Th>STATUS</Th>
              <Th>ACTIONS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {itemsShown.map((item, index) => {
              const newIndex = firstIndex + index;
              return (
                <SingleVaccination
                  index={newIndex}
                  item={item}
                  key={item._id}
                />
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

export default Vaccinations;
