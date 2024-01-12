import React, { useState, useEffect } from "react";
import * as S from "./style";
import ImageDownloadPopup from "../Popup/ImageDownloadPopup";

const ListCard = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const BASE_API_URL = process.env.REACT_APP_API;

    async function fetchData() {
      try {
        const response = await fetch(BASE_API_URL + "/custom/image");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const extractFilenameFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  const handleClickCard = (image) => {
    setSelectedImage(image); // 이미지 state 업데이트
    setShowDownloadPopup(true); // 팝업 show
  };

  const downloadFile = (url) => {
    console.log(extractFilenameFromUrl(selectedImage));
    url =
      process.env.REACT_APP_S3 +
      "custom/" +
      extractFilenameFromUrl(selectedImage);

    fetch(url, { method: "GET" })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = extractFilenameFromUrl(selectedImage);
        document.body.appendChild(a);
        a.click();
        setTimeout((_) => {
          window.URL.revokeObjectURL(url);
        }, 60000);
        a.remove();
        console.log();
        // setOpen(false);
      })
      .catch((err) => {
        console.error("err: ", err);
      });
  };

  const handleCancel = () => {
    setShowDownloadPopup(false); // 팝업 noShow
  };

  return (
    <S.ListContainer>
      <S.ListRowContainer>
        {data.map((res) => (
          <S.CardContainer onClick={() => handleClickCard(res)}>
            <S.ImageContainer src={res} />
          </S.CardContainer>
        ))}
      </S.ListRowContainer>

      {showDownloadPopup && (
        <ImageDownloadPopup onDownload={downloadFile} onCancel={handleCancel} />
      )}
    </S.ListContainer>
  );
};

export default ListCard;
