import React from 'react'
import styed from 'styled-components';
import logo from '../../img/logo.svg'

const Header =()=>{
    {
        const WriteButton=styed.div`
        float:right;
        background-color: #D9D9D9;
        font-weight: bold;
        height:80px;
        width:150px;
        margin:75px 240px 0 0;
        text-align: center;
        line-height : 80px;
        `
        return (
        <div style={{width:'100%',height:'220px'}}>
            <img src={logo} alt='img'/>
            <WriteButton>글쓰기</WriteButton>
        </div>
        )
    }
}

export default Header;
