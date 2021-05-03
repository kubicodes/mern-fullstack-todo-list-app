import axios from 'axios';

const TodoItem = ({ todo, getTodosAndSetState }) => {
  const id = todo._id.toString();
  const handleChange = async event => {
    try {
      await axios.patch(`api/v1/todos/${id}`, {
        active: !event.target.checked,
      });
      await getTodosAndSetState();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async event => {
    try {
      await axios.delete(`api/v1/todos/${id}`);
      await getTodosAndSetState();
    } catch (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
  };

  return (
    <div className='todo-item'>
      <div className='checker'>
        <span className=''>
          <input
            type='checkbox'
            defaultChecked={!todo.active}
            onChange={handleChange}
          />
        </span>
      </div>
      <span className='p-2'>
        {todo.active ? todo.task : <del>{todo.task}</del>}
      </span>
      <button
        type='button'
        className='close'
        aria-label='Close'
        onClick={deleteTodo}
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};

export default TodoItem;
