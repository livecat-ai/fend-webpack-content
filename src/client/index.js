import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { onBlur } from './js/onBlurHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

console.log(checkForName);

alert("Ok finally it works");

export {
    checkForName,
    handleSubmit,
    onBlur
};