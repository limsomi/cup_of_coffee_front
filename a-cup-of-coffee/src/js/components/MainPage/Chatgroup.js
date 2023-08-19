import React,{useState} from 'react'
import styed from 'styled-components';

function Chatgroup (){
    const [comment,setComment]=useState('');
    const [feedComments,setFeedComments]=useState([]);
    const [IsValid,setIsValid]=useState(false);

    let post =e=>{
        const copyFeedComments=[...feedComments];
        copyFeedComments.push(comment);
        setFeedComments(copyFeedComments);
        setComment('');
    }
    function renderComment(){
        return feedComments.map((item)=>{
            <Comment>{item}</Comment>
        })
    }
    return(
        <ChatContent>
            <p>뜨거운 커피챗방_배달의 민족 FE</p>
            <ChatBackground>
                <Chat>
                    {renderComment()}
                </Chat>
                <ChatUnderbar>
                    <hr></hr>
                    <Banner placeholder='뜨거운 커피챗방에 참여해보세요!'
                    onChange={e=>{
                        setComment(e.target.value)
                    }}
                    onKeyUp={e=>{
                        e.target.value.length>0
                            ? setIsValid(true)
                            : setIsValid(false)
                    }}
                    value={comment}/>
                    <SendButton onClick={post}>전송하기</SendButton>
                </ChatUnderbar>
            </ChatBackground>
        </ChatContent>
    )
}

export default Chatgroup;

const ChatContent=styed.div`
float:left;
margin-left:150px;
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

const Banner=styed.input`
float: left;
margin:10px 0 10px 15px;
padding-left:15px;
font-weight: bold;
width:290px;
height:50px;
border-radius:10px;
border-color:white;
&:focus{
    outline:none;
}
`

const SendButton=styed.button`
background-color: white;
border-color: white;
border-radius: 15px;
height:50px;
width:100px;
float:right;
margin-right:10px;
margin-top:10px;
`

const Comment=styed.div`
background-color:white;
height:200px;
widht:200px;
`