const Card = ({ children }) => {
  return (
    <div className='card card-white'>
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default Card;
