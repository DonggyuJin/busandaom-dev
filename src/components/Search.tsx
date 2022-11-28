import { useState } from "react";
import {
  SearchButton,
  SearchDiv,
  SearchSpan,
  AddressDiv,
  AddBox,
  AddImg,
} from "./Search.style";
import AddressModal from "./Address";
import { AlertModal, AlertSearchModal } from "./Alert";
import friend from "../images/friend.png";

export default function Search() {
  // 주소 모달
  const [addressA, setAddressA] = useState<string>("");
  const [addressB, setAddressB] = useState<string>("");
  const [searchPopupA, setSearchPopupA] = useState<boolean>(false);
  const [searchPopupB, setSearchPopupB] = useState<boolean>(false);

  // 친구 추가하기 모달
  const [addPopup, setAddPopup] = useState<boolean>(false);

  // 중간지점 검색 모달
  const [middlePopup, setMiddlePopup] = useState<boolean>(false);

  return (
    <>
      <AddressModal
        address={addressA}
        setAddress={setAddressA}
        searchPopup={searchPopupA}
        setSearchPopup={setSearchPopupA}
      />
      <AddressModal
        address={addressB}
        setAddress={setAddressB}
        searchPopup={searchPopupB}
        setSearchPopup={setSearchPopupB}
      />
      <AlertModal
        open={addPopup}
        setOpen={setAddPopup}
        alertText="현재 준비중인 서비스입니다."
      />
      <AlertSearchModal
        open={middlePopup}
        setOpen={setMiddlePopup}
        addressA={addressA}
        addressB={addressB}
        alertLink="/map"
        alertText={
          addressA && addressB
            ? "위의 주소를 기준으로\n중간지점을 검색해드릴까요?"
            : "주소를 모두 입력해주세요!"
        }
      />
      {addressA === "" ? (
        <SearchDiv onClick={() => setSearchPopupA(!searchPopupA)}>
          <SearchSpan>1. 출발 장소를 입력해주세요.</SearchSpan>
        </SearchDiv>
      ) : (
        <AddressDiv onClick={() => setSearchPopupA(!searchPopupA)}>
          <SearchSpan>1. {addressA}</SearchSpan>
        </AddressDiv>
      )}
      {addressB === "" ? (
        <SearchDiv onClick={() => setSearchPopupB(!searchPopupB)}>
          <SearchSpan>2. 출발 장소를 입력해주세요.</SearchSpan>
        </SearchDiv>
      ) : (
        <AddressDiv onClick={() => setSearchPopupB(!searchPopupB)}>
          <SearchSpan>2. {addressB}</SearchSpan>
        </AddressDiv>
      )}
      <AddBox onClick={() => setAddPopup(!addPopup)}>
        <AddImg src={friend} alt="Add Friend" />
        친구 추가하기
      </AddBox>
      <SearchButton onClick={() => setMiddlePopup(!middlePopup)}>
        중간지점 검색
      </SearchButton>
    </>
  );
}
