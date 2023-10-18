import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input, Forma, Label, ButtonSubmit } from './ContactForm.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/operations';

const phoneRegExp =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string().matches(phoneRegExp).required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    const isExistName = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isExistName) {
      alert(`Contact "${values.name}" is already exist`);
      actions.resetForm();
      return;
    }
    dispatch(addContact({ ...values }));
    actions.resetForm();
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Forma>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter the name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />

        <Label htmlFor="number">Number</Label>
        <Input
          id="phone"
          name="number"
          type="tel"
          placeholder="Enter the phone number..."
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Forma>
    </Formik>
  );
};
