import React from "react";

const CanvasApiUrlInput = ({ setApiUrl }) => {
  const handleChange = (e) => {
    setApiUrl(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Canvas API URL"
      />
    </div>
  );
};

export default CanvasApiUrlInput;
