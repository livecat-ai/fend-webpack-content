import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { onBlur } from './js/onBlurHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// console.log(checkForName);

console.log("Ok finally it works");

// const postData = async ( url = '', data = {})=>{
//     console.log(data);
//       const response = await fetch(url, {
//       method: 'POST', 
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//      // Body data type must match "Content-Type" header        
//       body: JSON.stringify(data), 
//     });

//       try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//       }catch(error) {
//       console.log("error", error);
//       }
//   }

// postData('/test', {answer:42});

export {
    checkForName,
    handleSubmit,
    onBlur
};