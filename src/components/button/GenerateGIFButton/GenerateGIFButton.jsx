import React, { useState } from "react";
import instance from "../../../api/axios";
import * as S from "./style";
import GIF from "gif.js";
import GifDownloadPopup from "../../Popup/GifDownloadPopup";

const GenerateGIFButton = ({
  canvasRef,
  imageSize,
  image,
  Flake, // 클래스
  snowflakeSize,
  snowflakeSpeed,
  snowflakeColor,
}) => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [gifUrl, setGifUrl] = useState(null); // PC에서 다운로드용 상태
  const [gifBlob, setGifBlob] = useState(null); // gif blob 상태

  const generateGIF = () => {
    if (!canvasRef.current || !image) {
      alert("이미지를 선택해주세요.");
      return;
    } else {
      setShowDownloadPopup(true);
    }

    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: imageSize.width,
      height: imageSize.height,
    });

    const ctx = canvasRef.current.getContext("2d");
    const originalSpeed = snowflakeSpeed;
    const increasedSpeed = originalSpeed * 6;
    const snowflakes = createSnowflakes(increasedSpeed);

    gif.on("finished", function (blob) {
      // 공유하기 POST로 보낼 gifBlob 업데이트
      setGifBlob(blob);
      const url = URL.createObjectURL(blob);
      // 팝업에 props로 보낼 gifUrl에 값 넣기
      setGifUrl(url);

      // 다운로드 링크 생성
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
    });

    const drawFrame = () => {
      ctx.clearRect(0, 0, imageSize.width, imageSize.height);
      ctx.drawImage(image, 0, 0, imageSize.width, imageSize.height);
      snowflakes.forEach((flake) => {
        flake.update();
        flake.draw(ctx);
      });
    };

    for (let i = 0; i < 50; i++) {
      drawFrame(snowflakes); // 증가된 속도의 눈송이 사용
      gif.addFrame(canvasRef.current, { copy: true, delay: 2 });
    }

    gif.render();
  };

  const createSnowflakes = (speed) => {
    const flakes = [];
    for (let i = 0; i < 600; i++) {
      flakes.push(new Flake(snowflakeSize, speed, snowflakeColor));
    }
    return flakes;
  };

  // 팝업 관련
  const handleDownload = () => {
    // 이미지 다운로드 로직
    // selectedImage를 사용하여 다운로드 할 예정
    setShowDownloadPopup(false); // 팝업 noShow
  };

  const handleCancel = () => {
    setShowDownloadPopup(false); // 팝업 noShow
  };

  // gif post 함수
  const uploadGIF = async () => {
    if (!gifBlob) return;

    const formData = new FormData();
    formData.append("gif", gifBlob, "snow_effect.gif");

    try {
      const response = await instance.post("/api/v1/gif", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res를 보자" + response.statusCode);
      // 업로드 성공 후 로직
      console.log("GIF 업로드 성공:", response.data);
      console.log("GIF 업로드 status:", response.status);
    } catch (error) {
      // 업로드 실패 로직
      console.error("GIF 업로드 실패:", error);
    }
  };

  return (
    <>
      <S.GenerateButton onClick={generateGIF}>
        GIF 이미지 생성하기
      </S.GenerateButton>
      {showDownloadPopup && (
        <GifDownloadPopup
          gifUrl={gifUrl}
          onDownload={handleDownload}
          onCancel={handleCancel}
          onShare={uploadGIF}
        />
      )}
    </>
  );
};

export default GenerateGIFButton;
