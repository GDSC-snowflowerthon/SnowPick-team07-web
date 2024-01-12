import React from "react";
import * as S from "./style";

const SnowColorControl = ({ snowflakeColor, setSnowflakeColor }) => {
  return (
    <S.Label>
      눈송이 색깔:
      <input
        type="color"
        value={snowflakeColor}
        onChange={(e) => setSnowflakeColor(e.target.value)}
      />
    </S.Label>
  );
};
export default SnowColorControl;
