let array1 : string[] = ["samina","anabia"];//correct syntax
console.log(array1[1]);//correct syntax
let array2:Array<number> = [1, 2, 3];//alternative correct syntax
let array3 : boolean[] = [];//correct syntax to define an empty array

let array4: number[] = new number[2];//error

let array5: number[] = [];
array5.push(1234);//dynamacly added