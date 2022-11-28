import styled from "@emotion/styled";
import Food from "../images/food.png";
import Play from "../images/play.png";
import Daom from "../images/daom.png";

export const RecommendBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 18vw;
  height: 35vh;
  background-color: #ffffff;
  text-align: center;
  border-radius: 15px;
  margin-right: 3vw;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const RecommendTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecommendIcon = styled.img`
  width: 12px;
  height: 18px;
  margin-right: 15px;
  cursor: pointer;
`;

export const RecommendTitle = styled.h1`
  display: block;
  margin: 20px 0;
  color: #000000;
  font-size: 20px;
  font-weight: 800;
  word-break: keep-all;
`;

export const CategoryBox = styled.ul`
  margin: 15px 0;
`;

export const RecommendFood = styled.li`
  display: block;
  margin: 22px 0;
  color: #b24e4f;
  font-size: 16px;
  font-weight: 500;
  word-break: keep-all;
  white-space: pre-line;
  cursor: pointer;

  ::before {
    background: url(${Food}) no-repeat 0px 0px;
    content: "";
    display: inline-block;
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
`;

export const RecommendPlay = styled.li`
  display: block;
  margin: 22px 0;
  color: #b24e4f;
  font-size: 16px;
  font-weight: 500;
  word-break: keep-all;
  white-space: pre-line;
  cursor: pointer;

  ::before {
    background: url(${Play}) no-repeat 0px 0px;
    content: "";
    display: inline-block;
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
`;

export const RecommendDaom = styled.li`
  display: block;
  margin: 22px 0;
  color: #b24e4f;
  font-size: 16px;
  font-weight: 500;
  word-break: keep-all;
  white-space: pre-line;
  cursor: pointer;

  ::before {
    background: url(${Daom}) no-repeat 0px 0px;
    content: "";
    display: inline-block;
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
`;

export const ShareBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const ShareIcon = styled.img`
  width: 18px;
  height: 20px;
  margin-right: 10px;
`;

export const ShareText = styled.h4`
  color: #006be0;
  font-size: 18px;
  font-weight: 700;
`;
