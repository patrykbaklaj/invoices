import {DOMStrings} from './views/base';
import {setDate} from './controllers/mainViewCtrl';
import {getInput} from './views/invoiceView';
import {handleInvoiceInput} from './controllers/invoiceCtrl';

/* 
                MAIN CONTROLLER 
*/

// set actual and redner actual date for app
setDate(DOMStrings.budgetDate);


// Set event listeners and controllers
handleInvoiceInput();