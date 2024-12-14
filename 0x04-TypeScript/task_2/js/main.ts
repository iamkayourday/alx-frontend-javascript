// Define the DirectorInterface with required methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface with required methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Type guard to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Test cases for executeWork
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks

// Define the String literal type Subjects
type Subjects = 'Math' | 'History';

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    // In case of unexpected input, return a default message
    return 'Invalid class';
}

// Test cases for teachClass
console.log(teachClass('Math'));     // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
