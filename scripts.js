let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// 1. Print developers using map
function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 2. Print developers using forEach
function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 3. Add data
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

// 4. Remove admin
function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

// 5. Concatenate array
function concatenateArray() {
  const newArr = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "24", profession: "developer" },
    { id: 7, name: "charlie", age: "23", profession: "manager" },
  ];
  const result = arr.concat(newArr);
  console.log(result);
}
