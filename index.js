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
