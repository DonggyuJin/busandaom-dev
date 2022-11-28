import styled from "@emotion/styled";
import {
  AlertBox,
  AlertContent,
  AlertLogo,
  AlertSpan,
  AlertBtn,
  AlertBtnLink,
  MiddleBox,
  AlertBtnBox,
  AlertCancelBtn,
  AddressBox,
  AddressSpan,
  AlertAddressSpan,
} from "./Alert.style";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
// import { DataStore } from "@aws-amplify/datastore";
// import { SearchData } from "../models";

interface AlertProps {
  open: boolean;
  setOpen(open: boolean): void;
  alertText: string;
  addressA?: string;
  addressB?: string;
  alertLink?: any;
}

export function AlertModal({ open, setOpen, alertText }: AlertProps) {
  const AlertContainer = styled.div`
    display: ${open ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  `;

  return (
    <AlertContainer>
      <AlertBox>
        <AlertContent>
          <AlertLogo src={logo} alt="Logo"></AlertLogo>
          <AlertSpan>{alertText}</AlertSpan>
          <AlertBtn onClick={() => setOpen(false)}>확인</AlertBtn>
        </AlertContent>
      </AlertBox>
    </AlertContainer>
  );
}

export function AlertSearchModal({
  open,
  setOpen,
  alertText,
  alertLink,
  addressA,
  addressB,
}: AlertProps) {
  const AlertContainer = styled.div`
    display: ${open ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  `;

  const navigate = useNavigate();

  return (
    <AlertContainer>
      <MiddleBox>
        <AlertContent>
          <AlertLogo src={logo} alt="Logo"></AlertLogo>
          {addressA && addressB ? (
            <>
              <AddressBox>
                {addressA && <AddressSpan>1. {addressA}</AddressSpan>}
                {addressB && <AddressSpan>2. {addressB}</AddressSpan>}
              </AddressBox>
              <AlertAddressSpan>{alertText}</AlertAddressSpan>
            </>
          ) : (
            <AlertSpan>{alertText}</AlertSpan>
          )}

          {addressA && addressB ? (
            <AlertBtnBox>
              <AlertCancelBtn onClick={() => setOpen(false)}>
                취소
              </AlertCancelBtn>
              <AlertBtnLink
                onClick={async () => {
                  setOpen(false);

                  // await DataStore.save(
                  //   new SearchData({
                  //     searchAddressA: addressA,
                  //     searchAddressB: addressB,
                  //   })
                  // );

                  navigate(alertLink, {
                    state: {
                      addressA: addressA,
                      addressB: addressB,
                    },
                  });
                }}
              >
                확인
              </AlertBtnLink>
            </AlertBtnBox>
          ) : (
            <AlertCancelBtn onClick={() => setOpen(false)}>확인</AlertCancelBtn>
          )}
        </AlertContent>
      </MiddleBox>
    </AlertContainer>
  );
}
