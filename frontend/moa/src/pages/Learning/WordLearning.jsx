import React from 'react';
import News from '../../styles/Learning/WordLearning.module.css';
import WordLogo from '../../components/Learning/WordLogo';
import Word from '../../components/Learning/Word';
import Usecase from '../../components/Learning/Usecase';
import RelatedNews from '../../components/Learning/RelatedNews';
import { useLocation  } from 'react-router-dom';
import { Link } from 'react-router-dom';

function WordLearning(props) {
  const location = useLocation();
  const word = {...location.state};

  return (
    <div >
        <WordLogo word={"단어"}/>
        <div className={News.display}>
          <div className={News.font}> Word </div>
        </div>
        <Word word={word} />
        <div className={News.display}>
          <div className={News.font}> Usecases </div>
        </div>
        <Usecase/>
        <div className={News.displayPlus}>
          <div className={News.font}> Related News </div>
          <Link to="/koreanlearning/word/news">
            <div className={News.displayPlusRightFont}>더보기</div>
          </Link>
        </div>
        <RelatedNews word={word} />
    </div>
  );
}

export default WordLearning;