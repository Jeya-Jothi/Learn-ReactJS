function Contactcart(props) {
  return (
    <div className="card">
      <div className="top">
      <h2 className="name">{props.name}</h2>
      <img src={props.img} alt="profile" className="circle-img"/>
      </div>
      <div className="bottom">
      <p className="info">{props.phone}</p>
      <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}
export default Contactcart;
