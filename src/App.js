import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [listTitle, setListTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '자바스크립트 공부']);
  const [thumb, setThumb] = useState(0);
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <div className='list'>
        <h4>{listTitle[0]}
          <span onClick={() => {
            setThumb(thumb + 1)
          }}>👍🏻
          </span>
          {thumb}
        </h4>

        <button onClick={() => {
          const copy = [...listTitle];
          copy[0] = '여자 코트 추천';
          setListTitle(copy)
        }}>클릭
        </button>

        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{listTitle[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{listTitle[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
