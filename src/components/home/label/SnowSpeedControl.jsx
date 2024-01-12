import React from "react";
import * as S from "./style";

const SnowSpeedControl = ({ snowflakeSpeed, setSnowflakeSpeed }) => {
  return (
    <label>
      눈송이 속도:
      <S.Input
        type="range"
        min="0.5"
        max="5"
        step="0.5"
        value={snowflakeSpeed}
        onChange={(e) => setSnowflakeSpeed(e.target.value)}
      />
    </label>
  );
};
export default SnowSpeedControl;
