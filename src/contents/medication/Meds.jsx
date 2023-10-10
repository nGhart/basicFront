import React, { useState } from 'react';
import SingleMed from './SingleMed';
import medStore from '../../stores/medStore';
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

const Meds = () => {
  const store = medStore();
  const [currentPage, setCurrentPage] = useState(1);
  const meds = store.meds || [];
  const itemsPerPage = 7;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = meds.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(meds.length / itemsPerPage);
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
              <Th>NAME</Th>
              <Th>BATCH NO</Th>
              <Th>SUPPLIER</Th>
              <Th>EXPIRY DATE</Th>
              <Th>STATUS</Th>
              <Th>ACTIONS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {itemsShown.map((item, index) => {
              const newIndex = firstIndex + index;
              return <SingleMed index={newIndex} item={item} key={item._id} />;
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

export default Meds;
