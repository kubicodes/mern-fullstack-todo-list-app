const Filter = ({
  getTodosAndSetState,
  getActiveTodosAndSetState,
  getDoneTodosAndSetState,
}) => {
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
            onClick={getActiveTodosAndSetState}
          >
            Active
          </button>
        </li>
        <li role='presentation' className='nav-item all-task active'>
          <button
            type='button'
            className='btn btn-link'
            onClick={getDoneTodosAndSetState}
          >
            Done
          </button>
        </li>
      </ul>
    </ul>
  );
};

export default Filter;
