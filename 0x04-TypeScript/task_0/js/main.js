// Create two students
var student1 = {
    firstName: "Abdulbasit",
    lastName: "Imam",
    age: 99,
    location: "Nigeria",
};
var student2 = {
    firstName: "Hamdah",
    lastName: "Olufunmi",
    age: 22,
    location: "New jersey",
};
// An array of students
var studentsList = [student1, student2];
// Render a table using Vanilla javascript
var body = document.querySelector("body");
var table = document.createElement("table");
var tableBody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
body === null || body === void 0 ? void 0 : body.appendChild(table);
