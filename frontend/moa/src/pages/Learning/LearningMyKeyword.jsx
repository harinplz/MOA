import React from 'react';
import KeywordItem from '../../components/Learning/KeywordItem';
import Logo from '../../components/Logo';

function KoreanLearning(props) {
  return (
    <div >
      <Logo />
      <div className='font'> My KeyWords </div>
      <KeywordItem />
      <hr />
    </div>
  );
}

export default KoreanLearning;