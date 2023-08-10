import React from 'react'
import styed from 'styled-components';

function renderCategory(){
    const category=['선배들의 스펙 및 자료 공유','현직자들과 커피챗','이지 / 회사생활 고민','취업 관련 질문',
    '부트캠프 / 클래스 수강 후기','대학원 고민'];

    return  category.map((item)=>(
        <CateButton>{item}</CateButton>
    ));
}
function Categroup (){
    return(
        <Cate>
            <p>카테고리 바로가기</p>
            <CateSubgroup>{renderCategory()}</CateSubgroup>
        </Cate>

    );

}


export default Categroup;

const Cate=styed.div`
    height: 280px;
    width: auto;
    margin:0px 70px 0px 0px;
    position: relative;
    top:80px;
    `
const CateSubgroup=styed.div`
    width:850px;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
`
const CateButton=styed.div`
    background-color: #D9D9D9;
    width: 230px;
    height: 80px;
    text-align: center;
    line-height:80px;
    margin:20px;
    font-weight: bold;
`