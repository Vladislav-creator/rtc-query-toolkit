import { useGetContactsQuery, useDeleteContactMutation, useToggleStatusMutation } from '../../redux/contactsApi';
const ContactList = () => {
    const {data = [], isLoading} = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    const [updateContact] = useToggleStatusMutation();
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
          {data.map(item => (
            <li key={item.id}>
               <input
          type='checkbox'
          checked={item.isFavourite}
          onChange={e=>handleToggle({...item, isFavourite: e.target.checked})}
        />
              {item.name} {item.phone}
              <button onClick={() => handleDeleteContact(item.id)}>&#10006;</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ContactList;

