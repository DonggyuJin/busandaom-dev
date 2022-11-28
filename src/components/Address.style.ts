import styled from "@emotion/styled";

export const AddressBox = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const AddressWrapper = styled.div`
  background-color: #ffffff;
  width: 70vw;
  height: 70vh;
  margin: auto;
  padding: 5px;
  border: 1px solid #acacac;
  border-radius: 10px;
`;

export const AddressCancel = styled.span`
  color: #3b2b03;
  float: right;
  padding-right: 10px;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
`;
