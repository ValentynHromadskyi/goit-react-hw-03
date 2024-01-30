import { useState, useEffect } from "react";
import "./App.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";

const initialContacts =
  JSON.parse(window.localStorage.getItem("savedContacts")) || [];

function App() {
  const [nameFilter, setNameFilter] = useState("");
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevUsers) => {
      return prevUsers.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="wraper">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList items={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
