import ScaleLoader from "react-spinners/ScaleLoader";
import React from "react";
import { LoadBox, LoadContent, LoagImg } from "./Loading.style";
import logo from "../images/logo.png";

export const Loading = (props: any) => {
  const load = props.value;

  return load ? (
    <LoadBox>
      <LoadContent>
        <LoagImg src={logo} alt="Logo" />
      </LoadContent>

      <LoadContent>
        <ScaleLoader height="130px" width="57px" color="#FFFFFF" radius="8px" />
      </LoadContent>
    </LoadBox>
  ) : (
    <></>
  );
};

export default Loading;
