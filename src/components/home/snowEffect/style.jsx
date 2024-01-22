import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  /* min-width: 700px; */
  background-color: white;
  border-radius: 10px;
  padding: 3rem;
  width: 50%;
`;

export const FileInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 14px;
`;

// 파일 업로드 버튼 스타일
export const StyledFileInput = styled.input.attrs({ type: "file" })`
  width: 250px;
  padding: 10px 15px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fafafa;
  cursor: pointer;

  &::file-selector-button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  &:hover::file-selector-button {
    background-color: #45a049;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 300px;
  height: 200px; */
`;
