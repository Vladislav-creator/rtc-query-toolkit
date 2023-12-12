// import { useState } from 'react';
import { useGetContactsQuery, useDeleteContactMutation } from '../redux';
 import ContactForm from './ContactForm/ContactForm'
function App() {
  
  // const [newContact, setNewContact] = useState('');
  const {data = [], isLoading} = useGetContactsQuery();
  // const [addContact] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  
  // const handleAddContact = async ({ name, number }) => {
  //   if(newContact) {
  //     console.log({ name, number });
  //      await addContact(newContact).unwrap();
     
  //      setNewContact('');
  //   }
  // }

  const handleDeleteContact = async (id) => {
    await deleteContact(id).unwrap();
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div>
        {/* <input
          type="text"
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
        /> */}
        {/* <button onClick={handleAddContact}>Add contact</button> */}
      </div>
       <ContactForm/>
      <div>
       
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} {item.phone}
            <button onClick={() => handleDeleteContact(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
