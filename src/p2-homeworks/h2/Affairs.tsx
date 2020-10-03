import React, { MouseEvent } from 'react';
import Affair from './Affair';
import { AffairType, FilterType } from './HW2';

type AffairsPropsType = {
  data: Array<AffairType>;
  setFilter: (filterValue: FilterType) => void;
  deleteAffairCallback: (id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((item: AffairType) => {
    return (
      <Affair key={item._id} affair={item} deleteAffairCallback={props.deleteAffairCallback} />
    );
  });

  const setAll = (): void => props.setFilter('all');
  const setHigh = (): void => props.setFilter('high');
  const setMiddle = (): void => props.setFilter('middle');
  const setLow = (): void => props.setFilter('low');

  return (
    <>
      <ul>{mappedAffairs}</ul>
      <button type='button' onClick={setAll}>
        All
      </button>
      <button type='button' onClick={setHigh}>
        High
      </button>
      <button type='button' onClick={setMiddle}>
        Middle
      </button>
      <button type='button' onClick={setLow}>
        Low
      </button>
    </>
  );
}

export default Affairs;
