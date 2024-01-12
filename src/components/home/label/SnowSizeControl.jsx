import React from "react";
import * as S from "./style";

const SnowflakeSizeControl = ({ snowflakeSize, setSnowflakeSize }) => {
  return (
    <label>
      눈송이 크기:
      <S.Input
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
