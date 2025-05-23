import Input from "./Input";
function Form(props) {
  return (
    <>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.status && (
          <Input type="password" placeholder="Conform password" />
        )}
        <button type="submit">{props.status ? "Login" : "Register"}</button>
      </form>
    </>
  );
}

export default Form;
