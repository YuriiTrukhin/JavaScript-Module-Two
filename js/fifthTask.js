function checkForSpam (str) { 
    'use strict'
    let message = true;
    // Write code under this line
    str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale")? message=message:message = false;
    return message
    
  }
  
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true