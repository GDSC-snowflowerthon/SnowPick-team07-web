import styled from "styled-components";

// 팝업을 포함한, 위에 올라갈 페이지
export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 팝업이 들어갈 컨테이너
export const PopupContainer = styled.div`
  position: relative;
  width: 330px;
  height: 140px;
  background: white;
  padding: 0 20px 0 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border: 0.5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 다운로드 문구
export const DownloadTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

// 버튼들이 들어갈 div
export const ButtonConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// 각 버튼 개체
export const Button = styled.button`
  width: 90px;
  height: 30px;
  font-size: 14px;
  border: 0px;
  border-radius: 10px;
  background-color: #b9b9b9;
  color: black;
`;

// 팝업 우측 상단 SnowPick 텍스트
export const BrandText = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  color: #707070;
`;
