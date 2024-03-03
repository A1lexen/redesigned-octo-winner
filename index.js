// Helper function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return number % 2 !== 0;
  }
  
  // Example usage
  console.log(getRandomNumber(1, 10)); // Output will be a random number between 1 and 10
  console.log(isEven(4)); // Output will be true
  console.log(isOdd(3)); // Output will be true