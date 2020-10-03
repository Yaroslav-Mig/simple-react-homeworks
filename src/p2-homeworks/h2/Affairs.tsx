import React, { MouseEvent } from 'react';
import Affair from './Affair';
import { AffairType, FilterType } from './HW2';
import style from './Affairs.module.css';

type AffairsPropsType = {
  data: Array<AffairType>;
  filter: FilterType;
  setFilter: (filterValue: FilterType) => void;
  deleteAffairCallback: (id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((item: AffairType) => {
    return <Affair key={item._id} affair={item} deleteAffairCallback={props.deleteAffairCallback} />;
  });

  const setAll = (): void => props.setFilter('all');
  const setHigh = (): void => props.setFilter('high');
  const setMiddle = (): void => props.setFilter('middle');
  const setLow = (): void => props.setFilter('low');

  return (
    <div className={style.box}>
      <ul className={style.box__items}>{mappedAffairs}</ul>
      <div className={style.box__btn}>
        <button
          className={props.filter === 'all' ? `${style.btn__filter} ${style.btn_active}` : style.btn__filter}
          type='button'
          onClick={setAll}>
          All
        </button>
        <button
          className={props.filter === 'high' ? `${style.btn__filter} ${style.btn_active}` : style.btn__filter}
          type='button'
          onClick={setHigh}>
          High
        </button>
        <button
          className={
            props.filter === 'middle' ? `${style.btn__filter} ${style.btn_active}` : style.btn__filter
          }
          type='button'
          onClick={setMiddle}>
          Middle
        </button>
        <button
          className={props.filter === 'low' ? `${style.btn__filter} ${style.btn_active}` : style.btn__filter}
          type='button'
          onClick={setLow}>
          Low
        </button>
      </div>
    </div>
  );
}

export default Affairs;
