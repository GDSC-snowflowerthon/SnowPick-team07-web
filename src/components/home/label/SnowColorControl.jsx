import React from "react";

const SnowColorControl = ({ snowflakeColor, setSnowflakeColor }) => {
  return (
    <label>
      눈송이 색깔:
      <input
        type="color"
        value={snowflakeColor}
        onChange={(e) => setSnowflakeColor(e.target.value)}
      />
    </label>
  );
};
export default SnowColorControl;
