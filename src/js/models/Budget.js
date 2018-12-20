export default class Budget {
    constructor(){
        this.incomesNet = 0;
        this.incomesGross = 0;
        this.expensesNet = 0;
        this.expensesGross = 0;
        this.vat = 0;
        this.cit = 0;
        this.total = 0;
    }

    calc(invoiceList, citTax) {
        // TODO
        // change citTax to decimals if nessesery
        // if(typeof citTax === 'string'){
        //     const citDec = citTax;
        // }

        // Calculate incomes totals
        if(invoiceList.invoices.income.length > 0) {
            // sum incomes Net
            this.incomesNet = invoiceList.invoices.income.reduce( (acc, curr) => {
                return acc + parseFloat(curr.net);
            }, 0);        
            // Sum incomex Gross
            this.incomesGross = invoiceList.invoices.income.reduce( (acc, curr) => {
                return acc + parseFloat(curr.gross);
            }, 0);        
        } else {
            this.incomesNet = 0;
            this.incomesGross = 0;
        }

        if(invoiceList.invoices.expense.length > 0) {
            // sum incomes Net
            this.expensesNet = invoiceList.invoices.expense.reduce( (acc, curr) => {
                return acc + parseFloat(curr.net);
            }, 0);        
            // Sum incomex Gross
            this.expensesGross = invoiceList.invoices.expense.reduce( (acc, curr) => {
                return acc + parseFloat(curr.gross);
            }, 0);        
        } else {
            this.expensesNet = 0;
            this.expensesGross = 0;
        }

        // calculate CIT to be paid (NET Incomes - NET expenses) * cit-tax
        this.cit = ((this.incomesNet - this.expensesNet) * 0.15).toFixed(2);

        // calculate VAT to be paid (VAT from incomes - VAT from expenses)
        this.vat = ((this.incomesGross - this.incomesNet) - (this.expensesGross - this.expensesNet)).toFixed(2);

        // calculate Total Budget Net (Total Net incomes - Total Net expenses)
        this.total = this.incomesNet - this.expensesNet;
    }



}