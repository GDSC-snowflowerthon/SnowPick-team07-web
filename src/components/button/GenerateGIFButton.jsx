import React from "react";
import GIF from "gif.js";

const GenerateGIFButton = ({
  canvasRef,
  imageSize,
  image,
  Flake, // 클래스
  snowflakeSize,
  snowflakeSpeed,
  snowflakeColor,
}) => {
  const generateGIF = () => {
    if (!canvasRef.current || !image) return;

    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: imageSize.width,
      height: imageSize.height,
    });

    const ctx = canvasRef.current.getContext("2d");
    const snowflakes = createSnowflakes();

    gif.on("finished", function (blob) {
      const url = URL.createObjectURL(blob);

      // 다운로드 링크 생성
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "snow_effect.gif"; // 다운로드되는 파일의 이름
      downloadLink.text = "Download GIF"; // 링크 텍스트
      downloadLink.style.display = "block"; // 링크를 보이게 설정
      document.body.appendChild(downloadLink); // 링크를 문서에 추가
    });

    const drawFrame = () => {
      ctx.clearRect(0, 0, imageSize.width, imageSize.height);
      ctx.drawImage(image, 0, 0, imageSize.width, imageSize.height);
      snowflakes.forEach((flake) => {
        flake.update();
        flake.draw(ctx);
      });
    };

    for (let i = 0; i < 20; i++) {
      drawFrame();
      gif.addFrame(canvasRef.current, { copy: true, delay: 200 });
    }

    gif.render();
  };

  const createSnowflakes = () => {
    const flakes = [];
    for (let i = 0; i < 600; i++) {
      flakes.push(new Flake(snowflakeSize, snowflakeSpeed, snowflakeColor));
    }
    return flakes;
  };

  return <button onClick={generateGIF}>Generate GIF</button>;
};

export default GenerateGIFButton;
