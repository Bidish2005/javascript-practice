Intro on javascript:-

- javascript is high level programming language for building web application more efficient way.
- javascript work on both client side as well as server side rendering.
- javascript is comes from echn=ma script so we see the latest version of javacript in the form of echma script
now we used javascript version 6 i.e ES6(echma script 6)
in another way we called ES6 as the vanilla javascript.
- javascript is main used for building logics or functionality of a web pages.

Variable:-

- variable is a container to store some data.
- there are 3 types of varible 
1. let:- let. is a type of variable which is used for changing the variable name later.
          now thses days,most of th   e cases we used let for creating variable.
          let is a block scope code so we have been using let for most cases.
2. var:-is a type of variable which is also used for changing the variable later stage. 
3. const:- const is a type of variable where we can't change our data further.
           const means constant to store some data like numbers, integer etc.


           DATA TYES:-
           -data types is an attributes associated with a piece of data that tells a computer system how to interpet its value.
           -in data types we used typeof opator to know that what type of type of datait is.
           -mainly in javascript their are 2 types of data types.

           1.primitive:-
                    in javascript their are 7 types of primitive data types.
           1.number:-are the type of data types those it like true, false.
           2.boolean:-in boolean data types we get boolean value like true, false.
           3.undefined:-data types the data is not define so that it will show undfined.
           4.null:-this data types we get null for the value means nothing.
           5.biglnt:-in biglnt we will get big integer value.
           6.symbol:- we will get whole symbol as well as the value we get for the data type
           7.string:-is a type of data type that can hold some character link names...
           
           2. Reference or Non-primitive:-

           -non primitie data types are the type of data type that can hold multiple items in a single time
           -non primitie data typyes are - object,array,function etc..
           objects in non primitve data types which can hold multiple of item in one single entity.

           ex:-
           lrt student ={
             name : "xyz"
             mod-no:1236547,
             college: "GIFT"
           }



           OPERATO in JS:-
           -there are 5 types of operator are their in javascript
           1. arithmetic operator
             (+,-,*,/)
             
           2. unary operator
               increment(++)
               decreament(--)

           3. assignment operator
              (assign some values to the variables)
              (=,+=,-=,%=,**=)

           4.comparison operator
             (compair the values)
             it gives the result of true of false.
             equal to -> ==
             not equal to -> !=
             equal to & type ->===
             not equal to & type-> !==

             CONDITIONAL STATEMENT :-

             to implement some condition in the code.
             there are 3 types of conditional statement are there
             1. if condition :-
             if condition is true then statement is true otherwise false.
             syntax -
             if(condition){
                   statement
             }

             2.if else condition :-
             if condition is true then if bloack is executed otherwise its terminate to else condition.
             syntax -
             if(condition){
              statement
             } else {
                  statement
             }
             3."'else-if' condition":-
                ->It checks the condition multiple times where the condition is true.
                ->Syntax:-
                        if(condition){
                                statement
                        }
                        else if(condition){
                                statement
                        }
                        else if(condition){
                                statement
                        }
                        else{
                                statement
                        }
STRING IN JAVASCRIPT :-

string is a sequence of characters used to represent text.
create astring -> let str ="web bocket"
string length -> str.length
string indexing -> tr[0], str[1], str[2]...

Template literals in js:-
its a way to have embedded epression in string.
its denoted on "." 

string symbol :-

- \n - new line
-  \t - tab inside a string

string methods:-

1. str.touppercase()
2. str.tolowercase()
3. str.trim()
4. str.slice(ster)
5. str1.concat(str2)
6. str.replace(searchval, newval)
7. str.charat(idx)

ARRAY ON JS:-

- array is collection of items.
- ex.
let heroes = ["irenman", "hulk", "thor", "batman"];
let marks =[87,68,32,98,12];
let info=["rahul" , 76, "delhi"];

- array index starting from "0"

looping over an array:-
-  loops -> iterable
- syntax :-
 for (let i= 0; i < ary, length,i++)


1- For a given array with marks of student ->[85,97,37,76,60]. Find the average marks of the entire class.

 02- For a given array with prices of 5 items of 4 items ->[250, 645, 300, 900, 50].  All items have a offer of 10% off on them.Change the array to store final price after appluing offer.

 ARRAY METHOD :-
 ---:Array Methods:---

1.)Push:- Add an element to the end.
2.)Pop:- Delete an element from the top/end.
3.)toString:-Converts array to string.
4.)concat:- joins multiple arrays ans return result.
5.)unshift:- Add an element to the the string.
6.)shift:- Delete from start.
7.)slice():- Return a piece of the array.
8.)splice();- Change original array(add, remove, replace).

Map methods :-
- creates a new  array with the results of some operation. the value its callback returns are used to form new array.
- array.map(callbackFunction(valu,index,array))
ex.

let newArr = arr.map ((val)) =>