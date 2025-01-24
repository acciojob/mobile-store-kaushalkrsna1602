import React, { useState } from 'react';
import dataContext from '../context/dataContext';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'iPhone 13',
      price: 69999,
      desc: 'The latest iPhone',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      price: 64999,
      desc: 'Flagship Samsung phone',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
