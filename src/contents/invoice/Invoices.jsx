import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import SingleInvoice from './SingleInvoice';
import Table from 'react-bootstrap/Table';
import invoiceStore from '../../stores/invoiceStore';

const Invoices = () => {
  const store = invoiceStore();
  const [currentPage, setCurrentPage] = useState(1);
  const invoices = store.invoices || [];
  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = invoices.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(invoices.length / itemsPerPage);
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
            <th>DOE PRICE</th>
            <th>DOE COUNT</th>
            <th>BUCK PRICE</th>
            <th>BUCK COUNT</th>
            <th>KIT PRICE</th>
            <th>KIT COUNT</th>
            {/* <th>MANURE PRICE</th>
            <th>MANURE COUNT</th> */}
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return (
              <SingleInvoice index={newIndex} item={item} key={item._id} />
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

export default Invoices;
