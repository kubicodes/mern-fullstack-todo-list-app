import './App.css';
import Container from './components/container/container.component';
import Card from './components/card/card.component';
import Form from './components/form/form.component';
import Filter from './components/filter/filter.component';
import TodoItemContainer from './components/todo-item-container/todo-item-container.component';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  const getTodosAndSetState = async () => {
    try {
      const response = await axios.get('/api/v1/todos');
      setTodos(response.data.data);
    } catch (error) {
      return <p>{error}</p>;
    }
  };

  const getActiveTodosAndSetState = async () => {
    const response = await axios.get('api/v1/todos/active');
    setTodos(response.data.data);
  };

  const getDoneTodosAndSetState = async () => {
    const response = await axios.get('api/v1/todos/done');
    setTodos(response.data.data);
  };

  useEffect(() => {
    getTodosAndSetState();
  }, []);

  return (
    <Container>
      <div className='row'>
        <div className='col-md-12'>
          <Card>
            <Form getTodosAndSetState={getTodosAndSetState} />
            <Filter
              getTodosAndSetState={getTodosAndSetState}
              getActiveTodosAndSetState={getActiveTodosAndSetState}
              getDoneTodosAndSetState={getDoneTodosAndSetState}
            />
            <TodoItemContainer
              todos={todos}
              getTodosAndSetState={getTodosAndSetState}
            />
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default App;
