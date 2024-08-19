// 'add' เป็นแบบ Arrow จาก ex-3
let add = (a, b) => a + b;
// ทดสอบ Function Expressions
console.log(add(5, 3));  // แสดงผล: 8



// 'subtract' เป็นแบบ Arrow จาก ex-3
let subtract = (a, b) => a - b;
// ทดสอบ Function Expressions
console.log(subtract(10, 3));  // แสดงผล: 3



// 'multiply' เป็นแบบ Arrow จาก ex-3
let multiply = (a, b) => a * b;
// ทดสอบ Function Expressions
console.log(multiply(10, 5));  // แสดงผล: 50



// 'divide' เป็นแบบ Arrow จาก ex-3
let divide = (a, b) => a / b;
// ทดสอบ Function Expressions
console.log(divide(10, 5));  // แสดงผล: 2


// Start coding here

// รวบรวมฟังก์ชันที่เขียนจาก Exercise #3 ให้อยู่ใน Object
let calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
};

// Declare 'addResult'
let addResult = add(10, 20);
console.log(addResult); // ผลลัพธ์คือ 30

// Declare 'divideResult'
let divideResult = divide(3000, 10);
console.log(divideResult); // ผลลัพธ์คือ 300