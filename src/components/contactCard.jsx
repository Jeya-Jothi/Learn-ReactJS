function Contactcart(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.img} />
      <p>{props.phone}</p>
      <p>{props.mail}</p>
    </>
  );
}
export default Contactcart;
