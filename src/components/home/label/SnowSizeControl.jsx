import React from "react";

const SnowflakeSizeControl = ({ snowflakeSize, setSnowflakeSize }) => {
  return (
    <label>
      눈송이 크기:
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.1"
        value={snowflakeSize}
        onChange={(e) => setSnowflakeSize(e.target.value)}
      />
    </label>
  );
};

export default SnowflakeSizeControl;
