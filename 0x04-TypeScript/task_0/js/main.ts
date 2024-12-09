// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "Abdulbasit",
    lastName: "Imam",
    age: 99,
    location: "Nigeria",
  };
  
  const student2: Student = {
    firstName: "Hamdah",
    lastName: "Olufunmi",
    age: 22,
    location: "New jersey",
  };
  
  // An array of students
  const studentsList: Student[] = [student1, student2];
  
  // Render a table using Vanilla javascript
  const body = document.querySelector("body");
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
  
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  body?.appendChild(table);
  