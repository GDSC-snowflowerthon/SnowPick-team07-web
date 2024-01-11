import React, { useRef, useEffect, useState } from "react";
import GenerateGIFButton from "./components/button/GenerateGIFButton/GenerateGIFButton";

const SnowEffectOnUploadedImage = () => {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [flakeImage, setFlakeImage] = useState(null);

  const [useFlakeImage, setUseFlakeImage] = useState(true);

  // 사용자 설정을 위한 상태
  const [snowflakeSize, setSnowflakeSize] = useState(0.3); // 눈송이 크기
  const [snowflakeSpeed, setSnowflakeSpeed] = useState(1); // 눈송이 속도
  const [snowflakeColor, setSnowflakeColor] = useState(
    "rgba(255, 255, 255, 1)"
  ); // 눈송이 색깔

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setImageSize({ width: img.width, height: img.height });
          setImage(img);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFlakeImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => setFlakeImage(img);
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (!image) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = imageSize.width;
    canvas.height = imageSize.height;

    let requestId;

    const snowflakes = [];
    for (let i = 0; i < 600; i++) {
      snowflakes.push(new Flake(snowflakeSize, snowflakeSpeed, snowflakeColor));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, imageSize.width, imageSize.height);
      for (const flake of snowflakes) {
        flake.update();
        flake.draw(ctx);
      }
      requestId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [
    image,
    imageSize,
    flakeImage,
    snowflakeSize,
    snowflakeSpeed,
    snowflakeColor,
    useFlakeImage,
  ]);

  function Flake(snowflakeSize, snowflakeSpeed, snowflakeColor) {
    this.x = Math.random() * imageSize.width;
    this.y = Math.random() * imageSize.height;
    this.size = (100 / (10 + Math.random() * 100)) * snowflakeSize * 2;
    this.speed = Math.pow(this.size * 0.8, 2) * snowflakeSpeed * 0.1 * 0.001;
    this.speed = this.speed < 1 ? 1 : this.speed;
    this.velY = this.speed * 2;
    this.velX = 0;
    this.stepSize = Math.random() / 120;
    this.step = 0;

    this.update = function () {
      const x = Math.sin((this.step += this.stepSize)) * snowflakeSpeed;
      this.y += this.velY;
      this.x += x;

      if (this.y > imageSize.height || this.x > imageSize.width || this.x < 0) {
        this.reset();
      }
    };

    this.reset = function () {
      this.x = Math.random() * imageSize.width;
      this.y = 0;
    };

    this.draw = function (ctx) {
      if (useFlakeImage && flakeImage) {
        ctx.drawImage(flakeImage, this.x, this.y, this.size, this.size);
      } else {
        ctx.fillStyle = snowflakeColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <input type="file" onChange={handleFlakeImageChange} />
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "auto",
          display: image ? "block" : "none",
        }}
      />

      <div>
        <label>
          눈송이 크기:
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={snowflakeSize}
            onChange={(e) => setSnowflakeSize(e.target.value)}
          />
        </label>
        <label>
          눈송이 속도:
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.5"
            value={snowflakeSpeed}
            onChange={(e) => setSnowflakeSpeed(e.target.value)}
          />
        </label>
        <label>
          눈송이 색깔:
          <input
            type="color"
            value={snowflakeColor}
            onChange={(e) => setSnowflakeColor(e.target.value)}
          />
        </label>
        <label>
          이미지로 눈 표시하기:
          <input
            type="checkbox"
            checked={useFlakeImage}
            onChange={() => setUseFlakeImage(!useFlakeImage)}
          />
        </label>
        <GenerateGIFButton
          canvasRef={canvasRef}
          imageSize={imageSize}
          image={image}
          Flake={Flake}
          snowflakeSize={snowflakeSize}
          snowflakeSpeed={snowflakeSpeed}
          snowflakeColor={snowflakeColor}
        />
      </div>
    </div>
  );
};

export default SnowEffectOnUploadedImage;
