export const clickDeleteBoxHandler = (todos, setTodos, id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  setTodos(newTodos);
};

export const clickDoneBoxHandler = (todos, setTodos, id) => {
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      todo.isDone = true;
    }
    return todo;
  });
  setTodos(newTodos);
};

export const clickcancelBoxHandler = (todos, setTodos, id) => {
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      todo.isDone = false;
    }
    return todo;
  });
  setTodos(newTodos);
};

export const clickAddBoxHandler = (
  todos,
  setTodos,
  title,
  setTitle,
  content,
  setContent
) => {
  const newTodos = {
    id: todos.length + 1,
    title,
    content,
    isDone: false,
  };
  setTodos([...todos, newTodos]);
  setTitle("");
  setContent("");
};
