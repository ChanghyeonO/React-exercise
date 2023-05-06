import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [listTitle, setListTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '자바스크립트 공부']);
  const [thumb, setThumb] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>blog</h4>
      </div>
      {
        listTitle.map(function (para, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                modal == false ? setModal(true) : setModal(false)
              }}>{listTitle[i]}
              </h4>
              <span onClick={() => {
                let copyThumb = [...thumb];
                copyThumb[i] = copyThumb[i] + 1;
                setThumb(copyThumb)
              }}>
                👍🏻   {thumb[i]}
              </span>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      <button onClick={() => {
        let copySort = [...listTitle];
        copySort.sort();
        setListTitle(copySort)
      }}>가나다순 정렬</button>

      {
        modal == true ? <Modal /> : null
      }

    </div>
  );
}


const Modal = () => {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
