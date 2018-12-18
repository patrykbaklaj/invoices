import {DOMStrings} from './base';


export const getInput = () => {
    return {
        type: DOMStrings.invoiceType.value,
        number: DOMStrings.invoiceNumber.value,
        description: DOMStrings.invoiceDescription.value,
        netAmount: DOMStrings.invoiceNet.value,
        taxPercentage: DOMStrings.invoiceTax.value,
        netGross: DOMStrings.invoiceGross.value
    };
};




// Function to change gross and net amounts when one of them change on UI

const setNetOrGross = (net, gross, tax) => {

    [net, gross, tax].forEach(el => el.addEventListener('change', (e) => {
        net.value = parseFloat(net.value).toFixed(2);
        gross.value = parseFloat(gross.value).toFixed(2);
        if(e.target.id === 'invoice-net' || e.target.id === 'invoice-tax'){
            gross.value = (net.value * (1 + tax.value / 100)).toFixed(2);
        } else if (e.target.id === 'invoice-gross') {
            net.value = (gross.value / (1 + tax.value / 100)).toFixed(2);
        } 
    }));    
};

setNetOrGross(DOMStrings.invoiceNet, DOMStrings.invoiceGross, DOMStrings.invoiceTax);