import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import matingStore from '../../stores/matingStore';
import EditMating from './EditMating';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  useDisclosure,
  Button,
  Tr,
  Td,
} from '@chakra-ui/react';

const SingleMating = ({ item, index }) => {
  const store = matingStore((store) => {
    return {
      editMating: store.editMating,
      deleteMating: store.deleteMating,
      handleUpdateMating: store.handleUpdateMating,
      updateMating: store.updateMating,
      updateFormMating: store.updateFormMating,
    };
  });
  const { isOpenDelete, onToggle, onCloseDelete } = useDisclosure();
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editMating(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  function addDaysToDate(originalDate, daysToAdd) {
    //console.log('og date', originalDate);
    const date = new Date(originalDate);
    //console.log('date', date);
    date.setDate(date.getDate() + daysToAdd);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
    return formattedDate.slice(0, 10);
  }

  return (
    <>
      <Tr key={item._id}>
        <Td>{index + 1}</Td>
        <Td>{item.matingDoe}</Td>
        <Td>{item.matingBuck}</Td>
        <Td>{item.matingDate1.slice(0, 10)}</Td>
        <Td>{item.matingDate2.slice(0, 10)}</Td>
        <Td>{addDaysToDate(item.matingDate2, 28)}</Td>
        <Td>{item.nesting}</Td>
        <Td>{item.kindling}</Td>
        <Td>{item.status}</Td>
        <Td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <Popover>
              <PopoverTrigger>
                <button className="actionIcons" onClick={onToggle}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Header</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    Are you sure you want to delete this entry
                  </PopoverBody>
                  <PopoverFooter>
                    <Button
                      colorScheme="red"
                      onClick={() => store.deleteAnimal(item._id)}
                    >
                      Delete
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
        </Td>
      </Tr>
      <Modal show={showModal} onHide={handleCloseModal} scrollable={true}>
        <Modal.Header className="header" closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditMating
            updateMating={store.updateMating}
            handleUpdateMating={store.handleUpdateMating}
            updateFormMating={store.updateFormMating}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleMating;
