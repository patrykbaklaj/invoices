export default class InvoiceList {
    constructor(){
        this.invoices = {
            income: [],
            expense: []
        };
    }

    addInvoice(invoice){
        if(invoice) {
            this.invoices[invoice.type].push(invoice);
        }
    }
}