import { CarProps } from '@/types';
import React from 'react';

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CardDetails = ({ car, closeModal, isOpen }: CardDetailsProps) => {
  return (
    <div>
      <div>CardDetails</div>
    </div>
  );
};

export default CardDetails;
