import React, { useState } from 'react';

export const AutocompleteInput = ({ 
  placeholder, 
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
    <div className="form-group position-relative col-13 col-xl-6">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        style={{ borderRadius: '5px' }}
      />
      {filteredItems.length > 0 && (
        <ul className="list-group position-absolute w-100 bg-dark text-white" style={{ zIndex: 1, maxHeight: '200px', overflowY: 'auto' }}>
          {filteredItems.map((item) => (
            <li
              key={item[valueKey]}
              className="list-group-item list-group-item-action text-white bg-dark"
              onClick={() => handleSelect(item)}
              style={{ cursor: 'pointer' }}
            >
              {item[displayKey]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

