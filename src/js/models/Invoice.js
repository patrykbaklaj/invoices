export default class Invoice {

    constructor(id, type, number, description, net, tax, gross) {
        this.id = id;
        this.type = type;
        this.number = number;
        this.description = description;
        this.net = net;
        this.tax = tax;
        this.gross = gross;
    }
}