import Title from "../components/Title";
import Search from "../components/Search";
import styled from "@emotion/styled";

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 70vw;
  height: 75vh;
  border-radius: 15px;
  z-index: 999;
`;

export default function Home() {
  return (
    <>
      <Box>
        <Title title="부산다옴" memo="web" />
        <Search />
      </Box>
    </>
  );
}
