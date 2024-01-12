import React, { useState } from "react";
import instance from "../../../api/axios";
import * as S from "./style";

const ShareSnowButton = ({ flakeImage }) => {
  // 이미지 업로드 함수
  const uploadImage = async () => {
    if (!flakeImage) {
      alert("눈송이 이미지를 먼저 업로드해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("image", flakeImage); // 여기서 flakeImage는 File 객체입니다.
    console.log(formData);
    console.log(flakeImage);
    try {
      const response = await instance.post("/api/v1/custom/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // 요청 성공 시
      console.log("res를 보자" + response.statusCode);
      // 업로드 성공 후 로직
      console.log("눈송이 업로드 성공:", response.data);
      console.log("눈송이 업로드 status:", response.status);
    } catch (error) {
      // 요청 실패 시
      console.error("이미지 업로드 실패:", error);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    }
  };

  return (
    <S.GenerateButton onClick={uploadImage}>눈송이 공유하기</S.GenerateButton>
  );
};

export default ShareSnowButton;
