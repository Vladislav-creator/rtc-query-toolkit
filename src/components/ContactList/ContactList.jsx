import { useGetContactsQuery, useDeleteContactMutation, useToggleStatusMutation } from '../../redux/contactsApi';
import { selectContactsFilter } from '../../redux/selectors';
import {  useSelector } from 'react-redux';
 import { Styled } from './ContactList.styled';
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
        <ul>
          {sortedContacts.map(item => (
            <li key={item.id}>
              <Styled>
               <input
          type='checkbox'
          checked={item.isFavourite}
          onChange={e=>handleToggle({...item, isFavourite: e.target.checked})}
        />
             <label> {item.name} {item.phone}</label>
              <button onClick={() => handleDeleteContact(item.id)}>&#10006;</button>
              </Styled>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ContactList;

