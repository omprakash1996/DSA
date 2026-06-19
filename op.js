//-------------typeof
//  console.log(typeof("hello"));   // string
// console.log(typeof(42));  // number
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined
//  console.log(typeof null);   // object
// console.log(typeof 1); // number
// console.log(typeof NAN);
//--------------arithemetic
// console.log(10+5);  //15
// console.log( 10-2); //8
// console.log("Hello"+" "+"world");
// console.log(5+"3");
// console.log("5" - 3);  // 2
// console.log(1=="1");  // true
// console.log(1==="1"); // false
// ------------------boolean
// console.log(Boolean(0));  //false
//  console.log(Boolean("")); //false
// console.log(Boolean("om"));  // true
// console.log(Boolean(null)); // false
// console.log(Boolean (undefined)); // false
// ----------------------arthitimetic
// console.log(10%3); //1
// let arr=[1,2,3];
// console.log(arr.indexOf(1));
// console.log(NaN === NaN);  // false
// console.log(Math.max(23,-7,78));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.1));
// console.log(Math.abs(-1));
//array ------------------------------------------
// console.log("hello world".split(" "));
// console.log(parseInt("-42.8px"))
//  console.log(parseFloat("-4.1opk"));
// console.log(Number("123"));
// -----------------condition

// let x=0;
// console.log( x || "default");
// let x=5;
// console.log(x && 'yes');
// console.log("hello".slice(1,3));  // el
// console.log("Hello".replace("H","O")); //oello
// ----------------------------object
// let obj= {x:1,y:2};
// console.log(Object.keys(obj))  // x , y

// let obj= {x:1,y:2};
// console.log(Object.values(obj));

//  console.log([1,2,3].includes(2));
// console.log(typeof function(){});
// console.log(typeof []);  // object
// console.log(typeof []+[]) // object
// console.log(false || 'hello' || 'world'); //hello
// console.log(false && 'hello' && 'world'); // false
// console.log("JS".repeat(3));
// console.log((1.0572).toFixed(3));
// ----------------------------array
// let a = [1,2];
// let b = a;
// b.push(3);
// console.log(a);  // 1,2,3

// let arr = [1,2,3,4,5];
// console.log(arr.slice(1,3));  // 2,3

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(`Hello ${"World"}`);  // Hello World
// console.log([1,2,3].map(x => x * 2));  // 2,4,6
// console.log([1,2,3,4].filter(x => x % 2 === 0));  // 2,4
// console.log([1,2,3].reduce((acc, x) => acc + x, 0));  // 6
// console.log(x);
// var x = 5;  // undefined
// console.log(x);
// let x = 5;    // reference error

//----------------------------- closure

// function counter() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }
// const inc = counter();
// console.log(inc()); // 1
// console.log(inc()); // 2

// var x = 1;
// function foo() {
//   var x = 2;
//   console.log(x);
// }
// foo();
// console.log(x);   // 2,1

// const obj = {
//   name: "Alice",
//   greet() {
//     return "Hi " + this.name;
//   }
// };
// console.log(obj.greet());   // Hi Alice

// const obj = {
//   name: "Bob",
//   greet: () => {
//     return "Hi " + this.name;
//   }
// };
// console.log(obj.greet()); // Hi undefined


// Promise.resolve(42).then(v => console.log(v));
// console.log("sync");   // sync 42

// async function foo() {
//   return 42;
// }
// foo().then(console.log);
// console.log("after");   // after, 42

// let a = [1, 2, 3];
// let b = [...a, 4, 5];
// console.log(b);   //  1, 2, 3, 4, 5

// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest);

// const {x, y, ...rest} = {x:1,y:2,z:3,w:4};
// console.log(rest);  // { z: 3, w: 4 }

// function add(a, b = 10) {
//   return a + b;
// }
// console.log(add(5));   // 15

// const set = new Set([1, 2, 2, 3, 3]);
// console.log(set.size);  // 3

