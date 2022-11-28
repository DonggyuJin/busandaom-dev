import styled from "@emotion/styled";

export const LoadBox = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const LoadContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 9%;
`;

export const LoagImg = styled.img`
  width: 100px;
  height: 100px;
`;
