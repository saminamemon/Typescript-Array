//union type array
//in this example we can make one array with all string or number type
let homework : string[]|number[];
homework=["english","science",];
homework=[1,2,3,4];
console.log(homework.length);

//if we want number and string in same array 
let studentnameandno :(string|number)[];
studentnameandno=["samina",435,"anabia",466];
console.log(studentnameandno[2]);
