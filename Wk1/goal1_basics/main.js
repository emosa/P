/*
 Name:  Elimarie Morales Santiago
 Date: 01/07/2014
 Class & Section:  PWA1-01
 Comments: "Goal 1: Review of WPF"
 */

// self-executing function
// Alert Hello World

/*
 Variables

 BREAKING A VARIABLE DOWN TO INDIVIDUAL PIECES
 - an example
 var lastName = "bond"

 - variable declaration begins with the var keyword
 - variable assignment uses the assignment operator  ( = )
 - javascript does use loose typing
 - this means the coding engine will determine the data type
 automatically vs declaring what the variable will be
 (string, number, boolean, etc).

 DATA TYPES:
 string
 number
 boolean
 array				[0, 1, 2]
 function			function(){}
 undefined
 null

 Variables: (assignment vs declaration, naming, and literals)

 Variable Names:
 can have:  letters, numbers, underscore, or $
 cannot have spaces
 cannot begin with a number
 is case-sensitive
 should use camelCasing
 make the variable name meaningful

 legal vs illegal var names (see :
 - legal   var lastName;
 - legal   var _ID;
 - legal   var $name;
 - legal   var name007;
 */
// variables
console.log('------ variables ----------');

//example 1: variables defined properly
var name = "james";
var course = "PWA1";
var month = 3;

console.log("name: ", name + " / course: ", course + " / month: ", month );

//example 2: variables not defined will = "undefined"

var name, course, month;
console.log("name: ", name + " / course: ", course + " / month: ", month );

//example 3: a mix of variables defined and not defined

var name, course = "PWA1", month;
console.log("name: ", name + " / course: ", course + " / month: ", month );

//example 4: declaring multiple variables at once w/ same value

var a = b = c = d = 10;

console.log("a: ", a + " / b: ", b + "/ c: ", c + " / d: ", d);

// string (definition, concatenation, escape character)
console.log('------ strings ----------');

var name = "James Bond";
console.log(name);

//basic string

var testString = "He's in PWA1";

console.log("Example 1: ", testString);

//string w/ escape characters " \ "

var testString = "I need some \"quotes\" to be here";
console.log(testString);

var testString = 'he\'s in PWA1';
console.log(testString);

//string w/ escape characters and mixed single/double quotes

var testString = 'he\'s in' + '"PWA1"';
console.log(testString);

//this example shows that all the "phase" vars above were overwritten

var num =3;
var testString = 'he\'s in PWA1' + num;
console.log(testString);

// numbers (definition, concatenation +, math, numbers & strings)

console.log('------ numbers ----------');

var y = 123e5; // 12300000 mas decimal
var z =123e-5; // 0.00123 menos decimal

// arithmetic operators:  +, -, /, *, % (modulo)


//basic math
var counter = 10;
console.log(counter + 1);

//quick operations with "assignment operator" +=, -=, *=, /=, %=

//one example below, can show more examples with other assignment operators

var num1 = 10;
var num2 = 5;

num1 += num2;
console.log("+=", num1);

//increment or decrement numbers by 1 with ++ or --

var myNum = 5;
console.log("myNum =", myNum);

myNum++; //add one
console.log("myNum =", myNum);

myNum--; //decrease one
console.log("myNum =", myNum);

//this decrements right before it is being used

var num = 10;
--num;
console.log(num);

//this decrements after it is used

num--;
console.log(num);

//comment out the above example

//this decrements after it is being used as well

console.log("counter--:", num--);
console.log("counter--:", --num);

//add a number to a string is always a string

var myStr = "6" + 2;
console.log(myStr);

//other math operations will result in a number

var myStr = "6" / 2;
console.log(myStr);

//order of operations: ( ), *, /, +, -

var num = 4 + (6 * 5 - 10) / 5;
console.log(num);

//modulo example

var num1 = 10;
var num2 = 3;
console.log(num1%num2);


// arrays: (definition, indexing, getter/setter)
console.log('------ arrays ----------');

/*
 BREAKING AN ARRAY DOWN TO INDIVIDUAL PIECES

 - as an example
 var myArr = new myArr[];

 - arrays are a unique data type that can hold a collection of values
 - new = create a NEW array object - w/o the NEW it is called a literal array
 - little impact on code if any
 - myArr = new object of type array
 - in javascript, arrays are constructed by the brackets [ and ]

 */
var myArr = ['bond', 007, function(){}, true];

/*
 - arrays can hold any value type, separated by comma
 - arrays are indexed numerically, beginning at 0
 - to access or set a value, use an index number inside [ ]
 */

