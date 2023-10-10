import React, { useState } from 'react';
import quarantineStore from '../../stores/quarantineStore';
import EditQuarantine from './EditQuarantine';
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

const SingleQuarantine = ({ item, index }) => {
  const store = quarantineStore((store) => {
    return {
      editQuarantine: store.editQuarantine,
      deleteQuarantine: store.deleteQuarantine,
      handleUpdateQuarantine: store.handleUpdateQuarantine,
      updateQuarantine: store.updateQuarantine,
      updateFormQuarantine: store.updateFormQuarantine,
    };
  });
  const { isOpenDelete, onToggle, onCloseDelete } = useDisclosure();
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editQuarantine(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Tr key={item._id}>
        <Td>{index + 1}</Td>
        <Td>{item.animal}</Td>
        <Td>{item.condition}</Td>
        <Td>{item.startDate}</Td>
        <Td>{item.endDate}</Td>
        <Td>{item.outcome}</Td>
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
                      onClick={() => store.deleteQuarantine(item._id)}
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
          <EditQuarantine
            updateQuarantine={store.updateQuarantine}
            handleUpdateQuarantine={store.handleUpdateQuarantine}
            updateFormQuarantine={store.updateFormQuarantine}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleQuarantine;
