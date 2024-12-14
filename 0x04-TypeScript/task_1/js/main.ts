// Define the Teacher interface
interface Teacher {
    firstName: string;               
    lastName: string;                
    fullTimeEmployee: boolean;       
    yearsOfExperience?: number;      
    location: string;                
    [key: string]: any;              
  }
  
  // Define the Directors interface, which extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;         
  }
  
  // Create an example teacher object
  const teacher1: Teacher = {
    firstName: 'Hamdah',
    lastName: 'Imam',
    fullTimeEmployee: true,
    location: 'New Jersey',
    yearsOfExperience: 5,
    contract: true, 
  };
  
  console.log(teacher1);
  
  // Create an example director object
  const director1: Directors = {
    firstName: 'Abdulbasit',
    lastName: 'Imam',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Define the printTeacherFunction interface
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage of printTeacher function
  console.log(printTeacher("Hamdah", "Imam"));       // Output: H. Imam
  console.log(printTeacher("Abdulbasit", "Imam"));  // Output: A. Imam
  
  // Define the interface for the StudentClass constructor
  interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Define the interface for the StudentClass itself
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentClassConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Create an example student object
  const student = new StudentClass({ firstName: 'Abdulbasit', lastName: 'Imam' });
  
  console.log(student.displayName());       // Output: Abdulbasit
  console.log(student.workOnHomework());   // Output: Currently working
  