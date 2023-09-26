import React from 'react';
import Logo from '../../components/Logo';
import KeywordAdd from '../../components/Learning/KeywordAdd';
import News from '../../styles/Learning/news.css';
import { Link } from 'react-router-dom';

function KoreanLearning(props) {
  return (
    <div >
      <Logo />
      <div className='display'>
        <div className='font'> 관심 키워드 </div>
      </div>
      <div className='middle-font'> 관심 있는 키워드를 등록하고 관련 이슈를 확인하세요! </div>
      <KeywordAdd />
      <button className='key-word-btn'> 키워드 추가하기 </button>
      <div className='display'>
        <div className='font'> 추천 키워드 </div>
      </div>
      <div className='middle-font'> 모아에서 추천하는 사용자 검색 기반 키워드입니다 </div>
      <div>
        <div className='container'>노르딕워킹</div>
        <div className='container'>장하오</div>
        <div className='container'>락페스티벌</div>
      </div>
      <Link to="/koreanlearning">
        <button className='btn'> 완료 </button>
      </Link>
    </div>
  );
}

export default KoreanLearning;