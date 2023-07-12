
const Card = ({img, name}) => {
  return (
    <div className="card_container">
      <img className="card_image" src={img} alt="test"></img>
      <h1>{name}</h1>
    </div>
  );
};
export default Card;
