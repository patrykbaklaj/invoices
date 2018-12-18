import {DOMStrings} from '../views/base';
import {getInput} from '../views/invoiceView';


export const handleInvoiceInput = () => {
    // getInput for testing purpose only
    DOMStrings.entireForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(getInput());
    });  
};

