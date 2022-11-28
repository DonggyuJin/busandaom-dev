import styled from "@emotion/styled";

export const AlertBox = styled.div`
  width: 35vw;
  height: 35vh;
  background-color: #6da3d4;
  text-align: center;
  border-radius: 20px;
  padding: 30px 30px;
`;

export const MiddleBox = styled.div`
  width: 35vw;
  height: 35vh;
  background-color: #000000;
  text-align: center;
  border-radius: 20px;
  padding: 30px 30px;
`;

export const AlertContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const AlertLogo = styled.img`
  width: 69px;
  height: 69px;
`;

export const AlertSpan = styled.span`
  display: block;
  color: #ffffff;
  margin: 5vh 0 5vh 0;
  font-size: 24px;
  font-weight: 700;
  white-space: pre-line;
`;

export const AddressBox = styled.div`
  margin-top: 1vh;
  text-align: left;
`;

export const AddressSpan = styled.span`
  display: block;
  color: #ffffff;
  margin: 1vh 0 1vh 0;
  font-size: 16px;
  font-weight: 300;
  white-space: pre-line;
`;

export const AlertAddressSpan = styled.span`
  display: block;
  color: #ffffff;
  margin: 3vh 0 4vh 0;
  font-size: 20px;
  font-weight: 700;
  white-space: pre-line;
`;

export const AlertBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 45px;
  color: #000000;
  background-color: #fdd97a;
  border: none;
  border-radius: 25px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
`;

export const AlertBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AlertBtnLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 45px;
  margin-left: 10px;
  color: #ffffff;
  background-color: #ca595a;
  border: none;
  border-radius: 25px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background-color: #d96c6d;
  }
`;

export const AlertCancelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 45px;
  color: #ca595a;
  background-color: #4b4b4b;
  border: none;
  border-radius: 25px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #636363;
  }
`;
