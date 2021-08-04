export class Negotiation {
    constructor(
        public readonly date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) { }

    get volume(): Number {
        return this.quantity * this.value;
    }
}