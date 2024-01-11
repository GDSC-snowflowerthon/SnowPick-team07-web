// style.jsx
import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  overflow-y: auto;
  padding: 10px; // 컨테이너 내부에 패딩
  gap: 10px; // 카드 사이에 간격
`;

export const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px; // 카드 사이에 마진
  padding: 5px;
  background-color: green;
`;
