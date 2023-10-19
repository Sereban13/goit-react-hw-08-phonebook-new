import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactLitst';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/contactsSlice';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    const fetchPhoneBook = async () => {
      try {
        dispatch(fetchContacts());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPhoneBook();
  }, [dispatch]);

  return (
    <div>
      <h2>PhoneBook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBar />
      {isLoading && !error && <b>Request in progress </b>}
      <ContactList />
    </div>
  );
};

export default Contacts;
