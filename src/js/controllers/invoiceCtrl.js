import {
    getInput, 
    clearFields
} from '../views/invoiceView';
import Invoice from '../models/Invoice';
const getUid = require('get-uid');

export const createNewInvoice = () => {
    // Get data from UI
    const inputData = getInput();
    // GET uniq ID
    const ID = getUid();
    // return invoice IF important input fields in UI are not empty
    if (ID && inputData.number && inputData.description && inputData.netAmount && inputData.grossAmount) {
        const invoice = new Invoice(ID, inputData.type, inputData.number, inputData.description, inputData.netAmount, inputData.taxPercentage, inputData.grossAmount);
        // console.log(invoice);
        return invoice;
    }

    // clear input Fields in UI
    clearFields();
};