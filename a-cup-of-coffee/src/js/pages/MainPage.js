import React from 'react'
import styed from 'styled-components';
import "../../css/MainPage.css";
import Header from '../components/Header';
function MainPage() {
    const Categroup =()=>{
        const Cate=styed.div`
        height: 280px;
        width: auto;
        margin:0px 70px 0px 0px;
        position: relative;
        top:80px;
        `
        const CateButton=styed.div`
        background-color: #D9D9D9;
        width: 230px;
        height: 80px;
        text-align: center;
        line-height : 80px;
        margin:20px;
        float:left;
        font-weight: bold;
        `
        const CateSubgroup=styed.div`
        display: flex;
        align-items: center;
        `
        return(
            <Cate>
                <p>카테고리 바로가기</p>
                <CateSubgroup>
                    <CateButton>선배들의 스펙 및 자료 공유</CateButton>
                    <CateButton>현직자들과 커피챗</CateButton>
                    <CateButton>이직 / 회사생활 고민</CateButton>
                </CateSubgroup>
                <CateSubgroup>
                    <CateButton>취업 관련 질문</CateButton>
                    <CateButton>부트캠프/클래스 수강 후기</CateButton>
                    <CateButton>대학원 고민</CateButton>
                </CateSubgroup>
            </Cate>

        )
    }

    const Postgroup=()=>{
        const Post=styed.div`
        position: relative;
        top:230px;
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
        return(
            <Post>
                <p>인기 카테고리는?</p>
                <PostSubgroup>
                    <PostButton>
                        <Title>제목</Title>
                        <Content>내용</Content>
                    </PostButton>
                    <PostButton>
                        <Title>제목</Title>
                        <Content>내용</Content>
                    </PostButton>
                    <PostButton>
                        <Title>제목</Title>
                        <Content>내용</Content>
                    </PostButton>
                </PostSubgroup>    
            </Post>
        )
    }

    const Chatcomponent=()=>{
        const ChatContent=styed.div`
        float:left;
        margin-left:200px;
        margin-top:100px;
        width:500px;
        height:600px;
        `
        const ChatBackground=styed.div`
        background-color: #D9D9D9;
        width: 450px;
        height: 550px;
        position: relative;
        margin-top: 15px;
        padding-bottom: 0px;
        `
        const Chat=styed.div`
        height:450px;
        `
        const ChatUnderbar=styed.div`
        width:450px;
        height:70px;
        margin-bottom: 0px;
        `

        const Banner=styed.div`
        float: left;
        margin:17px 0 10px 35px;
        font-weight: bold;
        `

        const SendButton=styed.button`
        background-color: white;
        border-color: white;
        border-radius: 15px;
        height:50px;
        width:100px;
        float:right;
        margin-right:10px;
        `
        return(
            <ChatContent>
                <p>뜨거운 커피챗방_배달의 민족 FE</p>
                <ChatBackground>
                    <Chat/>
                    <ChatUnderbar>
                        <hr></hr>
                        <Banner>뜨거운 커피챗방에 참여해보세요!</Banner>
                        <SendButton>전송하기</SendButton>
                    </ChatUnderbar>
                </ChatBackground>
            </ChatContent>
        )
    }
    const ButtonGroup=styed.div`
    float:right;
    height:800px;
    margin-right:50px;
    `

  return (
    <div>
        <Header/>
        <ButtonGroup>
            <Categroup/>
            <Postgroup/>
        </ButtonGroup>
        <Chatcomponent/>
    </div>
  )
}

export default MainPage
