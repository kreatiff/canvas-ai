import React, { useState } from "react";

const ApiKeyInput = ({ setApiKey }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setApiKey(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter API Key"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ApiKeyInput;
