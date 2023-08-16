import React from 'react'
import { styled } from 'styled-components'

function Write() {
  return (
    <WriteGroup>
        <WriteTitle>게시글 작성</WriteTitle>
        <WriteBack>
            <InputTitle></InputTitle>
            <InputContent></InputContent>
        </WriteBack>
    </WriteGroup>

  )
}

export default Write

const WriteGroup=styled.div`
float:right;
margin-right:35px;

`

const WriteBack=styled.div`
width:1000px;
height:800px;
background-color:#D9D9D9;
text-align:center;
`
const InputTitle=styled.input`
width:750px;
height:50px;
border-radius:20px;
border-color:white;
margin-top:10px;
`
const InputContent=styled.input`
width:750px;
height:640px;
background-color: white;
border-radius:20px;
display:inline-block;
position:relative;
top:30px;
`

const WriteTitle=styled.div`
font-size:25px;
font-weight:bold;
`