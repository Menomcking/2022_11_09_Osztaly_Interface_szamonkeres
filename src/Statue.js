"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statue = void 0;
class Statue {
    constructor(title, year, price, height) {
        this._title = title;
        this._year = year;
        this._price = price;
        this._height = height;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
}
exports.Statue = Statue;
