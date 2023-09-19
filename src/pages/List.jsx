import { styled } from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";
import TopImg from "../assets/페이지_상단테스트-001.png";
import BottomImg from "../assets/페이지_하단테스트-001.png";


const List = () => {
  return (
    <>
      <Header />
      <BaseImg src={TopImg} />
      <BaseImg src={BottomImg} />
      <BaseImg src={BottomImg} />
    </>
  );
};

export default List;



const BaseImg = styled.img`
  display: block;
  vertical-align: top;
`;