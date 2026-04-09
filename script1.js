const nums = [1, 2, 3, 4];

const double = nums.map((item)=>item*2);

console.log(double);

const names = ["alice", "bob", "charlie"];

const upper = names.map((name)=>{
    if (true) {return name.toUpperCase()}
});
console.log(upper);

const items = ["apple", "banana", "cherry"];

const addfruit = items.map(item=>(item+" fruit"));

console.log(addfruit);


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const justNames = users.map((named)=> {
    return named[1]});

console.log(justNames);