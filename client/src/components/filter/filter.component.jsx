const Filter = ({ getTodosAndSetState, findActiveTodos, findDoneTodos }) => {
  return (
    <ul className='nav nav-pills todo-nav'>
      <ul className='nav nav-pills todo-nav'>
        <li role='presentation' className='nav-item all-task active'>
          <button
            type='button'
            className='btn btn-link'
            onClick={getTodosAndSetState}
          >
            All
          </button>
        </li>
        <li role='presentation' className='nav-item all-task active'>
          <button
            type='button'
            className='btn btn-link'
            onClick={findActiveTodos}
          >
            Active
          </button>
        </li>
        <li role='presentation' className='nav-item all-task active'>
          <button
            type='button'
            className='btn btn-link'
            onClick={findDoneTodos}
          >
            Done
          </button>
        </li>
      </ul>
    </ul>
  );
};

export default Filter;
