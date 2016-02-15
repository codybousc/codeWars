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
