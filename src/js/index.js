import {DOMStrings} from './views/base';
import {setDate} from './controllers/mainViewCtrl';
import {createNewInvoice} from './controllers/invoiceCtrl';
import {createList} from './controllers/invoiceListCtrl';
import {addInvoiceToUi} from './views/invoiceListView';
import {handleBudget} from './controllers/budgetCtrl';

/* 
                MAIN CONTROLLER 
*/
const appState = {};

// set actual and redner actual date for app
setDate(DOMStrings.budgetDate);
const citTax = '15%';





// SET EVENT LISTENER TO ADD INVOICE
DOMStrings.entireForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Create new invoice list if there is no one yet
    if(!appState.invoiceList) {
        appState.invoiceList = createList();
    }

    // Creat budget if doesn't exist
    if(!appState.budget) {
        appState.budget = handleBudget.createBudget();
    }

    // create new invoice from input data
    const invoice = createNewInvoice();
    // add invoice do invoice list
    appState.invoiceList.addInvoice(invoice);
    // add invoice to UI
    addInvoiceToUi(invoice);
    // update budget
    console.log(appState);
    appState.budget.calc(appState.invoiceList, citTax);
    handleBudget.updateUI(appState.budget);
    console.log(appState);

});