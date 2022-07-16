import Form from '../Form';
import Contacts from '../Contacts';
import { Section } from './App.styled';
import React, { Component } from 'react';
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    this.setState({
      contacts: parsedContacts,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  formSubmitHandler = data => {
    this.state.contacts.find(i => i.name === data.name)
      ? Notiflix.Notify.failure('That name already in the list', {
          position: 'center-center',
        })
      : this.setState(prevState => {
          return { contacts: [data, ...prevState.contacts] };
        });
    console.log(data);
  };
  filterHandler = e => {
    this.setState({
      filter: e.currentTarget.value.toLowerCase(),
    });
  };

  onDeleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(i => i.id !== id),
    }));
  };

  render() {
    return (
      <Section>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts
          state={this.state}
          filter={this.filterHandler}
          onDelete={this.onDeleteContactHandler}
        />
      </Section>
    );
  }
}

export default App;
