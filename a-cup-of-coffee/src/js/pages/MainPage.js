import React from 'react'
import "../../css/MainPage.css";
import logo from '../../img/logo.svg'
function MainPage() {
  return (
    <div>
        <img src={logo} alt='img'/>
        <div className='button_bar'>

            <div className='cate_group'>
                <p>카테고리 바로가기</p>
                <div className='cate_subgroup'>
                    <div className='cate_componet'>선배들의 스펙 및 자료 공유</div>
                    <div className='cate_componet'>현직자들과 커피챗</div>
                    <div className='cate_componet'>이직 / 회사생활 고민</div>
                </div>
                <div className='cate_subgroup'>
                    <div className='cate_componet'>취업 관련 질문</div>
                    <div className='cate_componet'>부트캡프/클랙스 수강 후기</div>
                    <div className='cate_componet'>대학원 고민</div>
                </div>
            </div>
            <div className='post_group'>
                <p>인기 카테고리는?</p>
                <div className='post_subgroup'>
                    <div className='post_componet'>
                        <p id='title'>제목</p>
                        <p id='content'>내용</p>
                    </div>
                    <div className='post_componet'>
                        <p id='title'>제목</p>
                        <p id='content'>내용</p>
                    </div>
                    <div className='post_componet'>
                        <p id='title'>제목</p>
                        <p id='content'>내용</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage
