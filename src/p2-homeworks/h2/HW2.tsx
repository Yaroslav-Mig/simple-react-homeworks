import React, { useState } from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';
export type AffairType = {
  _id: number;
  name: string;
  priority: string;
};
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'HTML & CSS', priority: 'middle' },
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
  const filterFunc = (item: AffairType): boolean => item.priority === filter;
  switch (filter) {
    case 'all':
      return affairs;
    case 'low':
      return affairs.filter(filterFunc);
    case 'middle':
      return affairs.filter(filterFunc);
    case 'high':
      return affairs.filter(filterFunc);
  }
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
  return affairs.filter((item) => item._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

  return (
    <>
      <hr />
      homeworks 2
      <Affairs
        filter={filter}
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      <hr />
    </>
  );
}

export default HW2;
