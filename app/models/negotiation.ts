export class Negotiation {
    constructor(
        private _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) { }

    get volume(): Number {
        return this.quantity * this.value;
    }

    get date(): Date {
        const date = new Date(this.date.getTime());
        return date;
    }
}