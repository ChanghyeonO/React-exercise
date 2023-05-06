import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [recommend, setRecommend] = useState('남자 코트 추천')
  const [udong, setUdong] = useState('강남 우동 맛집')
  const [jsStudy, setJsStudy] = useState('자바스크립트 공부')

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <div className='list'>
        <h4>{recommend}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{udong}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{jsStudy}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
