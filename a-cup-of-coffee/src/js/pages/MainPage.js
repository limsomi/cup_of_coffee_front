import React from 'react'
import "../../css/MainPage.css";

function MainPage() {
  return (
    <div>
      {/* <img src={'../../img/logo.png'}/> */}
      <div className='main_category'>
        <div className='cate_group'>
            <div className='cate_componet'>선배들의 스펙 및 자료 공유</div>
            <div className='cate_componet'>현직자들과 커피챗</div>
            <div className='cate_componet'>이직 / 회사생활 고민</div>
        </div>
        <div className='cate_group'>
            <div className='cate_componet'>취업 관련 질문</div>
            <div className='cate_componet'>부트캡프/클랙스 수강 후기</div>
            <div className='cate_componet'>대학원 고민</div>
        </div>

      </div>
    </div>
  )
}

export default MainPage
