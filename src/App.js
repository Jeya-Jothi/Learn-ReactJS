import "./App.css";
import Contactcart from "./components/contactCard";
import contacts from "./utils/contacts.js";

function createCard(contact) {
  return (
    <Contactcart
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      mail={contact.email}
    />
  );
}

function App() {
  console.log(contacts);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
