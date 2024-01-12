// DownloadPopup.jsx
import React from "react";
import * as S from "./style";

const GifDownloadPopup = ({ gifUrl, onDownload, onCancel, onShare }) => {
  // 기존 a태그를 버튼으로 바꾸기 위한 로직
  const handleDownloadClick = () => {
    if (!gifUrl) return;

    // 다운로드 링크 생성 및 클릭
    const link = document.createElement("a");
    link.href = gifUrl;
    link.download = "snow_effect.gif";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (onDownload) {
      onDownload(); // 다운로드 로직 작성해서 여기 넣기.
    }
  };

  const handleShareClick = () => {
    if (typeof onShare === "function") {
      onShare();
    } else {
      console.error("onShare is not a function");
    }
  };

  return (
    <S.PopupOverlay>
      <S.PopupContainer>
        <S.BrandText>SnowPick</S.BrandText>
        <S.DownloadTitle>이미지를 다운로드 하시겠습니까?</S.DownloadTitle>
        <S.ButtonConatiner>
          <S.Button onClick={handleDownloadClick}>다운로드</S.Button>
          <S.Button onClick={handleShareClick}>공유하기</S.Button>
          <S.Button onClick={onCancel}>닫기</S.Button>
        </S.ButtonConatiner>
      </S.PopupContainer>
    </S.PopupOverlay>
  );
};

export default GifDownloadPopup;