// const m = new Map();
// m.set("a", 1);
// m.set("a", 2);
// console.log(m.get("a")); // 2

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.speak = function() {
//   return this.name + " speaks";
// };
// const dog = new Animal("Dog");
// console.log(dog.speak());  // Dog speaks

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   info() {
//     return "Brand: " + this.brand;
//   }
// }
// const c = new Car("Toyota");
// console.log(c.info());  // Brand: Toyota"

// class Animal {
//   speak() { return "..."; }
// }
// class Dog extends Animal {
//   speak() { return "Woof"; }
// }
// const d = new Dog();
// console.log(d.speak()); // Woof

// console.log([1,[2,[3]]].flat(Infinity));

// const obj = {a: 1};
// const copy = {...obj, b: 2};
// console.log(copy); // { a: 1, b: 2 }

// let x = null;
// console.log(x ?? "default");  // default

// let obj = { a: { b: 42 } };
// console.log(obj?.a?.b);  // 42

// let obj = {};
// console.log(obj?.a?.b); // undefined

// setTimeout(() => console.log("A"), 0);
// console.log("B");  // "B" / "A"

// setTimeout(() => console.log(1), 0);
// Promise.resolve().then(() => console.log(2));
// console.log(3); 3,2,1

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// } // 1,2,3

// console.log("abc".padStart(4, "0"));

// const a = {x: 1};
// const b = {x: 1};
// console.log(a === b);  // false

// const obj = Object.freeze({x: 1});
// obj.x = 99;
// console.log(obj.x);

// console.log(typeof NaN);  // number

// console.log([1,2,3].find(x => x > 1)); // 2

// console.log([1,2,3].some(x => x > 2));  //true

// console.log([1,2,3].every(x => x > 0));  // true

// function* gen() {
//   yield 1;
//   yield 2;
// }
// const g = gen();
// console.log(g.next().value); // 1
// console.log(g.next().value); // 2


// const s = Symbol("id");
// console.log(typeof s);   // symbol

// console.log("hello".startsWith("he")); //true

// console.log(Array.from("hello")); //[ 'h', 'e', 'l', 'l', 'o' ]

// function Person(name) { this.name = name; }
// const p = new Person("Sam");
// console.log(p instanceof Person);

// console.log(+"5");   // 5

// console.log(+true);  // 1

// console.log([] + []);  // " "
// console.log([] + {});   //[object Object]

// console.log(/\d+/.test("abc123"));  //true

// console.log("hello world".match(/\w+/g));  // [ 'hello', 'world' ]

// const obj = {
//   _x: 10,
//   get x() { return this._x * 2; }
// };
// console.log(obj.x);  // 20

// try {
//   null.name;
// } catch(e) {
//   console.log(e instanceof TypeError);
// }   // true

// let x;
// x ??= "hello";
// console.log(x); // hello

// const obj = { a: 1, b: 2 };
// const { a, ...rest } = obj;
// console.log(a, rest);  // 1 {b: 2}

// console.log([1,2,3].flatMap(x => [x, x*2]));  // [ 1, 2, 2, 4, 3, 6 ]

// console.log("abc".at(-1));  // c

// const key = "name";
// const obj = { [key]: "Alice" };
// console.log(obj.name);  // Alice

// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); // false

// let x = "global";
// function test() {
//   console.log(x);
//   let x = "local";
// }
// test();   // ReferenceError

// const o = {};
// o.x = 1;
// Object.freeze(o);
// o.x = 2;
// console.log(o.x); // 1


// async function f() {
//   const r = await Promise.resolve(10);
//   return r + 5;
// }
// f().then(console.log);  // 15

// console.log("hello"[1]);  //e
// console.log(Number.isInteger(4.0));

// const obj = { a: 1 };
// const obj2 = Object.assign({}, obj, { b: 2 });
// console.log(obj2);  // { a: 1, b: 2 }

// class Counter {
//   #count = 0;
//   increment() { this.#count++; }
//   get value() { return this.#count; }
// }
// const c = new Counter();
// c.increment(); c.increment();
// console.log(c.value);   //2

// const a = [1,2,3];
// const b = [4,5,6];
// console.log([...a,...b]);  //[ 1, 2, 3, 4, 5, 6 ]

// Promise.all([
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.resolve(3)
// ]).then(console.log);   // 1, 2, 3]

// const wm = new WeakMap();
// const obj = {};
// wm.set(obj, "value");
// console.log(wm.get(obj));  // value

// console.log([..."hello"]); // [ 'h', 'e', 'l', 'l', 'o' ]

// const obj = {
//   val: 42,
//   getVal: function() {
//     return () => this.val;
//   }
// };
// console.log(obj.getVal()());   // 42

// const m = new Map([[1,"a"],[2,"b"]]);
// console.log([...m.keys()]);   // [ 1, 2 ]

// console.log("aabbcc".replace(/(.)\1/g, "$1"));  // abc


// let x = 2;
// switch(x) {
//   case 1: console.log("one"); break;
//   case 2: console.log("two");
//   case 3: console.log("three");
// }


// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) break outer;
//     console.log(i, j);
//   }
// }  // 0 0

// function* range(start, end) {
//   for (let i = start; i < end; i++) yield i;
// }
// console.log([...range(1, 4)]); //[1, 2, 3]

// function Foo() {}
// Foo.prototype.bar = 1;
// const f = new Foo();
// console.log(f.hasOwnProperty("bar"));


// const p = new Proxy({}, {
//   get(target, key) {
//     return key in target ? target[key] : 37;
//   }
// });
// p.a = 1;
// console.log(p.a, p.b);  // 1 37


// function makeAdder(x) {
//   return (y) => x + y;
// }
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// console.log(add5(3), add10(3));  // 8 13

// function* fib() {
//   let a = 0, b = 1;
//   while(true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// const f = fib();
// console.log(f.next().value); // 0
// console.log(f.next().value); // 1
// console.log(f.next().value); // 1


// async function* asyncRange(n) {
//   for (let i = 0; i < n; i++) yield i;
// }
// (async () => {
//   for await (const v of asyncRange(3))
//     process.stdout.write(v + " ");
// })();  // 0 1 2


// function greet(greeting) {
//   return greeting + ", " + this.name;
// }
// const person = { name: "Alice" };
// console.log(greet.call(person, "Hello")); // Hello, Alice

// function sum(a, b) { return a + b; }
// const args = [3, 7];
// console.log(sum.apply(null, args));


// function greet() {
//   return "Hi " + this.name;
// }
// const fn = greet.bind({ name: "Bob" });
// console.log(fn());  // Hi Bob

// function Animal() {}
// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// const d = new Dog();
// console.log(d instanceof Animal);  // true

// const obj = {};
// Object.defineProperty(obj, "x", {
//   value: 42,
//   writable: false
// });
// obj.x = 100;
// console.log(obj.x);  // 42

// const obj = {};
// Object.defineProperty(obj, "x", {
//   get() { return 99; }
// });
// console.log(obj.x);    // 99

// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => {
//   console.log("promise1");
//   Promise.resolve().then(() => console.log("promise2"));
// });
// console.log("end");  // start
// end
// promise1
// promise2
// timeout

// const fns = [];
// for (let i = 0; i < 3; i++) {
//   fns.push(function() { return i; });
// }
// console.log(fns.map(f => f()));

// const handler = {
//   set(t, k, v) {
//     if (typeof v !== "number")
//       throw new TypeError("Only numbers!");
//     t[k] = v;
//     return true;
//   }
// };
// const proxy = new Proxy({}, handler);
// proxy.age = 25;
// console.log(proxy.age);

// function fact(n, acc = 1) {
//   if (n <= 1) return acc;
//   return fact(n - 1, n * acc);
// }
// console.log(fact(5));

// function memoize(fn) {
//   const cache = {};
//   return (n) => cache[n] ?? (cache[n] = fn(n));
// }
// const double = memoize(x => x * 2);
// console.log(double(5)); // 10
// console.log(double(5)); // 10


// const curry = f => a => b => f(a, b);
// const add = curry((a, b) => a + b);
// console.log(add(3)(4));


// const compose = (...fns) => x =>
// fns.reduceRight((v, f) => f(v), x);
// const double = x => x * 2;
// const addOne = x => x + 1;
// const transform = compose(double, addOne);
// console.log(transform(5));   // 12

// const obj = {
//   [Symbol.iterator]() {
//     let n = 0;
//     return { next: () =>
//       n < 3 ? {value: n++, done: false} : {done: true} };
//   }
// };
// console.log([...obj]);  // [ 0, 1, 2 ]

// async function fail() {
//   throw new Error("oops");
// }
// fail().catch(e => console.log(e.message));  // oops


// Promise.race([
//   new Promise(r => setTimeout(() => r("slow"), 200)),
//   new Promise(r => setTimeout(() => r("fast"), 50))
// ]).then(console.log);   // fast

Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("err"),
  Promise.resolve(3)
]).then(results => console.log(results.length));










