//arrays can hold any data type

console.log("index 0:", myArr[0]);
console.log("index 1:", myArr[1]);
console.log("index 2:", myArr[2]);
console.log("index 3:", myArr[3]);

/*******************************************

 STUDENT ACTIVITY 1:

 1.  create an array with 4 numbers 10, 50, 100, 200
 2.  console.log the sum of all the numbers in an array

 ********************************************/

var numArr = [10,50,100,200];
console.log(numArr[0] + numArr[1] + numArr[2] + numArr[3]);

/*******************************************

 STUDENT ACTIVITY 2:

 1.  create an empty array called myArray
 2.  Add to the myArray using setters, the following (baseball, football, basketball)
 3.  console.log all items in one string with spaces

 GOAL
 1. creating an empty array
 2. setters to add to the array
 3. output array items using string concatenation

 ********************************************/

var myArr = new Array();
myArr[0] = "baseball";
myArr[1] = "football";
myArr[2] = "basketball";
console.log(myArr[0] + ', ' + myArr[1] + ', ' + myArr[2]);

// conditionals: (definition, indexing, math, if, if-else, if-else if, ternary)
console.log('------ conditionals ----------');

/*

 a CONDITION is a boolean test between two values, the resulting boolean can be saved

 IF Statement

 - the standard conditional of any programming language
 - a way of splitting a linear path of options into multiple possibilities by
 testing a condition
 - if a specified condition evaluates to true (it’s either true or false),
 then a block of code or a group of actions are executed

BREAKING A VARIABLE DOWN TO INDIVIDUAL PIECES

 - as an example
 if (condition) {
 //block of code or‘actions’
 };

 - a more practical visual is this:
 if (true) {
 //I get to run!
 };

 - a condition is a block of 2 values being compared with a comparison operator
 between them - the comparison operator evaluates the comparison and returns
 a true or false boolean
 - conditions can be used just about anywhere, not just in conditionals and loops
 */

  var myVar = 5 >3; //true
  console.log(myVar);

/*
 most common comparison operators:
 > < >=  <=  !== ! ==  ===
 Sort: A-Za-z


 A conditional is a block of code that only runs if the condition is
 true (example, state switching)

 conditional syntax:
 if (condition) {
 //block of code or ‘actions’
 };
 */

if (5 > 3) {
   //execute code here
   console.log("5 > 3:', True!");
};

/*
 - a common mistake is to use the assignment operator  = instead of the ==
 - ==  used for comparing items

 ==============================================================
 == is the equality operator, does not check against data type
 === is the identity operator, checks data type match - will use this
 ================================================================
 */

// == performs a loose check of two values
 if ("1" == 1){
      console.log("'1' == 1, True!");
 };

   if ("1" == 1){
        console.log("'1' == 1, True!");
};

      if ("1" === 1){
          console.log("'1' === 1, False!");
};

         if ("1" !== 1){
             console.log("'1' !== 1, True!");
};

/* ==============================================================
 if - else statements (allows only for one option)

 if (a < b){
    //execute this block of code if a is less than b
 }else{
    //execute this block of code
 };

 ================================================================
 */

  if ("a" < "b"){
     //TRUE: run code
      console.log("a is less than b");

  }else{
      //FALSE: run code
      console.log("if-else: the 'IF' statement is false");

  };

//if - else if - else (allows for multiple options)

if ("a" > "b"){
     console.log("a is less than b");
 }else if ("a" < "c"){
     console.log("a is less than c");
  }else if ("a" < "d"){
     console.log("a is less than d");
 }else{
    console.log("if-else if: all others statement are false");
};

//nested conditional statement

if ("a" !== "a"){

    if   ("b" === "b"){
        console.log("In Nested if-else / b===b: True");

    } else {
      //execute block of code if the matching "if" statement
    }

} else{
     console.log("Nested conditional: 1st IF returned false");
};

/* ==============================================================
 LOGICAL operators

 && = AND operator, if the left side returns false, then the whole
 condition is false, and the right side is completely skipped

 || = is the OR operator - used to compare two conditions, and if either
 results in true, the overall condition is true

 1. condition1 && condition2	// AND (both must be true)
 2. condition1 || condition2	// OR (either must be true)

 Always put simpler conditions on the left
 ================================================================
 */

//AND logical operator
  if ((1===1) && ("hi" === "hi") ) {
      console.log('&& logical operator: both sides = true');
  };

//OR logical operator
   if ((1 === 1) || ("hi" === "no") ) {
       console.log('|| logical operator: one side = true');
};

