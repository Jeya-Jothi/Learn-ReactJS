import "./App.css";
import Contactcart from "./components/contactCard";
import contacts from "./utils/contacts.js";
import Avatar from "./components/avatar.jsx";
function App() {
  console.log(contacts);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" />
      <Contactcart
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
      />
    </div>
  );
}

export default App;
