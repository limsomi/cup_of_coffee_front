import React from 'react'
import styed from 'styled-components';

function Chatgroup (){
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

export default Chatgroup;