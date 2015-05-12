/*************************************
AVERAGE
*************************************/

function average(arr) {
  var sum = 0;
  for (var i = 0; i<arr.length; i++) {
    sum += arr[i];
    console.log(sum);
  }
  var avg = sum/(arr.length);
  return avg;
}

var array1 = [2,2,2,5];
console.log(average(array1));


/*************************************
Palindrome
*************************************/

function isPalindrome(str) {
  var arr = str.split('');
  arr = arr.reverse();
  var str2 = arr.join('');
  if (str===str2){
    return true;
  }
  else {
    return false;
  }
}

/*************************************
Make User
*************************************/

function makeUser(name) {
  var names = {};
  var arr = name.split(' ');
  names['firstName']= arr[0];
  names['lastName']= arr[1];
  return names;
}

/*************************************
Users
*************************************/

function userify(names) {
  var userBase = [];
  for (var i = 0; i<names.length; i++) {
    var newUser = makeUser(names[i]);
    userBase.push(newUser);
  }
  return userBase;
}

/*************************************
Summation
*************************************/

function summation(str) {
  var sum = 0;
  var length = num.length;
  for (var i = 0; i<length;i++) {
      sum += parseInt(num);
      num.shift();
    }
  return sum;
}

/*************************************
Factorial
*************************************/

function factorial(n) {
  var x = n;
  for (var i = 1; i<n;i++) {
    x*=(n-i);
  }
  return x;
}

/*************************************
Longest Word
*************************************/

function longestWord(str) {
  var arr = str.split(' ');
  var longest = arr[0];
  for (var i = 1; i<arr.length; i++) {
    if (longest.length <arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
}
