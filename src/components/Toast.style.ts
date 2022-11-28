import { keyframes } from "@emotion/react";

export const fadeInAnimation = (top1: string, top2: string) => keyframes`
  0% { top: ${top1}; opacity: 0; }
  50% { opacity: 0.6;}
  100% { top: ${top2}; opacity: 1; }
`;
export const fadeOutAnimation = (top1: string, top2: string) => keyframes`
  0% { top: ${top1}; opacity: 1; } 
  50% { opacity: 0.4;}
  100% { top: ${top2}; opacity: 0; }
`;
