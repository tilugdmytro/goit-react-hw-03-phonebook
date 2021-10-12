import React, { Component } from "react";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./Contacts/ContactList/ContactList";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: " ",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      if (contacts.some((contact) => contact.name === name)) {
        return alert(`${name} is already in contacts!`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFitler = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="container">
        <h2 className="title">Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFitler} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
