import styled from "styled-components";
import CardImg from "../../assets/images/cardImg.png";

export const ListContainer = styled.div`
  /* width: 1536px; */
  /* height: 100vh; */
  height: 100%;
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
  /* background-image: url(${CardImg}); */
  /* background-size: cover;
  background-position: center; */
`;

export const GifCardContainer = styled.div`
  width: 280px;
  height: 200px;
  border-radius: 10px;
  margin: 30px; // 카드 사이에 마진
  box-shadow: 5px 5px;
  /* padding: 5px; */
  /* background-image: url(${CardImg}); */
  /* background-size: cover;
  background-position: center;
  repeat: no-repeat; */
`;

export const ImageContainer = styled.img`
  border-radius: 100%;
  box-shadow: 5px 5px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  margin: 26px 16px;
  width: 210px;
  height: 135px;
`;

export const GifImageContainer = styled.img`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  /* margin: 68px 42px; */
  width: 280px;
  height: 200px;
`;

export const ListRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  margin-left: 50px;
  margin-top: 50px;
`;

export const GifListContiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  margin-left: 0px;
  margin-top: 0px;
`;
