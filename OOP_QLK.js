class Commodity{
    constructor(id,name,price,quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const maxLength = 10;
let arrayCom = [];
let lengthArr = 0
do {
    if(lengthArr<=maxLength){

        const tmp = new Commodity(lengthArr,` Com ${lengthArr}`,Math.floor(Math.random()*10000)+9999,lengthArr+Math.floor(Math.random()*100)+50);
        arrayCom.push(tmp);
        lengthArr ++ ;
    }
    else if(lengthArr>maxLength){
        console.log('push fail !!!');
    }
} while (lengthArr<=maxLength);
console.log(arrayCom)

function swapUpDown(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i].price>array[j].price) {
                [array[i],array[j]] = [array[j],array[i]];
            }
        }
        
    }
    console.table(array);
}

function checkSum(array){
    const quantityIsNull = array.filter(ele => ele.quantity == 0)
    console.table(quantityIsNull)
}

function order(array,id,num){
    const quantityIsNull = array.filter(ele => ele.id == id)
    // console.log(quantityIsNull)
    if(quantityIsNull[0])
    {   
        if (quantityIsNull[0].quantity >= num) {
            let total = quantityIsNull[0].price * num
            console.log(`${num}*${quantityIsNull[0].price} = ${total}`)
            return total
        }else{
            console.log(" Out of stock !")
        }
    }else{
        console.log("Not found !")
    }
}

swapUpDown(arrayCom)
// checkSum(arrayCom)
order(arrayCom,2,40)

