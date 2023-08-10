import React from 'react'
import styed from 'styled-components';
import Header from '../components/Header';
import Categroup from '../components/MainPage/Categroup';
import Postgroup from '../components/MainPage/Postgroup';
import Chatgroup from '../components/MainPage/Chatgroup';

function MainPage() {

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
        <Chatgroup/>
    </div>
  )
}

export default MainPage
