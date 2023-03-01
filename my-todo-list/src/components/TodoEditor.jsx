import React, { useState } from "react";
import { clickAddBoxHandler } from "../utils/clickEventHandler";
import { titleChangHandler } from "../utils/editor";
import { contentChangHandler } from "../utils/editor";

const TodoEditor = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="form">
      <div className="input-box">
        <span>제목</span>
        <input
          type="text"
          value={title}
          onChange={(event) => titleChangHandler(setTitle, event)}
        />
        <span>내용</span>
        <input
          type="text"
          value={content}
          onChange={(event) => contentChangHandler(setContent, event)}
        />
      </div>
      <button
        onClick={() =>
          clickAddBoxHandler(
            todos,
            setTodos,
            title,
            setTitle,
            content,
            setContent
          )
        }
      >
        추가하기
      </button>
    </div>
  );
};

export default TodoEditor;
