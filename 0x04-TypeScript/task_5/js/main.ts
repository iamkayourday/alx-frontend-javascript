// Define interfaces with brand properties for nominal typing
interface MajorCredits {
    credits: number;
    brand: "Major"; 
  }
  
  interface MinorCredits {
    credits: number;
    brand: "Minor"; 
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits: MajorCredits = {
      credits: subject1.credits + subject2.credits,
      brand: "Major"
    };
    return totalCredits;
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits: MinorCredits = {
      credits: subject1.credits + subject2.credits,
      brand: "Minor" 
    };
    return totalCredits;
  }
  
  // Example usage
  const subject1: MajorCredits = { credits: 30, brand: "Major" };
  const subject2: MajorCredits = { credits: 40, brand: "Major" };
  const subject3: MinorCredits = { credits: 15, brand: "Minor" };
  const subject4: MinorCredits = { credits: 20, brand: "Minor" };
  
  const majorTotal = sumMajorCredits(subject1, subject2);
  const minorTotal = sumMinorCredits(subject3, subject4);
  
  console.log("Total Major Credits:", majorTotal.credits); // Expected: 70
  console.log("Total Minor Credits:", minorTotal.credits); // Expected: 35
  