import React, { useState } from 'react';
import medStore from '../../stores/medStore';
import EditMed from './EditMed';
import Modal from 'react-bootstrap/Modal';
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

const SingleMed = ({ item, index }) => {
  const store = medStore((store) => {
    return {
      editMed: store.editMed,
      deleteMed: store.deleteMed,
      handleUpdateMed: store.handleUpdateMed,
      updateMed: store.updateMed,
      updateFormMed: store.updateFormMed,
    };
  });
  const { isOpenDelete, onToggle, onCloseDelete } = useDisclosure();
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editMed(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Tr key={item._id}>
        <Td>{index + 1}</Td>
        <Td>{item.name}</Td>
        <Td>{item.number}</Td>
        <Td>{item.supplier}</Td>
        <Td>{item.expiryDate}</Td>
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
                      onClick={() => store.deleteMed(item._id)}
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
          <EditMed
            updateMed={store.updateMed}
            handleUpdateMed={store.handleUpdateMed}
            updateFormMed={store.updateFormMed}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleMed;
