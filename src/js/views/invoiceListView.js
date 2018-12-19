import {DOMStrings} from './base';

// Add header to UI if there is no any yet
const setHeaders = (type) => {
    if(DOMStrings[type].children.length === 0){
        const headerMarkup = type === 'invoiceListIncomes' ? `<h3 class="h3 text-success mb-5 text-center">Przychodzy</h3>` : '<h3 class="h3 text-danger mb-5 text-center">Wydatki</h3>';
        DOMStrings[type].insertAdjacentHTML('afterbegin', headerMarkup);
    }
};

export const addInvoiceToUi = (invoice) => {

    if(invoice) {
        const markup = `
        <div class="card mb-3 shadow bg-white rounded">
            <div class="card-header bg-${invoice.type === 'income' ? 'success' : 'danger'} text-white">
                ${invoice.number}
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    ${invoice.description}
                </h5>
                <div class="row">
                    <div class="col"><span>Netto: </span>${invoice.net} zł</div>
                    <div class="col"><span>VAT: </span>${invoice.tax} zł</div>
                    <div class="col"><span>Netto: </span>${invoice.gross} zł</div>
                </div>
            </div>
        </div>
        `;
        // define place where insert new invoice
        const invType = invoice.type === 'income' ? 'invoiceListIncomes' : 'invoiceListExpenses';
        // setup headers if needed
        setHeaders(invType);
        // insert markup into DOM
        DOMStrings[invType].insertAdjacentHTML('beforeend', markup);
    } 
};

