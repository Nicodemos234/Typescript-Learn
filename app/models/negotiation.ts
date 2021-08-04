export class Negotiation {
    constructor(
        private _date: Date,
        private _quantity: number,
        private _value: number
    ) { }

    get date(): Date {
        return this._date;
    }

    get quantity(): Number {
        return this._quantity;
    }

    get value(): Number {
        return this._value;
    }

    get volume(): Number {
        return this._quantity * this._value;
    }
}