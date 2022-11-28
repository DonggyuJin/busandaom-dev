import { useNavigate } from "react-router-dom";
import {
  RecommendBox,
  RecommendTitleBox,
  RecommendIcon,
  RecommendTitle,
  RecommendFood,
  RecommendPlay,
  RecommendDaom,
  CategoryBox,
  ShareBox,
  ShareIcon,
  ShareText,
} from "./Recommend.style";
import ShareImg from "../images/share.png";
import ArrowLeft from "../images/arrow_left.png";
import { Toast } from "./Toast";
import { useState } from "react";

interface AddressType {
  address: string;
  middleLat: number;
  middleLng: number;
}

export default function Recommend(
  address: AddressType,
  middleLat: AddressType,
  middleLng: AddressType
) {
  const navigate = useNavigate();
  // 공유 버튼 클릭 이벤트
  const [shareClick, setShareClick] = useState<boolean>(false);
  return (
    <RecommendBox>
      <RecommendTitleBox>
        <RecommendIcon
          src={ArrowLeft}
          alt="ArrowLeftIcon"
          onClick={() => navigate(-1)}
        />
        <RecommendTitle>추천 카테고리</RecommendTitle>
      </RecommendTitleBox>
      <CategoryBox>
        <RecommendFood
          onClick={() => {
            navigate("/map/food", {
              state: {
                middleSpot: address.address,
                middleLat: address.middleLat,
                middleLng: address.middleLng,
                category: "FD6",
                keyword: "근처 맛집",
              },
            });
          }}
        >
          먹거리
        </RecommendFood>
        <RecommendPlay
          onClick={() => {
            navigate("/map/play", {
              state: {
                middleSpot: address.address,
                middleLat: address.middleLat,
                middleLng: address.middleLng,
                category: "CT1",
                keyword: "근처 문화",
              },
            });
          }}
        >
          놀거리
        </RecommendPlay>
        <RecommendDaom
          onClick={() => {
            navigate("/map/daom", {
              state: {
                middleSpot: address.address,
                middleLat: address.middleLat,
                middleLng: address.middleLng,
                category: "AT4",
                keyword: "근처 가볼만한 곳",
              },
            });
          }}
        >
          새로다옴
        </RecommendDaom>
      </CategoryBox>
      <ShareBox>
        <ShareIcon src={ShareImg} alt="ShareIcon" />
        <ShareText
          onClick={() => {
            navigator.clipboard.writeText(address.address);
            setShareClick(!shareClick);
          }}
        >
          주소 공유하기
        </ShareText>
        <Toast
          text={JSON.stringify(address.address) + "가 복사되었습니다."}
          active={shareClick}
          setActive={setShareClick}
        />
      </ShareBox>
    </RecommendBox>
  );
}
