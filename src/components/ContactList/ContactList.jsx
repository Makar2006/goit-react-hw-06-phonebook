import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

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
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, id, number }) => (
        <li
          className={css.contactListItem}
          key={id}
          name={name}
          id={id}
          number={number}
        >
          <span className={css.itemSpan}>{name}:</span>
          <span className={css.itemSpan}>{number}</span>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onRemoveContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
