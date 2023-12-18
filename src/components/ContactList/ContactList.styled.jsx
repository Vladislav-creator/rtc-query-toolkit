import styled from 'styled-components';

export const ItemContact = styled.li`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-align: center;
 
  > input {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    width:1.6em;
    height:1.6em;
    
  }
  > input:checked {
    &+label::before {
      content: '\\002714';
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #80ff80;
      
    }
    }
  > label {
    font-size: 1.2em;
    cursor: pointer;
    display: flex;
    
  }
  > label::before {
    content: '';
    border: 0.05em solid black;
    height: 1em;
    width: 1em;
    border-radius: 0.15em;
    margin-right: 0.5em;


    
  }
  // > input:focus {
  //   &+label::before {
  //      box-shadow: 0 0 20px black;
  //   }
  // }

    > input:hover {
      &+label::before {
      background-color: lime;
      box-shadow: 0 0 20px black;
    }
  }
  > button{
    border-radius: 0.5em;
    border: solid 0.5px;
  }
  > button:hover {
    background-color: lime;
    box-shadow: 0 0 20px black;
  }
  
`;

export const Span = styled.div`
width: 170px;
`;

export const ListContacts = styled.ul`
padding: 0px;
margin: 0px;
`;
 