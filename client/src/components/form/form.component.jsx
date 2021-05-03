import { useState } from 'react';
import axios from 'axios';

const Form = ({ getTodosAndSetState }) => {
  const [userInput, setUserInput] = useState({ task: '' });

  const handleChange = event => {
    setUserInput({ task: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const todo = {
      task: userInput.task,
      active: true,
    };

    try {
      await axios.post('api/v1/todos', todo);
      await getTodosAndSetState();
    } catch (error) {
      return <p>{JSON.stringify(error)}</p>;
    }

    return setUserInput({ task: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='type'
        className='form-control add-task'
        placeholder='Add Task'
        onChange={handleChange}
        value={userInput.task}
      />
      <input type='submit' className='mt-4 btn btn-primary' value='Add Task' />
    </form>
  );
};

export default Form;
