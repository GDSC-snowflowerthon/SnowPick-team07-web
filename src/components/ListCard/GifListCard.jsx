import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { fstorage } from "../../firebase";
import ImageDownloadPopup from "../Popup/ImageDownloadPopup";

const GifListCard = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const BASE_API_URL = process.env.REACT_APP_API;

  //   async function fetchData() {
  //     try {
  //       const response = await fetch(BASE_API_URL + "/gif");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    const imageRef = ref(fstorage, `/gif/`);
    listAll(imageRef).then((response) => {
      // console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setData((prev) => [...prev, url]);
        });
      });
    });
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
    url =
      process.env.REACT_APP_S3 + "gif/" + extractFilenameFromUrl(selectedImage);

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
    setShowDownloadPopup(false);
  };

  return (
    <S.ListContainer>
      <S.GifListContiner>
        {data.map((res) => (
          <S.GifCardContainer onClick={() => handleClickCard(res)} key={res}>
            <S.GifImageContainer src={res} />
          </S.GifCardContainer>
        ))}
      </S.GifListContiner>

      {showDownloadPopup && (
        <ImageDownloadPopup onDownload={downloadFile} onCancel={handleCancel} />
      )}
    </S.ListContainer>
  );
};

export default GifListCard;
