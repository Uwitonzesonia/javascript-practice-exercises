var Students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var totalmarks = 0;
for (var i = 0 ; i < Students.length ; i++) {
  totalmarks += Students[i][1];
}
avgmarks = totalmarks / Students.length ;
if (avgmarks <= 100) {
  console.log("Grade : A");
} else if (avgmarks < 90) {
  console.log("Grade : B");
} else if (avgmarks < 80) {
  console.log("Grade : C");
} else if (avgmarks < 70) {
  console.log("Grade : D");
} else {
  console.log("Grade: F");
}



