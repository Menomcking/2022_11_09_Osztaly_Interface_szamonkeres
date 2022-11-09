import { Statue } from "./Statue";

document.addEventListener('DOMContentLoaded', () => {
    let namePattern = /[a-zA-Z,]{1,}$/;
    let Artwork: Statue[] = [];
    let index: number = 0;
    let totalValue: number = 0;
    document.getElementById('add')?.addEventListener('click', () => {
        let alright: boolean = true;
        let name: string;
        let year: number;
        let price: number;
        let height: number;
        index ++;
        if(namePattern.test((document.getElementById('statueName') as HTMLInputElement).value) == true){    
            name = (document.getElementById('statueName') as HTMLInputElement).value;
        } else{ 
            alright = false;
            alert("Hibás nevet adott meg.");
            return;
        }
        if(parseInt((document.getElementById('year') as HTMLInputElement).value) <= 2022){
            year = parseInt((document.getElementById('year') as HTMLInputElement).value);
        }else{
            alright = false;
            alert("Hibás évet adott meg.");
            return;
        }
        if(parseInt((document.getElementById('price') as HTMLInputElement).value) >= 1){
            price = parseInt((document.getElementById('price') as HTMLInputElement).value);
            totalValue = price + totalValue;
        }else{
            alright = false;
            alert("Hibás árat adott meg.");
            return;
        }
        if(parseInt((document.getElementById('height') as HTMLInputElement).value) >= 10){
            height = parseInt((document.getElementById('height') as HTMLInputElement).value);
        }else{
            alright = false;
            alert("Hibás magasságot adott meg.");
            return;
        }
        if(alright == true){
            Artwork.push(new Statue(name,year,price,height));
        }
        let count = document.getElementById('count'); 
        if(count){
            count.innerText = index.toString();
        }
        let val = document.getElementById('totalPrice');
        if(val){
            val.innerText = totalValue.toString();
        }
        reset();
    });
    function reset(){
        (document.getElementById('statueName') as HTMLInputElement).value = "";
        (document.getElementById('year') as HTMLInputElement).value = "";
        (document.getElementById('price') as HTMLInputElement).value = "";
        (document.getElementById('height') as HTMLInputElement).value = "";
    }
});