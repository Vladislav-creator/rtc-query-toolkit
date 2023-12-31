import { useState } from 'react';
 import { Form, Label, Button, Input } from './ContactForm.styled';
import {useGetContactsQuery, useAddContactMutation} from '../../redux/contactsApi'
const ContactForm = () => {
  const {data} = useGetContactsQuery();
 
  const [addContact] = useAddContactMutation();
const [name, setName] = useState('')
const [ phone, setPhone] = useState('')
const [job, setJob] = useState('')

  const handleAddContact = async (event) => {
    event.preventDefault();
    if({name, job, phone}) {
      await addContact({name, job, phone}).unwrap();
      reset();
    }
  }
 // Обработка изменения значений полей формы
  const handleChange = event => {
        const { name, value } = event.target;

        const isNameInContacts = data.some(
          ({ name }) => name.toLowerCase() === value.toLowerCase()
        );
        const isPhoneInContacts = data.some(
          ({ phone }) => phone.toLowerCase() === value.toLowerCase()
        );
        if (isNameInContacts||isPhoneInContacts) {
          return alert(`${value} is already in contacts.`);
        }

  switch(name){
    case "name":{
      setName(value);
      return
    }
    case "job":{
      setJob(value);
      return
    }
    case "phone":{
      setPhone(value);
      return
    }
   default: return;
  }
}

  // Сброс состояния формы
 const  reset = () => {
   setPhone('')
    setName('')
    setJob('')
  };

 
    return (
      <Form onSubmit={handleAddContact}>
        <Label>
          Name
          <Input
            type="text"
            maxLength="22"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Job
          <Input
            type="text"
            maxLength="10"
            name="job"
            value={job}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Phone
          <Input
            type="tel"
            maxLength="15"
            name="phone"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact </Button>
      </Form>
    );
}

export default ContactForm;
