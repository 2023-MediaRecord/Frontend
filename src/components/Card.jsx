//import React from 'react';
import { styled } from "styled-components";
//import React, { useState, useEffect } from "react";
//import HeartButton from '../components/HeartButton';
//import PropTypes from "prop-types";
import EmptyImg from '../assets/공백이미지-001.png';
import FillHeart from '../assets/Favorite_fill.png';
//import EmptyHeart from '../assets/Favorite_empty.png';
import TagWeb from '../assets/태그_웹툰웹소설.png';
import StarGray from '../assets/Star_fill.png';


const Card = (/*props*/) => {

    // const [like, setLike] = useState(false)

    // useEffect(async () => {
    //     const fetchData = async () => {
    //       const res = await axios.get(...)
    //       if (res.data.type === 'liked') setLike(true)
    //     }
    //     fetchData()
    //   }, []);
      
    //   const toggleLike = async (e) => {
    //     const res = await axios.post(...) // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    //     setLike(!like)
    //   }
  

  return (
    <Content>
        <CheckContent type="checkbox" />
        <ContentImg src= {EmptyImg}/>
        <ContentDetail>
            <HeartDiv>
                {/*<HeartButton like={like} onClick={toggleLike}/>*/}
                <HeartImg src={FillHeart} />
            </HeartDiv>
            <InfoDiv>
                <TitleDiv>
                    제목... 데이터 어케 받을래
                </TitleDiv>
                <EtcInfoDiv>
                    <TagImg src={TagWeb}  />
                    <StarImg src = {StarGray} />
                    <label>10</label>
                </EtcInfoDiv>
            </InfoDiv>
        </ContentDetail>
    </Content>
    );
}

export default Card;

const TagImg = styled.img`
    height: auto;
    margin-right: 2px;
`;

const StarImg = styled.img`
    width:24px;
    height: 24px;
`;

const HeartImg = styled.img`
    
`;

const Content = styled.div`
    text-decoration-line: none;
    /*background-color: #8CD5FF;*/
    border:1px solid;
    border-color: #8CD5FF;
    border-radius: 5px;
    width: 300px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 15px;
`;

const CheckContent = styled.input`
    zoom:1.2;
    margin:0;
    accent-color: #8CD5FF;
`;

const ContentImg = styled.img`
    width: 300px;
    margin-bottom: 3px;
`;

const ContentDetail = styled.div`
    display: flex;

`;

const HeartDiv = styled.div`
    margin-right: 5px;
    margin-left: 5px;
`;

const InfoDiv = styled.div`
    
`;

const TitleDiv = styled.div`
    margin-bottom: 3px;
    color:#000000;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
`;

const EtcInfoDiv = styled.div`
    display: flex;
    align-items: center;
`;