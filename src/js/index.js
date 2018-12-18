import {DOMStrings} from './views/base';
import {setDate} from './controllers/mainViewCtrl';
import {createNewInvoice} from './controllers/invoiceCtrl';

/* 
                MAIN CONTROLLER 
*/

// set actual and redner actual date for app
setDate(DOMStrings.budgetDate);


// Set event listeners and controllers


// SET EVENT LISTENER TO ADD INVOICE
DOMStrings.entireForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // CREATE NEW INVOICE
    createNewInvoice();
});