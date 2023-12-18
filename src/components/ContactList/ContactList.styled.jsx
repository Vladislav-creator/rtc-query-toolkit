import styled from 'styled-components';
// export const Checkbox = styled.div`
// position: relative;

// `;
// export const CheckboxInput = styled.input`
// position: absolute;
// -webkit-appearance: none;
// appearance: none;

// `;
// export const Item = styled.div`
// ::before
//  {
//   content: "";
//   display: block;
//   width: 16px;
//   height: 16px;
//   border: 1px solid black;
//   background-color: white;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
// `;

// export const Styled = styled.div`
//   display: inline-block;
//   > input {
//     opacity: 0;
//   }
//   > input + label {
//     position: relative; /* permet de positionner les pseudo-éléments */
//     padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
//     cursor: pointer;    /* affiche un curseur adapté */
//     &:before {
//       content: '';
//       position: absolute;
//       left:0; top: 1px;
//       width: 17px; height: 17px; /* dim. de la case */
//       border: 1px solid #aaa;
//       background: #f8f8f8;
//       border-radius: 3px; /* angles arrondis */
//       box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* légère ombre interne */
//     }
//     &:after {
//       content: '✔';
//       position: absolute;
//       top: -1px; left: 2px;
//       font-size: 16px;
//       color: #09ad7e;
//       transition: all .2s; /* on prévoit une animation */
//     }
//   }
//   > input:not(:checked) + label {
//       &:after {
//         opacity: 0; /* coche invisible */
//         transform: scale(0); /* mise à l'échelle à 0 */
//       }
//   }
//   > input:disabled:not(:checked) + label {
//       &:before {
//         box-shadow: none;
//         border-color: #bbb;
//         background-color: #ddd;
//       }
//   }
//   > input:checked + label {
//     &:after {
//       opacity: 1; /* coche opaque */
//       transform: scale(1); /* mise à l'échelle 1:1 */
//     }
//   }
//   > input:disabled:checked + label {
//     &:after {
//       color: #999;
//     }
//   }
//   > input:disabled + label {
//     color: #aaa;
//   }
//   > input:checked:focus + label, input:not(:checked):focus + label {
//     &:before {
//       border: 1px dotted blue;
//     }
//   }
// `;

export const Styled = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  > input {
    opacity: 0;
    cursor: pointer;
    position: absolute;
  }
  > input:checked {
    &+label::before {
      content: '✔';
      background: #f8f8f8;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    }
  > label {
    font-size: 1.2em;
    cursor: pointer;
    display: flex;
    &:hover{
      &:before{
        background-color: #D466F2;
      }
    }
  }
  > label::before {
    content: '';
    border: 0.05em solid black;
    height: 1em;
    width: 1em;
    border-radius: 0.15em;
    margin-right: 0.5em;
  }
  > input:focus {
    &+label::before {
      box-shadow: 0 0 20px black;
      
    }
`;