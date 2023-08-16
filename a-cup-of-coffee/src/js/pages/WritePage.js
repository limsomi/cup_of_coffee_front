import React, { Component } from 'react'
import styed from 'styled-components';
import logo from '../../img/logo.svg'
import Write from '../components/WritePage/Write';

function WritePage()  {

    return (
      <div>
        <img src={logo} alt='img'/>
        <Write></Write>
      </div>
    )

}

export default WritePage
