// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) alert("first"); //first
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third"); //third
