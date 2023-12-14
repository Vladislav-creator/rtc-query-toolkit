import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter'
function App() {
  return (
    <div>
      <h1>
        Telephone directory
      </h1>
       <ContactForm/>
       <Filter />
       <ContactList/>
    </div>
  );
}

export default App;
