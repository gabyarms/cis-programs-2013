var floatAge = prompt("Enter your age");
 floatAge = parseFloat (floatAge);
 var floatDays = (floatAge * 365.25);
  floatDays = parseFloat(floatDays);
 var floatMonths= (floatAge * 12);
  floatMonths = parseFloat(floatMonths);
 var intWeeks= (floatDays / 7);
var intFortnights = (floatDays /14);
alert ("approximate months ="+floatMonths);
alert ("approximate fortnights ="+intFortnights);
alert ("approximate weeks ="+intWeeks);
alert ("approximate days ="+floatDays);
