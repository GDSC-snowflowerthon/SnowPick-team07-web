import instance from "../../axios";

// API 통신을 수행하는 함수
const getGIF = async () => {
  try {
    // API 요청
    const response = await instance.get("/your-endpoint");

    // 성공적인 응답 처리
    if (response.data && response.data.gif) {
      console.log("GIF URL:", response.data.gif);
      // 여기서 필요한 로직을 추가하면 됩니다.
      // 예: 상태 업데이트, UI에 GIF 표시 등
    } else {
      // 응답 데이터에 'gif' 필드가 없는 경우
      console.error("GIF URL이 응답에 포함되어 있지 않습니다.");
    }
  } catch (error) {
    // 오류 처리
    console.error("API 요청 중 오류 발생:", error);
  }
};

// 함수 내보내기 (다른 파일에서 사용할 수 있도록)
export { getGIF };

// 필요한 곳에서 함수 사용 예:
// getGIF();
