import React, { useState } from "react";
import * as S from "./style";
import ImageDownloadPopup from "../Popup/ImageDownloadPopup";

const ListCard = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickCard = (image) => {
    setSelectedImage(image); // 이미지 state 업데이트
    setShowDownloadPopup(true); // 팝업 show
  };

  const handleDownload = () => {
    // 이미지 다운로드 로직
    // selectedImage를 사용하여 다운로드 할 예정
    setShowDownloadPopup(false); // 팝업 noShow
  };

  const handleCancel = () => {
    setShowDownloadPopup(false); // 팝업 noShow
  };

  return (
    <S.ListContainer>
      <S.ListRowContainer>
        <S.CardContainer onClick={() => handleClickCard("image1.jpg")}>
          <S.ImageContainer src="" />
        </S.CardContainer>
        <S.CardContainer onClick={() => handleClickCard("image1.jpg")}>
          <S.ImageContainer src="" />
        </S.CardContainer>
        <S.CardContainer onClick={() => handleClickCard("image1.jpg")}>
          <S.ImageContainer src="" />
        </S.CardContainer>
        <S.CardContainer onClick={() => handleClickCard("image1.jpg")}>
          <S.ImageContainer src="" />
        </S.CardContainer>
        <S.CardContainer onClick={() => handleClickCard("image1.jpg")}>
          <S.ImageContainer src="" />
        </S.CardContainer>
      </S.ListRowContainer>

      {showDownloadPopup && (
        <ImageDownloadPopup
          onDownload={handleDownload}
          onCancel={handleCancel}
        />
      )}
    </S.ListContainer>
  );
};

export default ListCard;
