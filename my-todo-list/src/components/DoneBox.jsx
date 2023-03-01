import { clickDeleteBoxHandler } from "../utils/clickEventHandler";
import { clickcancelBoxHandler } from "../utils/clickEventHandler";

const DoneBox = ({ setTodos, todos }) => {
  return (
    <div>
      <h1>⭐done⭐</h1>
      <div className="done">
        {todos
          .filter((item) => item.isDone === true)
          .map(function (item) {
            return (
              <div key={item.id} className="todo-box">
                <h2 className="title">{item.title}</h2>
                <span className="content">{item.content}</span>
                <div className="btns">
                  <button
                    onClick={() =>
                      clickDeleteBoxHandler(todos, setTodos, item.id)
                    }
                  >
                    삭제
                  </button>
                  <button
                    onClick={() =>
                      clickcancelBoxHandler(todos, setTodos, item.id)
                    }
                  >
                    취소
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DoneBox;
