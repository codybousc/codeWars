//Adding Ordinal Indicator Suffixes to Numbers

function numberToOrdinal(n) {
  var args = [].slice.call(arguments);
  args = args.toString().split("");
  console.log(args.length);
  var lastNumber = args[args.length - 1];
  var lastTwoNumbers = args.slice(-2).join("");
  console.log("lastTwoNumbers ", lastTwoNumbers);
  console.log("lastNumber ", lastNumber);
  if(arguments === 0) {
  	return "0";
  }
  else if (args.length && lastTwoNumbers == "11" || lastTwoNumbers == "12" || lastTwoNumbers == "13") {
  	return n + "th";
  }
  else if(lastNumber == "1") {
  	return n + "st";
  }
  else if(lastNumber == "2") {
  	return n + "nd";
  }
  else if(lastNumber == "3") {
  	return n + "rd";
  }
  else if(lastNumber == "4") {
  	return n + "th";
  }
  else {
  	return n + "th";
  }
}

Test.assertEquals(numberToOrdinal(1), '1st');
Test.assertEquals(numberToOrdinal(2), '2nd');
Test.assertEquals(numberToOrdinal(3), '3rd');
Test.assertEquals(numberToOrdinal(4), '4th');

//Sum of Many Ints

function f(n, m) {
	var i = 1;
  var sum = 0;
  while(i <= n) {
  	sum += i % m;
    i++;
  }
  return sum;
}

Test.describe('', function() {
  Test.it('f(10, 5)', function() {
    Test.assertEquals(f(10, 5), 20);
  });

  Test.it('f(20, 20)', function() {
    Test.assertEquals(f(20, 20), 190);
  });

  Test.it('f(15, 10)', function() {
    Test.assertEquals(f(15, 10), 60);
  });
});

//Facebook Likes

function likes(names) {
     var singularText = " likes this";
     var pluralText = " like this";
     if(names.length == 0) {
       return "no one" + singularText;
     }
     for(var i = 0; i < names.length; i++) {
       if(names.length == 1) {
         return names[i] + singularText;
       }
       if(names.length == 2) {
         return names[i] + " and " + names[i + 1] + pluralText;
       }
       if(names.length == 3) {
         return names[i] + ", " + names[i + 1] + " and " + names[i + 2] + pluralText;
       }
       if (names.length > 3) {
         var totalOthers = names.length - 2;
         return names[i] + ", " + names[i + 1] + " and " + totalOthers + " others like this"
       }
     }
   }



   console.log(likes([]), 'no one likes this');
   console.log(likes(['Peter']), 'Peter likes this');
   console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
   console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');

  //Facebook likes top chosen
  //======================================================================================
  function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}


//Validate phone number in format (123) 456-7890
function validPhoneNumber(phoneNumber){
  var pattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
  return pattern.test(phoneNumber);
}

console.log(validPhoneNumber("(123) 456-7890"), "should return true");

//Top vote
//======================================================================================
function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}


//Is Prime
function divisors(integer) {
  var answerArr = [];
	for(var i = integer - 1; i > 1; i--) {
  	if(integer % i == 0) {
    	answerArr.unshift(i);
    }
  }
  if(answerArr.length == 0) {
  	return integer + " is prime";
  }
  return answerArr;
};


console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));

//Top Voted
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

//Throwing Darts
function scoreThrows(radiuses){
	var total = 0;
  var allLessThan5 = true;
	for(var i = 0; i < radiuses.length; i++) {
  	if(radiuses[i] > 10 || radiuses.length == 0) {
    	allLessThan5 = false;
    }
  	else if(radiuses[i] >= 5 && radiuses[i] <= 10)	{
    	total += 5;
      allLessThan5 = false;
    }
    else if (radiuses[i] < 5) {
    	total += 10;
    }
  }
  if(allLessThan5 && radiuses.length > 0) {
  	total += 100;
  }
  return total;
}

//Top Voted
function scoreThrows(radiuses){

  if (radiuses.length <= 0) { return 0 }

  var score = 0
  var award = true
  for(var i = 0; i < radiuses.length; i++) {
    if      (radiuses[i] < 5)   { score += 10 }
    else if (radiuses[i] <= 10) { score += 5; award = false }
    else                        { award = false }
  }

  if (award) { score += 100 }

  return score;
}


console.log("answer ", scoreThrows([ ])); //0

//Typer.js

var typer = (function(item) {

  return {
    isNumber: function(item) {
    		return !isNaN(item) && (typeof item === 'number' || item instanceof Number);
    },
    isString: function(item) {
       if (typeof item === "string" || item instanceof String) {
          return true;
       }
       else {
          return false;
       }
     },
    isArray: function(item) {
    	 return Object.prototype.toString.call(item) === '[object Array]';
      },
    isFunction: function(item) {return (typeof item === "function" ? true : false)},
    isDate: function(item) {return (item instanceof Date ? true : false)},
    isRegExp: function(item) {
    	return Object.prototype.toString.call(item) === '[object RegExp]';
    },
    isBoolean: function(item) {return item === true || item === false || toString.call(item) === '[object Boolean]';},
    isError: function(item) {return toString.call(item) === '[object Error]';},
    isNull: function(item) {return ( item === null ? true : false)},
    isUndefined: function(item) {return (typeof item === "undefined" ? true : false)}
  }
}(null));

var someFunc = function() {
	return 3 + 5;
}

var cat = ["kitty cat"];

console.log(typer.isArray(cat));
console.log(typer.isString(5));
console.log(typer.isFunction(someFunc));
console.log(typer.isNumber(9))

//Top Voted

var typer = (function(){
  function type(val, expected) {
    var ret = Object.prototype.toString.call(val).match(/[A-Z]\w+/)[0]
    return ret != 'Object' ?
           ret === expected :
           val.constructor.toString().match(/\b\w+/g)[1] === expected;
  }

  return {
    isNumber:    function(x){return type(x,'Number') && !isNaN(x)},
    isString:    function(x){return type(x,'String')},
    isArray:     function(x){return type(x,'Array')},
    isFunction:  function(x){return type(x,'Function')},
    isDate:      function(x){return type(x,'Date')},
    isRegExp:    function(x){return type(x,'RegExp')},
    isBoolean:   function(x){return type(x,'Boolean')},
    isError:     function(x){return type(x,'Error')},
    isNull:      function(x){return type(x,'Null')},
    isUndefined: function(x){return type(x,'Undefined')}
  }
})()

//Voted second best & clearest

var typer = (function() {
  return {
    isUndefined: function (x) { return typeof x == "undefined" },
    isFunction:  function (x) { return typeof x == "function" },
    isNumber:    function (x) { return typeof x != "undefined" && typeof x.valueOf() == "number" && !isNaN(x.valueOf()) },
    isString:    function (x) { return typeof x != "undefined" && typeof x.valueOf() == "string" },
    isBoolean:   function (x) { return typeof x != "undefined" && typeof x.valueOf() == "boolean" },
    isArray:     function (x) { return x instanceof Array },
    isDate:      function (x) { return x instanceof Date },
    isRegExp:    function (x) { return x instanceof RegExp },
    isError:     function (x) { return x instanceof Error },
    isNull:      function (x) { return x === null }
  };
}());

//Sum of Multiples of 3 && 5 less than arg
function solution(number){
	var total = 0;
	for(var i = 0; i < number; i++) {
  	if(i % 3 == 0) {
    	total += i;
    }
    else if(i % 5 == 0) {
    	total += i;
    }
  }
  return total;
}

//Top Voted
function solution(number){
  var sum = 0;

  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
