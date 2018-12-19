import {DOMStrings} from './views/base';
import {setDate} from './controllers/mainViewCtrl';
import {createNewInvoice} from './controllers/invoiceCtrl';
import {createList} from './controllers/invoiceListCtrl';
import {addInvoiceToUi} from './views/invoiceListView';
import Invoice from './models/Invoice';

/* 
                MAIN CONTROLLER 
*/
const appState = {};

// set actual and redner actual date for app
setDate(DOMStrings.budgetDate);





// SET EVENT LISTENER TO ADD INVOICE
DOMStrings.entireForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Create new invoice list if there is no one yet
    if(!appState.invoiceList) {
        appState.invoiceList = createList();
    }

    // create new invoice from input data
    const invoice = createNewInvoice();
    // add invoice do invoice list
    appState.invoiceList.addInvoice(invoice);
    // add invoice to UI
    addInvoiceToUi(invoice);
    console.log(appState);
});