"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let namePattern = /[a-zA-Z,]{1,}$/;
    let Artwork = [];
    let index = 0;
    let totalValue = 0;
    (_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let alright = true;
        let name;
        let year;
        let price;
        let height;
        index++;
        if (namePattern.test(document.getElementById('statueName').value) == true) {
            name = document.getElementById('statueName').value;
        }
        else {
            alright = false;
            alert("Hibás nevet adott meg.");
            return;
        }
        if (parseInt(document.getElementById('year').value) <= 2022) {
            year = parseInt(document.getElementById('year').value);
        }
        else {
            alright = false;
            alert("Hibás évet adott meg.");
            return;
        }
        if (parseInt(document.getElementById('price').value) >= 1) {
            price = parseInt(document.getElementById('price').value);
            totalValue = price + totalValue;
        }
        else {
            alright = false;
            alert("Hibás árat adott meg.");
            return;
        }
        if (parseInt(document.getElementById('height').value) >= 10) {
            height = parseInt(document.getElementById('height').value);
        }
        else {
            alright = false;
            alert("Hibás magasságot adott meg.");
            return;
        }
        if (alright == true) {
            Artwork.push(new Statue_1.Statue(name, year, price, height));
        }
        let count = document.getElementById('count');
        if (count) {
            count.innerText = index.toString();
        }
        let val = document.getElementById('totalPrice');
        if (val) {
            val.innerText = totalValue.toString();
        }
        reset();
    });
    function reset() {
        document.getElementById('statueName').value = "";
        document.getElementById('year').value = "";
        document.getElementById('price').value = "";
        document.getElementById('height').value = "";
    }
});
