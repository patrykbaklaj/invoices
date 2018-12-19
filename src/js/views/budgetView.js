import {DOMStrings} from '../views/base';

export const budgetView = {
    addToUI: (budget) => {
        DOMStrings.totalBudget.innerHTML = budget.total;
        DOMStrings.totalIncomes.innerHTML = budget.incomesNet;
        DOMStrings.totalExpenses.innerHTML = budget.expensesNet;
        DOMStrings.vatAmount.innerHTML = budget.vat;
        DOMStrings.citAmount.innerHTML = budget.cit;
    }
}
