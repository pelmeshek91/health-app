import React, { useState } from 'react';
import s from './СurrentWeightModal.module.css';
import { customStyles } from 'components/Header/Header';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import { customMobileStyles } from '../TargetSelectionModal/TargetSelectionModal';
import { useDispatch } from 'react-redux';
import { updateWeightOperation } from 'redux/user/userOperations';

const СurrentWeightModal = ({ weightModalOpen, setWeightModalOpen }) => {
  const D = new Date();

  const [weight, setWeight] = useState(0);

  const [day] = useState(
    ('0' + D.getDate()).slice(-2) +
      '.' +
      ('0' + (D.getMonth() + 1)).slice(-2) +
      '.' +
      D.getFullYear()
  );

  const dispatch = useDispatch();

  const handleChange = e => {
    setWeight(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateWeightOperation(Number(weight)));
    setWeightModalOpen(false);
  };

  const isMobileScreen = useMediaQuery({ maxWidth: 834 });

  return (
    <>
      <Modal
        className={s.weightModal}
        isOpen={weightModalOpen}
        onRequestClose={() => setWeightModalOpen(false)}
        style={isMobileScreen ? customMobileStyles : customStyles}
        contentLabel="Example Modal"
      >
        {!isMobileScreen && (
          <button
            type="button"
            className={s.closeWeigthModal}
            onClick={() => setWeightModalOpen(false)}
          >
            {IoIosCloseCircleOutline()}
          </button>
        )}
        <h2 className={s.titleWigth}>Enter your current weight</h2>
        <p className={s.subTitleWigth}>You can record your weight once a day</p>
        <p className={s.subDate}>
          Today <span className={s.calendarDate}>{day}</span>
        </p>
        <form onSubmit={handleSubmit} className={s.formWeight}>
          <input
            type="number"
            placeholder="Enter your weight"
            className={s.inputWeigth}
            onChange={handleChange}
            value={weight}
          />
          <button className={s.confirmWeight}>Confirm</button>
          {isMobileScreen && (
            <button
              type="button"
              onClick={() => setWeightModalOpen(false)}
              className={s.cancelTargetButton}
            >
              Cancel
            </button>
          )}
        </form>
      </Modal>
    </>
  );
};

export default СurrentWeightModal;
