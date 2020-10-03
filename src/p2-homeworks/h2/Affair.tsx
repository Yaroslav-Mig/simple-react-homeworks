import React from 'react';
import { AffairType } from './HW2';
import style from './Affairs.module.css';

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

  return (
    <li className={style.item}>
      <span className={style.item__title}>{props.affair.name}</span>
      <button className={style.item__btn_remove} type='button' onClick={deleteCallback}>
        X
      </button>
    </li>
  );
}

export default Affair;
