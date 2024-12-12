import React, { useState } from 'react';

export const AutocompleteInput = ({ 
  placeholder,
  name, 
  data, 
  onSelect, 
  displayKey, 
  valueKey,
  filterFunction
}) => {

  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = data.filter(item => filterFunction(item, value));
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  const handleSelect = (item) => {
    setInputValue(item[displayKey]);
    setFilteredItems([]);
    onSelect(item);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={inputValue}
        name={name}
        onChange={handleInputChange}
        style={{ borderRadius: '5px', width: '100%' }}
      />
      {filteredItems.length > 0 && (
        <ul className="list-group position-absolute w-100 bg-dark text-white" style={{ zIndex: 1, maxWidth: '300px', maxHeight: '200px', overflowY: 'auto' }}>
          {filteredItems.map((item) => (
            <li
              key={item[valueKey]+item[displayKey]}
              className="list-group-item list-group-item-action text-white bg-dark"
              onClick={() => handleSelect(item)}
              style={{ cursor: 'pointer' }}
            >
              {item[displayKey]}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

