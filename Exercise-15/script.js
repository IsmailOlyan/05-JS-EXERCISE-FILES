const Children = [
  { name: "Mohamed", age: 7, city: "Balcad" },
  { name: "Maido", age: 5, city: "Balcad" },
  { name: "Mandek", age: 4, city: "Balcad" },
  { name: "Majid", age: 2, city: "Balcad" },
];

console.log("proberties and values of each person");

for (child of Children)
    console.log(child)
  console.log("---");

for (const key in Children) {
    console.log(Children[key]);
}




















