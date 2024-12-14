// Import the relevant classes from the Subjects namespace
import { Subjects } from './subjects/Cpp'; 
import { Teacher } from './subjects/Teacher'; 
import { Subjects as ReactSubjects } from './subjects/React'; 
import { Subjects as JavaSubjects } from './subjects/Java'; 

// Create and export the teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  experienceTeachingC: 10
};

// Create and export constants for the subjects
export const cpp = new Subjects.Cpp(cTeacher);
export const java = new JavaSubjects.Java(cTeacher);
export const react = new ReactSubjects.React(cTeacher);

// For Cpp subject, log the results to the console
console.log('C++');
console.log(cpp.getRequirements()); 
console.log(cpp.getAvailableTeacher()); 

// For Java subject, log the results to the console
console.log('Java');
console.log(java.getRequirements()); // Output: Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); 

// For React subject, log the results to the console
console.log('React');
console.log(react.getRequirements()); // Output: Here is the list of requirements for React
console.log(react.getAvailableTeacher()); 
