import React from 'react'
import "../../css/MainPage.css";
import logo from '../../img/logo.svg'
function MainPage() {
  return (
    <div>
        <div className='header'>
            <img src={logo} alt='img'/>

        </div>
        <div className='button-content'>

            <div className='cate-group'>
                <p>카테고리 바로가기</p>
                <div className='cate-subgroup'>
                    <div className='cate-componet'>선배들의 스펙 및 자료 공유</div>
                    <div className='cate-componet'>현직자들과 커피챗</div>
                    <div className='cate-componet'>이직 / 회사생활 고민</div>
                </div>
                <div className='cate-subgroup'>
                    <div className='cate-componet'>취업 관련 질문</div>
                    <div className='cate-componet'>부트캡프/클랙스 수강 후기</div>
                    <div className='cate-componet'>대학원 고민</div>
                </div>
            </div>
            <div className='post-group'>
                <p>인기 카테고리는?</p>
                <div className='post-subgroup'>
                    <div className='post-componet'>
                        <p id='title'>제목</p>
                        <p id='content'>내용</p>
                    </div>
                    <div className='post-componet'>
                        <p id='title'>제목</p>
                        <p id='content'>내용</p>
                    </div>
                    <div className='post-componet'>
                        <p id='title'>제목</p>
                        <p id='content'>내용</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='chat-content'>
            <p>뜨거운 커피챗방_배달의 민족 FE</p>
            <div className='chat-back'>
                <div className='chat'>

                </div>
                <div className='underbar'>
                    <hr></hr>
                    <div className='underbar-banner'>뜨거운 커피챗방에 참여해보세요!</div>
                    <button id='send-button'>전송하기</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage
