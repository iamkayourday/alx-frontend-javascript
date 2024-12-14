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
  