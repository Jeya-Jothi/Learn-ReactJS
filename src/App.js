import "./App.css";
import Contactcart from "./components/contactCard";
import contacts from "./utils/contacts.js";
function App() {
  console.log(contacts);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map((contact, index) => {
        return (
          <Contactcart
            name={contact.name}
            img={contact.imgURL}
            phone={contact.phone}
            mail={contact.email}
          />
        );
      })}

      {/* <Contactcart
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        mail={contacts[0].email}
      />

      <Contactcart
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        mail={contacts[1].email}
      />

      <Contactcart
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        mail={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
