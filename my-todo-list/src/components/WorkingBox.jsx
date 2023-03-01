import { clickDeleteBoxHandler } from "../utils/clickEventHandler";
import { clickDoneBoxHandler } from "../utils/clickEventHandler";

const WorkingBox = ({ setTodos, todos }) => {
  return (
    <div>
      <h1>🔥Working...🔥</h1>
      <div className="working">
        {todos
          .filter((item) => item.isDone === false)
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
                      clickDoneBoxHandler(todos, setTodos, item.id)
                    }
                  >
                    완료
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WorkingBox;
