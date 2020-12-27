//********************** BASIC ALGORITHM ******************
// 1. Chuyen do C => F
console.log("========================================");
function changetoF(valueChange) {
  return (valueChange * 9) / 5 + 32;
}
let tempF = changetoF(10);
console.log(tempF);

// 2. Đảo ngược chuỗi
console.log("========================================");
function reverseStr(str) {
  let rts = "";
  let len = str.length - 1;
  for (let i = 0; i <= len; i++) {
    const element = str[len - i];
    rts += element;
  }
  return rts;
}
let rts = reverseStr("Dat");
console.log(rts);

// 3. Giai thừa một số
console.log("========================================");
function factorialNumber(number) {
  if (number === 0) return 1;
  if (number === 1) return 1;
  return factorialNumber(number - 1) * number;
}
let fac = factorialNumber(3);
console.log(fac);

// 4. Tìm từ dài nhất trong một chuỗi
console.log("========================================");
function maxLength(str) {
  let _arrStr = str.split(" ");
  let max = 0;
  _arrStr.forEach((element) => {
    if (element.length > max) {
      max = element.length;
    }
  });
  return max;
}
let strMaxLength = maxLength(
  `Tạo hàm nhậnnnnaaa vào 2 tham số. Tham số thứ nhất là chuỗi, tham số thứ 2 là chuỗi có độ dài 1 ký tự. Hàm sẽ kiểm tra tham số thứ nhất có ký tự kết thúc bằng tham số thứ 2 hay không ? và trả về kết quả là dạng Boolean`
);
console.log(strMaxLength);

// 5. Trả lại các số lớn nhất trong mảng
console.log("========================================");
function maxSubArr(arr) {
  let arrMax = [];

  arr.forEach((element) => {
    arrMax.push(Math.max(...element));
  });
  return arrMax;
}
let arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26, 1001],
  [32, 35, 37, 39],
  [1000, -72, -3, 1029, 857, 1],
];
let arrMax = maxSubArr(arr);
console.log(arrMax);

// 6. Xác nhận kết thúc
let abcStr = `Tạo hàm nhận vào 2 tham số. Tham số thứ nhất là chuỗi, tham số thứ 2 là chuỗi có độ dài 1 ký tự. Hàm sẽ kiểm tra tham số thứ nhất có ký tự kết thúc bằng tham số thứ 2 hay không ? và trả về kết quả là dạng Boolean.`;
console.log("========================================");
function checklastStr(str, lastStr) {
  if (str[str.length - 1] === lastStr) return true;
  return false;
}
console.log(checklastStr(abcStr, "."));
console.log(checklastStr(abcStr, "a"));

// 7. Cắt ngắn và chuỗi
console.log("========================================");
function truncatedAndStr(str, num) {
  if (str.length > num) return str.slice(0, num) + "...";
  return str;
}
let arrTestStr = "Nguyen Van A";
console.log(truncatedAndStr(arrTestStr, 5));
console.log(truncatedAndStr(arrTestStr, 20));

// 8. Callback function , check %2 return values || undefined.
console.log("========================================");
function checkEvenNumberes(arr, callback) {
  let result_arr = [];
  arr.forEach((ele) => {
    if (callback(ele) === true) {
      result_arr.push(ele);
    } else {
      result_arr.push(undefined);
    }
  });
  return result_arr;
}
function checkCB(num) {
  return num % 2 == 0 ? true : undefined;
}
let result = checkEvenNumberes([1, 3, 5, 6, 4, 3, 2, 6, 990, 8], checkCB);
console.log(result);

// 9. Định dạng chuỗi tiêu đề ( Viet hoa cac chu cai dau con lai viet thuong)
console.log("========================================");
function titleFormat(str) {
  let subStr = str.split(" ");
  subStr.forEach((ele, index) => {
    subStr[index] = ele.charAt(0).toUpperCase() + ele.slice(1);
  });
  let substr1 = subStr.join().replace(/[,]/gi, " ");
  console.log(substr1);
  return substr1;
}
titleFormat(
  `Phương thức toUpperCase() sẽ chuyển đổi một chuỗi có chứa các kí tự in thường thành một chuỗi in hoa. Phương thức sẽ trả về chuỗi in hoa. Phương thức này sẽ không làm thay đổi chuỗi gốc ban đầu.`
);

// 10. Tạo mảng mới trên mảng đã cho
console.log("========================================");
function coppyArr(arr1, arr2, num) {
  let newarr = [];
  newarr = arr2.slice(0, num).concat(arr1);
  newarr = newarr.concat(arr2.slice(num, arr2.length));
  console.log("arr1 coppy :" + newarr);
  return newarr;
}
let arrCoppy = coppyArr([1, 5, 7, 5, "A", "ooo"], [1, 2, 3, 4, 5, 6, 7], 5);

// 11. Falsy Bouncer
console.log("========================================");
let arrTest = [false, null, 0, "", undefined, NaN];
function FalsyBouncer(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (arrTest.indexOf(element) !== -1 || Number.isNaN(element)) {
      array.splice(i, 1);
      i--;
    }
  }
  console.log(array);
  return array;
}
FalsyBouncer([
  false,
  null,
  0,
  "",
  undefined,
  NaN,
  1,
  2,
  5,
  false,
  null,
  "",
  NaN,
  5,
  3,
  2,
  "ok",
]);

// 12. Tôi thuộc về đâu
console.log("========================================");
function whereIbelongto(array, num) {
  array.sort((a, b) => {
    return a - b;
  });
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= num && array[i + 1] > num) {
      array.splice(i + 1, 0, num);
      console.log(array);
      return i + 1;
    }
  }
}
console.log(whereIbelongto([1, 3, 5, 90, 54, 34, 234, 46, 443], 100));
// 1, 234,  3, 34, 443, 46,   5, 54, 90

// 13. Kiểm tra ký tự
console.log("========================================");
function checkTheWord(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  return str1.indexOf(str2) >= 0 ? true : false;
}
console.log(checkTheWord("Troi xanh dep qua Qua troi dep luon", "DEP Qua"));

// 14. Chunky Monkey
console.log("========================================");
function chankyMonkey(array, subArrLen) {
  let frequency = parseInt(array.length / subArrLen);
  let newArr = [];
  // console.log(array.length % subArrLen)
  if (frequency == 0) {
    newArr.push(array);
    return newArr;
  }
  for (let i = 1; i <= frequency; i++) {
    newArr.push(array.slice(subArrLen * (i - 1), subArrLen * i));
  }
  if (array.length % subArrLen > 0) {
    newArr.push(array.slice(subArrLen * frequency, array.length));
  }
  return newArr;
}
console.log(chankyMonkey([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

// 15. sử dụng for in để đếm số lượng người online là true và trả về số lượng đếm được.
console.log("========================================");
const users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 27,
    online: false,
  },
  Sarah: {
    age: 27,
    online: true,
  },
  Ryan: {
    age: 27,
    online: true,
  },
};
let count = 0;
for (let userkey in users) {
  count += users[userkey].online == true ? 1 : 0;
}
console.log("Soluog Online : " + count);

