import React from "react";

const OpenAiApiKeyInput = ({ setOpenAiApiKey }) => {
  const handleChange = (e) => {
    setOpenAiApiKey(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter OpenAI API Key"
      />
    </div>
  );
};

export default OpenAiApiKeyInput;
