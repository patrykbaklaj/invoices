import Budget from '../models/Budget';
import {budgetView} from '../views/budgetView';

export const handleBudget = {

    createBudget: () => {
        return new Budget();
    },

    updateUI: (budget) => {
        budgetView.addToUI(budget);
    }
}


