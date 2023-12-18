import { useGetContactsQuery, useDeleteContactMutation, useToggleStatusMutation } from '../../redux/contactsApi';
import { selectContactsFilter } from '../../redux/selectors';
import {  useSelector } from 'react-redux';
 import { ItemContact, ListContacts, SpanName, SpanPhone } from './ContactList.styled';
const ContactList = () => {
    const {data = [], isLoading} = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const [updateContact] = useToggleStatusMutation();
    const filter = useSelector(selectContactsFilter);
    // console.log(filter);
    const filteredContact = data.filter(contact => contact.name.toLowerCase()
    .includes(filter.toLowerCase()))
    const sortedContacts = filteredContact.slice().sort((a, b) => {
      return b.isFavourite - a.isFavourite;
    });
    const handleDeleteContact = async (id) => {
      await deleteContact(id).unwrap();
    }
  
    if (isLoading) return <h1>Loading...</h1>
  
    const handleToggle = (data) => {
      updateContact(data)
    }
    return (
      <div>
        <ListContacts>
          {sortedContacts.map(item => (
            <ItemContact key={item.id}>
            
               <input
          type='checkbox'
          checked={item.isFavourite}
          onChange={e=>handleToggle({...item, isFavourite: e.target.checked})}
        />
             <label> <SpanName>{item.name}</SpanName><SpanName>{item.job}</SpanName> <SpanPhone>{item.phone}</SpanPhone></label>
              <button onClick={() => handleDeleteContact(item.id)}>&#10006;</button>
              
            </ItemContact>
          ))}
        </ListContacts>
      </div>
    );
  }
  
  export default ContactList;

