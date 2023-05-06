import './App.css';
import { useState } from 'react';

function App() {

  const [listTitle, setListTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '자바스크립트 공부']);
  const [thumb, setThumb] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [newTitle, setNewTitle] = useState('');

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
                modal == false ? setModal(true) : setModal(false);
                setTitle(i);
              }}>{listTitle[i]}
              </h4>
              <span onClick={() => {
                const copyThumb = [...thumb];
                copyThumb[i] = copyThumb[i] + 1;
                setThumb(copyThumb)
              }}>
                👍🏻   {thumb[i]}
              </span>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                const copyListTitle = [...listTitle];
                copyListTitle.splice(i, 1);
                setListTitle(copyListTitle)
              }}>삭제하기</button>
            </div>
          )
        })
      }

      <button onClick={() => {
        let copySort = [...listTitle];
        copySort.sort();
        setListTitle(copySort)
      }}>가나다순 정렬</button>

      <br />
      <div>
        <input onChange={(e) => {
          setNewTitle(e.target.value)
        }} />
        <button onClick={() => {
          const copyListTitle = [...listTitle];
          copyListTitle.unshift(newTitle);
          setListTitle(copyListTitle)
        }}>추가하기</button>
      </div>


      {
        modal == true ? <Modal listTitle={listTitle} setListTitle={setListTitle} title={title} /> : null
      }

    </div>
  );
}


const Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{props.listTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        const copyListTitle = [...props.listTitle];
        copyListTitle[0] = "여자 코트 추천";
        props.setListTitle(copyListTitle)
      }}>글수정</button>
    </div>
  )
}

export default App;
