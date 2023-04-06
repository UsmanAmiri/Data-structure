// Q 1
const arr = [1, 2, 3, 4, 5];
const target = 6;
const pairs = findPairs(arr, target);
console.log(pairs);

function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }

//   Q 2
let arr = [1, 2, 3, 4, 5];
console.log(arr);
reverseArrayInPlace(arr);


function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
//   Q3
function areStringsRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const concatenatedStr = str1 + str1;
    return concatenatedStr.includes(str2);
  }
  console.log(areStringsRotations('abcd', 'dabc')); // true
  console.log(areStringsRotations('hello', 'world')); // false
    
//   Q 4
function findFirstNonRepeatedChar(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  console.log(findFirstNonRepeatedChar('aabbcdeeff')); // c
  console.log(findFirstNonRepeatedChar('hello world')); // h

//   Q 5
function towerOfHanoi(n, fromRod, toRod, auxRod) {
    if (n === 1) {
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
      return;
    }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
  }
  towerOfHanoi(3, 'A', 'C', 'B');

//   Q 6
function postfixToPrefix(postfix) {
    const stack = [];
    for (let i = 0; i < postfix.length; i++) {
      const char = postfix[i];
      if (char.match(/[0-9]/)) {
        stack.push(char);
      } else {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const prefix = char + operand2 + operand1;
        stack.push(prefix);
      }
    }
    return stack.pop();
  }
  console.log(postfixToPrefix('23+')); // +23
  console.log(postfixToPrefix('234*+5-')); // -+2*345

//   Q 7
function prefixToInfix(prefix) {
    const stack = [];
    for (let i = prefix.length - 1; i >= 0; i--) {
      const char = prefix[i];
      if (char.match(/[a-zA-Z0-9]/)) {
        stack.push(char);
      } else {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infix = `(${operand1}${char}${operand2})`;
        stack.push(infix);
      }
    }
    return stack.pop();
  }
  console.log(prefixToInfix('+23')); // (2+3)
  console.log(prefixToInfix('-+2*345')); // ((2+3*4)-5)

//   Q 8
function checkBrackets(code) {
    const stack = [];
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        const top = stack.pop();
        if ((char === ')' && top !== '(') ||
            (char === ']' && top !== '[') ||
            (char === '}' && top !== '{')) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  console.log(checkBrackets('if (a > b) { return a; }')); // true
  console.log(checkBrackets('function foo() { if (x) { bar(); }')); // false

//   Q 9
function reverseStack(stack) {
    if (stack.length === 0) {
      return;
    }
    const top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
  }
  
  function insertAtBottom(stack, value) {
    if (stack.length === 0) {
      stack.push(value);
      return;
    }
    const top = stack.pop();
    insertAtBottom(stack, value);
    stack.push(top);
  }
  const stack = [1, 2, 3, 4, 5];
  console.log(stack); // [1, 2, 3, 4, 5]
  reverseStack(stack);
  console.log(stack); // [5, 4, 3, 2, 1]

//   Q 10
class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(value) {
      this.stack.push(value);
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      const value = this.stack.pop();
      if (value === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return value;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  const stack = new MinStack();
  stack.push(5);
  stack.push(2);
  stack.push(3);
  stack.push(1);
  console.log(stack.getMin()); // 1
  stack.pop();
  console.log(stack.getMin()); // 2
    