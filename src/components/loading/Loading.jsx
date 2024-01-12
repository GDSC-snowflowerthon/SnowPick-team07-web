import React from "react";
import styled from "styled-components";

// 모달 오버레이 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 내용 스타일
const ModalContent = styled.div`
  font-size: 40px;
  background-color: white;
  border-radius: 25px;
  padding: 40px;
`;

const LoadingModal = () => (
  <ModalOverlay>
    <ModalContent>로딩중입니다...</ModalContent>
  </ModalOverlay>
);

export default LoadingModal;
