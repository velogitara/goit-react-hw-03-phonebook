import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ContactForm, Label, ButtonAdd, Input } from './Form.styled';
import { nanoid } from 'nanoid';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const objWithId = { id, ...this.state };
    this.props.onSubmit(objWithId);
    this.reset();
  };
  handleInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <ContactForm autoComplete="off" onSubmit={this.handleSubmit}>
        <Label>
          <span>Name</span>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInput}
          />
        </Label>
        <Label>
          <span>Phone</span>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInput}
          />
        </Label>
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </ContactForm>
    );
  }
}

export default Form;
