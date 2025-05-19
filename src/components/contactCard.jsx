import Avatar from "./avatar";
import Detail from "./detail";
function Contactcart(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">
          {props.id}.{props.name}
        </h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.mail} />
      </div>
    </div>
  );
}
export default Contactcart;
