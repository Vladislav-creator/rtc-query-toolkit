import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter'
import  Section  from './Section/Section';
function App() {
  return (
    <div>
      <Section title="Telephone directory">
       <ContactForm/>
       <Filter />
       <ContactList/>
       </Section>
    </div>
  );
}

export default App;
