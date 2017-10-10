//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

//Code Here
function isTyler(nm) {
  // if (name === 'Tyler') {
  //   return true;
  // }
  // return false;
  return nm === name;
}
isTyler('Tyler');

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName() {
    var userName = prompt("What is your name?");
    return userName;
  }

  


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
  alert('Welcome, ' + getName());
}
welcome();

//not sure how to reference the getName function's local scope

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  "A parameter is the variable in the declaration of a function while an argument is the value that gets passed to the function." //Answer Here


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?
null
NaN
undefined
0
" "
false

  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return "Joe";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
    return function() {
      return newMyName;
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();

//Now invoke innerFn.
innerFn();