import { useDispatch } from 'react-redux';
import { Card, Button, CardBlock } from './ContactCard.Styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <CardBlock>
      <Card>
        <span>{name}</span>
        <span>{number}</span>
      </Card>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </CardBlock>
  );
};
