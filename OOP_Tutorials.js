// 1- Tạo mới một đối tượng là terrier dựa trên hàm tạo Dog
function Dog(name,color){
  this.name = name;
  this.color = color;
  this.numlegs = 2;
}
let terrier = new Dog("terrier A","yelow");
// console.log(terrier)

`2- Sử dụng vòng lặp để 
- thêm các thuộc tính riêng của canary vào mảng ownProps
- thêm các thuộc tính là thuộc tính nguyên mẫu vào mảng prototypeProps`

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
}
Bird.prototype.numLegs = 2;
Bird.prototype.test = "ok";
let canary = new Bird("Canary", "yello");
let ownProps = [];
let prototypeProps = [];
for (const key in canary) {
  if (Object.hasOwnProperty.call(canary, key)) {
    ownProps.push(key)
  }else{
    prototypeProps.push(key);
  }
}
// console.log("ownProps:",ownProps)
// console.log("prototypeProps:",prototypeProps)

// 3. Sử dụng Object.create tạo phiên bản Animal có tên là Dog
//dogBeagle kế thừa từ hàm tạo Dog.
//dogBeagle có thêm phương thức bark().
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
console.log()
function Dog(){}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let dogBeagle = new Dog();
dogBeagle.bark=()=>{
  console.log("Meoooooooooo");
}
dogBeagle.eat()
dogBeagle.bark()


// 4. Ghi đè phương thức fly() cho Penguin để nó trả về  "Alas, this is a flightless bird."
function BirdA() { }
BirdA.prototype.fly = function() {
 return "I am flying!";
};
function Penguin() { }
Penguin.prototype = Object.create(BirdA.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function(){
  return "Alas, this is a flightless bird";
}
let penguin = new Penguin();
console.log(penguin.fly());

//5.Thêm phương thức glide cho bird và boat bằng cách sử dụng Mixin

let bird = {
  name: "Donald",
  numLegs: 2
};
 let boat = {
  name: "Warrior",
  type: "race-boat"
};
let glideMixin = function(object){
  object.glide=()=>{
    return "glide…"
  }
}
glideMixin(bird)
glideMixin(boat)
console.log(bird.glide())
console.log(boat.glide())

// 6. Chuyển đối tượng batman thành module sử dụng IIFE
let batman = {
};

(function(obj){
      obj.identity= "Bruce Wayne";
      obj.fightCrime= function () {
         console.log("Cleaning up Gotham.");
      };
      obj.goCivilian= function () {
      console.log("Attend social events as " + this.identity);
   }
})(batman)
batman.fightCrime()
