import TodoItem from '../todo-item/todo-item.component';

const TodoItemContainer = ({ todos, getTodosAndSetState }) => {
  return (
    <div className='todo-list'>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo._id.toString()}
          getTodosAndSetState={getTodosAndSetState}
        />
      ))}
    </div>
  );
};

export default TodoItemContainer;
