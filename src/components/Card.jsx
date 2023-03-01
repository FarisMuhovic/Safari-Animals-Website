const Card = props => {
  const {name} = props.data[0];
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
