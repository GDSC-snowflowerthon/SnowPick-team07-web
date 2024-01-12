import styled from "styled-components";
import CardImg from "../../assets/images/cardImg.png";

export const ListContainer = styled.div`
  width: 1536px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  overflow-y: scroll;
  padding: 10px; // 컨테이너 내부에 패딩
  gap: 10px; // 카드 사이에 간격
`;

export const CardContainer = styled.div`
  width: 290px;
  height: 185px;
  /* border: 1px solid black; */
  border-radius: 10px;
  margin: 5px; // 카드 사이에 마진
  padding: 5px;
  /* background-color: green; */
  background-image: url(${CardImg});
  background-size: cover;
  background-position: center;
`;

export const ListRowContainer = styled.div`
  witdh: 800px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  overflow-y: auto;
  margin-left: 60px;
`;

export const ImageContainer = styled.img`
  align-items: center;
  justify-content: center;
  margin: 26px 16px;
  background-color: yellow;
  width: 210px;
  height: 135px;
`;
