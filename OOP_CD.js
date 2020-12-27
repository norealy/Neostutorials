class CD{
    constructor(cdName,cdType,cdPrice){
        this.cdName = cdName;
        this.cdType = cdType;
        this.cdPrice = cdPrice;
    }
}
const maxLength = 10;
const arrayCD = [];
let lengthArr = 0;
do {
    if(lengthArr<=maxLength){
        const tmp = new CD(`Name CD ${lengthArr}`,"Music",1000*lengthArr);
        arrayCD.push(tmp);
        lengthArr ++ ;
    }
    else if(lengthArr>maxLength){
        console.log('push fail !!!');
    }
} while (lengthArr<=maxLength);
console.log(arrayCD)
// 1. Add cd

function addCD(name,type,price){
    const tmp = new CD(`Name CD ${name}`,type,1000*price);
    arrayCD.push(tmp);
    console.log("ADDED : ",tmp);
}
addCD(`Name CD new`,"Film",1000)
function searchCD(name){
    const searchArr = (arrayCD.filter(elCD => elCD.cdName.search(name) != -1));
    console.log("Search : ");
    console.table(searchArr);
}
searchCD('Name CD 1')

function showAll(){
    console.table(arrayCD)
}
showAll()
