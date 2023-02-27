const WorkingBox = ({item, clickDeleteBoxHandler, clickDoneBoxHandler}) => {
  return (
    <div key={item.id} className='todo-box'>
      <h2 className='title'>{item.title}</h2>
      <span className='content'>{item.content}</span>
      <div className='btns'>
        <button onClick= {() => clickDeleteBoxHandler(item.id)}>삭제</button>
        <button onClick= {() => clickDoneBoxHandler(item.id)}>완료</button>
      </div>
    </div>                  
  );
}

export default WorkingBox;