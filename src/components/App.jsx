 import { useState } from 'react';
import { useGetContactsQuery, useDeleteContactMutation, useToggleStatusMutation } from '../redux';
 import ContactForm from './ContactForm/ContactForm'
function App() {
  const [isFavourite, setIsFavourite] = useState(false)

  const {data = [], isLoading} = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const handleDeleteContact = async (id) => {
    await deleteContact(id).unwrap();
  }

  if (isLoading) return <h1>Loading...</h1>

  const handleToggle = (isFavourite) => {
    setIsFavourite(!isFavourite)
  }
  return (
    <div>
      <h1>
        Telephone directory
      </h1>
       <ContactForm/>
      <div>
       
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
             <input
        type='checkbox'
        checked={item.isFavourite}
       
         onChange={handleToggle}
      />
            {item.name} {item.phone}
            <button onClick={() => handleDeleteContact(item.id)}>&#10006;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
