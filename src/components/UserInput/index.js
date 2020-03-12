import React, { useState } from 'react';
import './UserInput.scss';

function UserInput({ value, editButtonClicked }) {
  const [input, setInput] = useState({});

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      disabled={editButtonClicked ? false : true}
    ></input>
  );
}

export default UserInput;
