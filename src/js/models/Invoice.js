export default class Invoice {

    constructor(id, number, description, net, tax, gross) {
        this.id = id;
        this.number = number;
        this.description = description;
        this.net = net;
        this.tax = tax;
        this.gross = gross;
    }
}