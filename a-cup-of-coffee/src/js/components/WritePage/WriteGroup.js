import React,{useState} from 'react'
import { styled } from 'styled-components'
import Editor from './EditorComponenet'
import UploadFiles from './UploadFiles';
function WriteGroup() {
  const [selectedDropvalue,setSelectedDropValue]=useState('카테고리 선택');
  const [desc,setDesc]=useState('');

  function onEditorChange(value){
    setDesc(value)
  }
  const Category_List=
  [
    {id:null,value:'카테고리 선택'},
    {id:'01',value:'선배들의 스펙 및 자료 공유'},
    {id:'02',value:'현직자들과 커피챗'},
    {id:'03',value:'이직 / 회사생활 고민'},
    {id:'04',value:'취업 관련 질문'},
    {id:'05',value:'부트캠프 / 클래스 수강 후기'},
    {id:'06',value:'대학원 고민'}
  ];


  const handleCategory = e => 
  {
    const { value } = e.target;
    setSelectedDropValue(Category_List.filter(el => el.value === value)[0].id);
  };

  return (
    <Write>
        <WriteTitle>게시글 작성</WriteTitle>
        <WriteBack>
            <InputTitle placeholder='제목을 입력해주세요'></InputTitle>
            <UploadFiles/>
            <Editor value={desc} onChange={onEditorChange}></Editor>
            <SelectCategory onChange={handleCategory}>
              {Category_List.map(el=>{
                return <option key={el.id}>{el.value}</option>;
              })}
            </SelectCategory>
            <SaveButton>저장</SaveButton>
        </WriteBack>
    </Write>

  )
}

export default WriteGroup

const Write=styled.div`
float:right;
margin-right:35px;
position:relative;
top:70px;
`

const WriteBack=styled.div`
width:900px;
height:800px;
background-color:#D9D9D9;
text-align:center;
`
const InputTitle=styled.input`
width:750px;
height:45px;
border-radius:20px;
border-color:white;
margin-top:17px;
padding-left:10px;
`


const WriteTitle=styled.div`
font-size:25px;
font-weight:bold;
margin-bottom:10px;
`

const SaveButton=styled.div`
background-color: white;
border-radius:10px;
font-weight: bold;
height:50px;
width:150px;
margin:25px 10px 0 0;
text-align: center;
line-height : 50px;
float:right;
`

const SelectCategory=styled.select`
float:left;
width:200px;
height:50px;
margin:25px 0 0 20px;
`