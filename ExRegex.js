// 1. Viết 1 regex tham lam tìm ra tất cả C hoa:

let quoteSample = "C"; // Returns ["C"]
let quoteSample1 = "P1P5P4CCCP2P6P3"; // Returns ["CCC"]
let quoteSample2 = "P6P2P7P4P5CCCcCP3P1"; // Returns ["CCC", "C"]
let quoteSample3 = "CC c"; // Returns ["CC"]
let quoteSample4 = "P1P2P3"; // Returns null
let quoteSample5 = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCP3"; // Returns ["CCCCCCCCCCCCCCCCCCCCCCC"]
let regExpStr = /C+/g
console.log(quoteSample2.match(regExpStr))

// 2. Kiểm tra trường Usernames

// Usernames chỉ có thể sử dụng các ký tự chữ và số
// Các số trong usernames phải ở cuối. [abc0->9]
// Có thể có 0 hoặc các số lớn hơn và  nhiều số hơn ở cuối nhưng tuyệt đối Usernames không thể bắt đầu bằng số.
// Những chữ cái trong usernames có thể là chữ thường và chữ hoa.
// Usernames phải dài ít nhất hai ký tự. 
// Usernames có hai ký tự chỉ có thể sử dụng các ký tự chữ cái.
console.log('========================================');

let arrtxtUser = ['AB1','a11','Jo','JACK','BadUs3rnam33','a1','11a','wqe12g','aqe132','Adqwewqe11234','q1311','1z','aasA12']
let regUser = /(?=^[a-z]+\d*$)(?!.{0,1}$|^.\d{1}$)/i
for (let i = 0; i < arrtxtUser.length; i++) {
    let standUser = regUser.test(arrtxtUser[i]);
    console.log(standUser);
}
// let regUser = /(?=^[a-zA-Z]+\d*$)(?!^\w{1}\d{1}$)(?=\w{2,})/i

/* 6. Reg Password
- Mật khẩu phải dài hơn 5 ký tự.
- Mật khẩu không bắt đầu bằng số.
- Phải có hai số liên tiếp trong mật khẩu. */
console.log('========================================');
let arrtxtPass = ['abcde1aa11','123ewqe123q','wqe12g','aqe132','Adqwewqe1','qe13','123']
let regPassword = /^(?=[a-zA-Z]+\d*\w*\d{2,}\w*\d*)(?=\w{6,})/g
for (let i = 0; i < arrtxtPass.length; i++) {
    let standPassword = regPassword.test(arrtxtPass[i]);
    // console.log(standPassword);
}
