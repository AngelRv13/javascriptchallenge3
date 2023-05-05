///// easy /////

function exercise(x) {
    ////stated my function
  
    return () => x; ///// made it return variable so when i console log it will state what i want it to say
  }
  
  let run = exercise("running"); ///created a variable
  let swim = exercise("swimming"); ///created a variable
  
  console.log(swim());
  console.log(run()); ////consoled it to display on my console///

  
