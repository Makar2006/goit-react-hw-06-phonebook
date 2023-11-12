import { useSelector } from 'react-redux';

const ContactList = ({ onRemoveContact }) => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const onFilterContacts = () => {
    if (filter === '') return contacts;

    const filterText = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterText)
    );
  };

  const filteredContacts = onFilterContacts();

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id} name={name} id={id} number={number}>
          <span>{name}:</span>
          <span>{number}</span>
          <button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
