import React from 'react'
import styed from 'styled-components';

function Postgroup (){
    function renderPopularCate(){

        const PopularCategory=[
            {
                제목:'제목1',
                내용:'내용1'
            },
            {
                제목:'제목2',
                내용:'내용2'
            },
            {
                제목:'제목3',
                내용:'내용3'
            }
        ];
        return PopularCategory.map((item)=>(
            <PostButton>
                <Title>{item.제목}</Title>
                <Content>{item.내용}</Content>
            </PostButton>
        ));
    }
    return(
        <Post>
            <PostTitle>인기 카테고리는?</PostTitle>
            <PostSubgroup>{renderPopularCate()}</PostSubgroup>    
        </Post>
    );

}



export default Postgroup;

const Post=styed.div`
    position: relative;
    top:200px;
    margin-right:50px;
    `
const PostSubgroup=styed.div`
    display: flex;
    align-items: center;
    position: relative;
`
const PostButton=styed.div`
    background-color: #D9D9D9;
    width: 230px;
    height: 150px;
    text-align: center;
    margin:20px;
    float:left;
    padding: 20px;
`
const Title=styed.div`
    font-weight: bold;
    margin-bottom: 15px;
`
const Content=styed.div`
    margin-top: 15px;
`
const PostTitle=styed.div`
    font-size:25px;
    font-weight:bold;
`