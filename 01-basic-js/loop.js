// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     sum += i;
// }
// console.log("sum = ", sum)

// let i = 1;
// while( i<= 5){
//     console.log("i = ", i);
//     i++;
// }
 
// let i = 1;
// do{
//     console.log("web bocket");
//     i++;
// } while (i <= 5)

// let str = "javascript";
// let size = 0;
// for (let i of str){
//     console.log("i = ", i);
//     size++;
// }
// console.log("string size = ", size)


let student = {
    name : "xyz",
    age : 58,
    cgpa : 2.3,
    isiass : true,

}

for (let key in student){
    console.log("key = ", key,"value = ", student[key])
}