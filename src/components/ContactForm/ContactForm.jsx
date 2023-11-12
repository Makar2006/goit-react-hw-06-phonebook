import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

export default function ContactForm() {
  const initialValues = { name: '', number: '' };
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const validSchema = yup.object().shape({
    name: yup.string().min(2).max(20).required(),
    number: yup.string().min(8).max(20).required(),
  });

  const onSubmit = (values, { resetForm }) => {
    const Duplicate = contacts.some(contact => contact.name === values.name);
    if (Duplicate) {
      alert(`${values.name} is already created`);
    } else {
      const newState = { id: nanoid(), ...values };
      dispatch(addContact(newState));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validSchema}
    >
      <form>
        <label htmlFor="nameId">Name</label>
        <Field type="text" name="name" placeholder="Contact name" id="nameId" />
        <label htmlFor="numId">Number</label>
        <Field
          type="tel"
          name="number"
          placeholder="xxx-xxx-xx-xx"
          id="numId"
        />
        <button type="submit">Add contact</button>
      </form>
    </Formik>
  );
}
