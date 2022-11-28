import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { fadeInAnimation, fadeOutAnimation } from "./Toast.style";

interface ToastProps {
  text: string;
  active: boolean;
  setActive(active: boolean): void;
}

export const Toast = ({ text, active, setActive }: ToastProps) => {
  const ToastBox = styled.div`
    z-index: 100;
    position: absolute;
    display: ${active ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 28px;
    color: #000;
    border-radius: 30px;
    font-size: 11px;
    font-weight: 700;
    animation: ${active &&
    css`
      ${fadeInAnimation("0px", "-10px")} 0.5s, ${fadeOutAnimation(
        "-10px",
        "0px"
      )} 0.5s 1.5s
    `};
    animation-fill-mode: forwards;
  `;

  useEffect(() => {
    if (active === true) {
      setTimeout(() => {
        setActive(false);
      }, 3000);
    }
  });

  return <>{active && <ToastBox>{text}</ToastBox>}</>;
};
