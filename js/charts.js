const str = "a23";
// 123 213 231 321 312 132 
// let str = number.toString()

let arr = str.split("")
let newArr = [];
console.log(typeof arr);

// let shift = arr.shift()
// arr.splice(1, 0, shift)


function roamElement() {
    debugger;
    let shift = arr.shift()
    for (let i = 1; i < arr.length; i++) {

        arr.splice(i, 0, shift)
        // console.log("function", arr);
        i++
        arr.splice(i, 0, shift)
        // console.log("function", arr);
        break;
    }

}






console.log("newArr", newArr);
console.log("arr", arr);
// console.log("shift", shift);


roamElement()
