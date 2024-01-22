import React, { useState, useEffect } from "react";
import * as S from "./style";
import ImageDownloadPopup from "../Popup/ImageDownloadPopup";
import { fstorage } from "../../firebase";

import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";

const ListCard = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const BASE_API_URL = process.env.REACT_APP_API;

  //   async function fetchData() {
  //     try {
  //       const response = await fetch(BASE_API_URL + "/custom/image");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const result = await response.json();
  //       setData(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    const imageRef = ref(fstorage, `/image/`);
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
    setSelectedImage(image);
    setShowDownloadPopup(true);
  };

  const downloadFileFromFirebase = (url) => {
    getDownloadURL(ref(fstorage, selectedImage))
      .then((url) => {
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            const urlObject = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = urlObject;
            a.download = "downloaded-image.jpg";
            document.body.appendChild(a);
            a.click();
            a.remove();
          })
          .catch((e) => console.error(e));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const downloadFileFromFirebase = (url) => {
  //   getDownloadURL(ref(fstorage, selectedImage))
  //     .then((url) => {
  //       console.log(url);
  //       console.log("AAA");
  //       const xhr = new XMLHttpRequest();
  //       xhr.responseType = "blob";
  //       xhr.onload = (event) => {
  //         const blob = xhr.response;
  //         console.log(blob);
  //       };
  //       xhr.open("GET", url);
  //       xhr.send();

  //       // const img = document.getElementById("myimg");
  //       // img.setAttribute("src", url);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  // };

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
    setShowDownloadPopup(false);
  };

  return (
    <S.ListContainer>
      <S.ListRowContainer>
        {data.map((res, idx) => (
          <S.CardContainer onClick={() => handleClickCard(res)} key={res + idx}>
            <S.ImageContainer src={res} />
          </S.CardContainer>
        ))}
      </S.ListRowContainer>

      {showDownloadPopup && (
        <ImageDownloadPopup
          onDownload={downloadFileFromFirebase}
          onCancel={handleCancel}
        />
      )}
    </S.ListContainer>
  );
};

export default ListCard;
