import {
    getInput
} from '../views/invoiceView';
import Invoice from '../models/Invoice';
const getUid = require('get-uid');

export const createNewInvoice = () => {
    const inputData = getInput();
    const ID = getUid();
    if (ID && inputData.number && inputData.description && inputData.netAmount && inputData.grossAmount) {
        const invoice = new Invoice(ID, inputData.type, inputData.number, inputData.description, inputData.netAmount, inputData.taxPercentage, inputData.grossAmount);
        console.log(invoice);
        return invoice;
    }
};