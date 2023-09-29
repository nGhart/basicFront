import React, { useEffect, useState } from 'react';
import feedStore from '../../stores/feedStore';
import EditFeed from './EditFeeds';
import Modal from 'react-bootstrap/Modal';
import animalStore from '../../stores/animalStore';

const SingleFeed = ({ item, index }) => {
  const store = feedStore((store) => {
    return {
      editFeed: store.editFeed,
      deleteFeed: store.deleteFeed,
      handleUpdateFeed: store.handleUpdateFeed,
      updateFeed: store.updateFeed,
      updateFormFeed: store.updateFormFeed,
    };
  });

  const animal = animalStore();

  useEffect(() => {
    animal.getAnimals();
  }, [animal]);

  const animals = animal.animals || [];
  let totalAnimals = animals.length;

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editFeed(item);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  function getEstDuration(a, b, c) {
    let duration = Math.floor(a / (b * c));
    return duration;
  }
  let estimate = getEstDuration(
    item.feedQuantity,
    totalAnimals,
    item.feedServing
  );

  function addDaysToDate(originalDate, daysToAdd) {
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
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.feedName}</td>
        <td>{item.feedDatePurchased.slice(0, 10)}</td>
        <td>{item.feedQuantity}</td>
        <td>{item.feedServing}</td>
        <td>{estimate}</td>
        <td>{addDaysToDate(item.feedDatePurchased, estimate)}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteFeed(item._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditFeed
            updateFeed={store.updateFeed}
            handleUpdateFeed={store.handleUpdateFeed}
            updateFormFeed={store.updateFormFeed}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleFeed;
