import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { removeContact } from 'redux/contactSlice';

export default function App() {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(removeContact({ id }));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <h3>No contacts</h3>
      ) : (
        <>
          <Filter />
          <ContactList onRemoveContact={onRemoveContact} />
        </>
      )}
    </div>
  );
}
