// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){
        var sum = 0;
        for (var i = 0, o = arr.length; i < o; i++) {
            sum += arr[i];
        }
        return sum / arr.length;

    };
    avgNumbers([1,2,3,4,5]);
    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        var fullName = function(){
           var fisrtN= "James";
           var lastN= "Bond";
           var combineAll= fisrtN.concat(lastN);
           return combineAll;

        };

    console.log(fullName());

    //--------------------------------------------------------
    console.log("3. word count");

    var ipsum = "this is test text that is being used as input to a function";
    function wordCount (str){
        var counter = 0;
        var words = ipsum.split(" ");
        for (i = 0; i < words.length; i++){
        if (words[i] != "")
           counter += 1;
      }
        return (counter);
      }

    console.log(wordCount());

    //--------------------------------------------------------
    console.log("4. sentence char count");

     function charCount(str){
         var strCount = ipsum.length;
         return strCount;

        }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        function vowelsInWord(){

        }
    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();