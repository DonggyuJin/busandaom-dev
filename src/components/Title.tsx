import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { TitleBox, TitleStyle, TitleImg, TitleSpan } from "./Title.style";

export default function Title({
  title,
  memo,
}: {
  title: string;
  memo: string;
}) {
  const navigate = useNavigate();
  return (
    <TitleBox onClick={() => navigate("/")}>
      <TitleStyle>
        <TitleImg src={logo} alt="Logo" />
        {title}
        <TitleSpan>{memo}</TitleSpan>
      </TitleStyle>
    </TitleBox>
  );
}
