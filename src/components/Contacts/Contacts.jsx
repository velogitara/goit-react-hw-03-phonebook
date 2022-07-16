import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Filter from '../Filter';
import {
  ButtonDelete,
  Ul,
  List,
  Number,
  TitleStyle,
  ValueStyle,
} from './Contacts.styled';

class Contacts extends Component {
  static propTypes = {
    state: PropTypes.exact({
      contacts: PropTypes.array.isRequired,
      filter: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, filter } = this.props.state;
    const { onDelete } = this.props;
    const filteredContacts = contacts.filter(i =>
      i.name.toLowerCase().includes(filter)
    );
    return (
      <div>
        <h2>Contacts</h2>
        {contacts.length ? (
          <Filter title={'Find contacts by name'} filter={this.props.filter} />
        ) : (
          <span> </span>
        )}

        <Ul>
          {filteredContacts.length ? (
            filteredContacts.map(item => {
              return (
                <List key={item.id}>
                  <span>
                    <TitleStyle>Name:</TitleStyle>
                    <ValueStyle> {item.name}</ValueStyle>
                  </span>{' '}
                  <Number>
                    <TitleStyle>Number:</TitleStyle>{' '}
                    <ValueStyle>{item.number}</ValueStyle>
                  </Number>
                  <ButtonDelete
                    type="button"
                    onClick={() => {
                      onDelete(item.id);
                    }}
                  >
                    delete
                  </ButtonDelete>
                </List>
              );
            })
          ) : (
            <div>
              {filter ? (
                <span>
                  No contacts <TitleStyle>found</TitleStyle>
                </span>
              ) : (
                <span>
                  No contacts <TitleStyle>yet</TitleStyle>
                </span>
              )}
            </div>
          )}
        </Ul>
      </div>
    );
  }
}

export default Contacts;