// ! NOT logical operator
    if (!(1 === 1) || ("hi" === "no") ) {
      console.log('! NOT logical operator: left is true converted to NOT');

     }else{

     console.log('! NOT logical operator: both sides = false');

     };

// all logical operators with order of operations
    if (5< 2 || (1=== 1 && ! (2 == "2" || 5 < 2 ))){
        console.log('logical operator: true');

    }  else{

        console.log('logical operator:false');
    };

/*******************************************
 STUDENT ACTIVITY 3:

 1.  create a var called weather and make it equal "Cloudy"
 2.  if weather is sunny "bobsMood" is happy
 3	else "bobsMood" is sad
 4.  console.log the results

 GOAL
 1. learn if - else
 ********************************************/

 var weather = "Cloudy";

 if   (weather === "Sunny"){
       bobsMood = "happy";
    }else{
       bobsMood = "sad";
 };

console.log("if-Else weather: ", bobsMood);

/*******************************************
 STUDENT ACTIVITY 4:

 1.  make a copy of the code from Student Activity 3
 2.  create another variable and call it "waves", make it equal to 10
 3.  update the above code, implementing NESTED IF statements
 - if "weather is sunny" and "waves = 10" "bobsMood = pumped"
 - if "weather is sunny" and "waves = 9 to 5" "bobsMood = mellow"
 - if "weather is sunny" and waves are any other results "bobsMood = bummed"
 - if "weather is overcast" and "waves = 10 to 7" "bobsMood = jackedUp"
 - if "weather is overcast" and "waves = 6 to 3" "bobsMood = totally Bummed"
 - if "weather is overcast" and waves are any other results "bobsMood = not happy"
 - else bobsMood = "sad"
 3.  console.log the results after each conditional
 ********************************************/

 var weather = "Cloudy";
 var waves = 10;
  if   (weather === "Sunny"){
     if (waves === 10){
      Mood = "pumped";
       }else if ((waves <= 9) && (waves >= 5)){
         Mood = "mellow";
    }else{
         Mood = "bummed";
        }
    }else if (weather === "overcast"){
         if ((waves < 10) && (waves >= 7)){
             Mood = "jackedup";
         }else if ((waves <= 6) && (waves >= 3)){
             Mood = "totally bummed";
         }else{
             Mood = "not happy";
         }
    }else{
        Mood = "sad";
};

console.log("bob mood: ", Mood);

/*
 BREAKING A TERNARY CONDITIONAL DOWN TO INDIVIDUAL PIECES
 - as an example
 if (a<b){
 myVar = a;
 }else{
 myVar = b;
 };

 - is the same as this:
 myVar = a<b ? a : b;

 condition ? true : false;
 - the conditional operator ?: is a condensed version of an IF statement, which
 returns a statement based on a condition being true or false
 - condition = conditional statement like "a < b"
 - ? = perform the next statement if true
 - : = false (perform the new statement after the :)
 */
 var weather = "Sunny";
  var mood = (weather === "Sunny" ? "Happy" : "Sad");
        console.log("mood:", mood);

  var smile = true;
        console.log(" I am " + ( smile === true ? "happy" : "sad") + " !! ");

/*******************************************
 STUDENT ACTIVITY 5:

 1.  create a variable called "temp" and make it equal to 60
 2.  var 'student1'
 3.  student1 will be a ternary conditional with (weather === 'Sunny')
 - if true student1 is happy
 - if false and temp >= 80, student1 = 'content'
 - else student1 = 'sad'
 4.  console.log the results
 ********************************************/
   var temp = 60;
   var weather = "Sunny";
   var student1 = (weather === "Sunny" ? "happy" : ((temp >= 80) ? "content" : "sad"));
  console.log(student1);

// Functions: (definition, whitespace, invocation, arguments, returns)
console.log('------Functions ----------');


/*
 BREAKING A NAMED FUNCTION DOWN TO INDIVIDUAL PIECES

 - BASIC
 - as an example:
 function functionName(){
 //reusable code goes here
 };

 - basic functions are created, then called when it is needed to run
 - the parenthesis allows us to pass parameters/arguments into the function

 - invoking the function is as simple as calling the identifier using ( ) -
 can place this above or below the function above (unlike the anonymous
 function)

 - as an example:
 functionName();

 *****************************
 ANONYMOUS FUNCTION

 - as an example:
 var functionName = function(){
 //reusable code goes here
 };

 - anonymous functions are created and given a name as the code is run
 - this structure is more common and used more when we get to objects, therefore
 we will use this structure for this course, but it is important to know both
 forms
 - must define/declare the function before calling/invoking the function - unlike
 the basic named structure where you can call a function before or after the code
 - traditional programmers like the basic because they can create it and call from anywhere

 - type the below as an example
 functionName();
 *****************************
  */

