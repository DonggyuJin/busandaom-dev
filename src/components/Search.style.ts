import styled from "@emotion/styled";

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  height: 40px;
  margin: 12px 0 12px 0;
  border: 1px solid #7bb8f0;
  border-radius: 5px;
  color: #7bb8f0;
  background-color: rgba(123, 184, 240, 0.1);
`;

export const AddressDiv = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  height: 41px;
  margin: 12px 0 12px 0;
  border: none;
  border-radius: 5px;
  color: #000000;
  background-color: rgba(200, 200, 200, 0.3);
`;

export const SearchSpan = styled.span`
  display: block;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const AddBox = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
  font-size: 15px;
  font-weight: 500;
`;

export const AddImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 40px;
  margin: 12px;
  padding: 5px;
  color: #fff;
  background: #e25253;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  :hover {
    background-color: #e06566;
  }
`;
