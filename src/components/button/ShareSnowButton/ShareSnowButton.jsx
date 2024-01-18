import React, { useState } from "react";
import instance from "../../../api/axios";
import * as S from "./style";
import AWS from "aws-sdk";

const S3_BUCKET = "snowpickbucket";
const REGION = "ap-northeast-2";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY,
  s3Url: "https://snowpickbucket.s3.amazonaws.com",
  params: { Bucket: S3_BUCKET },
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const ShareSnowButton = ({ flakeImage, setLoading, uploadImageToFirebase }) => {
  // 이미지 업로드 함수

  const uploadImage = () => {
    setLoading(true);
    const params = {
      ACL: "public-read",
      Body: flakeImage,
      Bucket: S3_BUCKET,
      Key: "custom/" + flakeImage.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setTimeout(() => {}, 3000);
      })
      .send((err) => {
        if (err) console.log("image upload error", err);
        setLoading(false);
      });
  };

  return (
    <S.GenerateButton onClick={uploadImageToFirebase}>
      눈송이 공유하기
    </S.GenerateButton>
  );
};

export default ShareSnowButton;
