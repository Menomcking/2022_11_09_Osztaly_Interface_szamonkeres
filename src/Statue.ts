export class Statue implements Artwork {
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    private _year: number;
    public get year(): number {
        return this._year;
    }
    public set year(value: number) {
        this._year = value;
    }
    private _price: number;
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    private _height: number;
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    constructor(title: string, year: number, price: number, height: number){
        this._title = title;
        this._year = year;
        this._price = price;
        this._height = height;
    }
}
