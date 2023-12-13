// import { useGetContactsQuery, useDeleteContactMutation, useToggleStatusMutation } from '../redux';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';
function App() {
  // const {data = [], isLoading} = useGetContactsQuery();
  // const [deleteContact] = useDeleteContactMutation();
  // const [updateContact] = useToggleStatusMutation();
  // const handleDeleteContact = async (id) => {
  //   await deleteContact(id).unwrap();
  // }

  // if (isLoading) return <h1>Loading...</h1>

  // const handleToggle = (data) => {
  //   updateContact(data)
  // }
  return (
    <div>
      <h1>
        Telephone directory
      </h1>
       <ContactForm/>
       <ContactList/>
      {/* <ul>
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
      </ul> */}
    </div>
  );
}

export default App;
