import { useState } from 'react';
import { nanoid } from 'nanoid';
 import { Form, Label, Button, Input } from './ContactForm.styled';
import {useAddContactMutation} from '../../redux/contactsApi'
const ContactForm = () => {
  const [addContact] = useAddContactMutation();
const [name, setName] = useState('')
const [ phone, setPhone] = useState('')
  // Генерация уникальных идентификаторов для полей формы
 let nameInputId = nanoid();
  let phoneInputId = nanoid();

  const handleAddContact = async (event) => {
    if({name,  phone}) {
      await addContact({name, phone}).unwrap();
      reset();
    }
  }
  // Обработка отправки формы
//   const handleSubmit = event => {
//     event.preventDefault();
// console.log({ name, number });
//     // Вызов функции onSubmit из родительского компонента с передачей объекта контакта
//     // onSubmit({ name, number });

//     // Сброс состояния формы
//     reset();
//   };

 // Обработка изменения значений полей формы
  const handleChange = event => {
        const { name, value } = event.target;
  switch(name){
    case "name":{
      setName(value);
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
  };

 
    return (
      <Form onSubmit={handleAddContact}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={phoneInputId}>
          Phone
          <Input
            type="tel"
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
