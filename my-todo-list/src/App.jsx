import React, { useState } from 'react'
import './App.css';
import WorkingBox from './components/WorkingBox';
import DoneBox from './components/DoneBox';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "리액트", content: "강의보기", isDone: false},
    {id: 2, title: "자바스크립트", content: "책보기", isDone: false}
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangHandler = (event) => {
    setContent(event.target.value);
  };
  //투두 추가
  const clickAddBoxHandler = () => {
    const newTodos = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodos([...todos,newTodos]);
    setTitle('');
    setContent('');
  };
  //투두 삭제
  const clickDeleteBoxHandler = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }
  //투두 완료
  const clickDoneBoxHandler = (id) => {
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        todo.isDone = true;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  //투두 취소
  const clickcancelBoxHandler = (id) => {
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        todo.isDone = false;
      }
      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  }



  return (
    <div className='layout'>
      <div className='screen-header'>
        <h1>My Todo List</h1>
        <span>Jihye</span>
      </div>
      <div className='form'>
        <div className='input-box'>
          <span>제목</span>
          <input type="text" value={title} onChange={titleChangHandler}/>
          <span>내용</span>
          <input type="text" value={content} onChange={contentChangHandler}/>
        </div>
        <button onClick={clickAddBoxHandler}>추가하기</button>
      </div>
      <div className='main'>
        {todos.title}
        {todos.content}
        <h1>🔥Working...🔥</h1>
        <div className='working'>
          {todos.filter ((item) => item.isDone === false)
          .map(function (item) {
            return <WorkingBox 
            key = {item.id}
            item = {item}
            clickDeleteBoxHandler = {clickDeleteBoxHandler}
            clickDoneBoxHandler = {clickDoneBoxHandler}
            />
          })}
        </div>
        <h1>⭐done⭐</h1>
        <div className='done'>
        {todos.filter ((item) => item.isDone === true)
          .map(function (item) {
            return <DoneBox 
            key = {item.id}
            item = {item}
            clickDeleteBoxHandler = {clickDeleteBoxHandler}
            clickcancelBoxHandler = {clickcancelBoxHandler}
            />
          })}
        </div>
      </div>
    </div>
  );
}



export default App;
