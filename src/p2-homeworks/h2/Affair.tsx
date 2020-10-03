import React from 'react';
import { AffairType } from './HW2';

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

  return (
    <li>
      <span>{props.affair.name}</span>
      <button type='button' onClick={deleteCallback}>
        X
      </button>
    </li>
  );
}

export default Affair;
