// DownloadPopup.jsx
import React from "react";
import * as S from "./style";

const GifDownloadPopup = ({ onDownload, onCancel }) => {
  return (
    <S.PopupOverlay>
      <S.PopupContainer>
        <S.BrandText>SnowPick</S.BrandText>
        <S.DownloadTitle>이미지를 다운로드 하시겠습니까?</S.DownloadTitle>
        <S.ButtonConatiner>
          <S.Button onClick={onDownload}>다운로드</S.Button>
          <S.Button onClick={onCancel}>취소</S.Button>
        </S.ButtonConatiner>
      </S.PopupContainer>
    </S.PopupOverlay>
  );
};

export default GifDownloadPopup;