var myctr = 1;
var myCounter = function(){
    myctr++;
  console.log("counter = ", myctr);
};
myCounter();
myCounter();

 /*
 function literal: passing data into a function

 - functions would be very limited if they could only execute the same thing every time
 - we can create dynamic results by passing identifiers / variableNames into our function
 - more commonly know as parameters
 - if we want to pass more than 1 argument, separate the arguments w/ a comma...
 - can have any number of parameters passed into a function

 - as an example:
 var identifier = function( var1, var2 ) { //code goes here };

 - two important rules will apply to these new variables..  
 1. if a variable of the same name already exists globally, the global will
 be ignored, 
 2. the variables will only exist inside the function

 ******************
 - variable arguments will store data that is passed to the function, so if we wanted to
 fill var1 and var2 with data (see below), we would invoke the function, and pass
 some data

 var myFn = function(var1, var2) {
 console.log( var1 + var2 );
 };

 - invoking the function (calling) value1 and value 2 are referred to as arguments
 for the function

 myFn('value1', 'value2');

 - in the function - var1 and var2 are referred to as parameters of the function
 - items inside our function we call on these variables.. such as:
 */
//
        var value1 = 1;
        var value2 = 2;
var myFn = function(var1,var2) {
  console.log("function number: ", var1 + var2);
};

   myFn(value1, value2);
/*******************************************
 STUDENT ACTIVITY 6:

 1.  copy the block of code we worked on above (located under the Anonymous Function
 comments), starting with "var myctr = 1"
 2.  pass a parameter called 'newct' into the function
 3   add the myctr to the parameter being passed into the function
 4.  first time: pass a 5 into the function as an argument
 5.  second time: pass a 2 into the funciton as an argument
 6.  console.log the results
 ********************************************/

  //ex1
    var myctr  = 1;
    var myCounter = function(newct){
        myctr += newct;
        console.log("counter = ", myctr);
    };

myCounter(5);
myCounter(2);
  //ex2


      var myctr  = 1;
      var myCounter = function(newct){
          var myctr = 50;
          myctr += newct;
          console.log("counter = ", myctr);
      };

  myCounter(5);
  myCounter(2);



/*******************************************
 function literal: returning values

 - returning values is information coming out of a function
 - functions do not have to return any data (this is referred to as a procedure)
 - the return statement ends a function’s execution, and can gives a value (of any
 type) back to the point of call (referred to as a method)
 - the called function should be assigned to a variable (i.e name - see below)
 ********************************************/

  var myFn = function(){
    return "Elimarie";
  };

  var name = myFn();
  console.log("name:", name);


// if a return gives back no value, it instead returns “undefined”
// this technique is commonly used to end a function early, during execution
// change the return statement to this 'return;'



/*******************************************
 STUDENT ACTIVITY 7:

 1.  copy the block of code we worked on above (located in Student Activity 6).
 2.  change the console.log and put it outside of the function
 3   using a return technique you can pass the info out of the function and
 output the same info
 4.  console.log the results
 ********************************************/


       var myctr  = 1;
       var myCounter = function(newct){
           //var myctr = 50;
           myctr += newct;
          return myctr;
       };

   var cnt = myCounter(5);
   console.log('counter = ', cnt);
   var cnt = myCounter(2);
   console.log('counter = ', cnt);


/*******************************************
 STUDENT ACTIVITY 8:

 1. copy the block of code from STUDENT ACTIVITY 4
 2. pass 2 variables "value1 = Sunny" and "value2 = 10" as function arguments
 3. the function should accept the parameters "weather" and "waves"
 4. return Mood
 5. console.log the Results
 ********************************************/

 var value1 = "Sunny";
 var value2 = 10;

var moodFN = function(weather, waves){

  if   (weather === "Sunny"){
     if (waves === 10){
      Mood = "pumped";
       }else if ((waves <= 9) && (waves >= 5)){
         Mood = "mellow";
    }else{
         Mood = "bummed";
        }

    }else if (weather === "overcast"){
         if ((waves < 10) && (waves >= 7)){
             Mood = "jackedup";
         }else if ((waves <= 6) && (waves >= 3)){
             Mood = "totally bummed";
         }else{
             Mood = "not happy";
         }

    }else{
        Mood = "sad";
};
    return Mood;
    };
  var moodType = moodFN(value1,value2);
console.log("bob mood: ", Mood);

