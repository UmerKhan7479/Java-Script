//Chapter 3

//Question 1 
//  var age;
//  age = 30;
//  age1 = "I am " + age + " years old"
//  alert(age1)

//Question 2
// var webpageVisit = 0
// while(true){
//     ++ webpageVisit
//     var context = "You have visted this site " + webpageVisit +" times"
//     alert(context)
// }

//Question 3 
// var birthYear;
// birthYear = 2003
// Message  ="My birth year is "+ birthYear +"<br/>"+"Data types of my declared variable is " +typeof(birthYear)
// document.write(Message)

//Question 4 
// var storeName = "Khan's Clothing"
// var visitorName = "Muhammad Umer Khan"
// var productTitle = "Jeans"
// var quantity = 10
// info = visitorName + " ordered " + quantity + " " + productTitle + " on " + storeName
// document.write(info)

//Chapter 4

//Question 1

//var name = "Alice", age = 30, isStudent = true;

//Question 2

// Legal variable names
// var userName = "Alice";
// var age_2024 = 30;
// var $totalAmount = 100;
// var _tempValue = 25.5;
// var maxLimit = 50;

// Illegal variable names 
// var 2ndPlace = "Second"; // Starts with a digit
// var user name = "Bob";   // Contains a space
// var class = "Math";      // Reserved keyword
// var function = "Execute"; // Reserved keyword
// var my-variable = 10;    // Contains a hyphen

//Question 3

// document.write("<h1>Rules for Naming JS Variables</h1>");
// document.write("<p>Variable names can only contain letters, numbers, underscores (_), and dollar signs ($). For example: $my_1stVariable</p>");
// document.write("<p>Variables must begin with a letter, underscore (_), or dollar sign ($). For example: $name, _name, or name</p>");
// document.write("<p>Variable names are case sensitive</p>");
// document.write("<p>Variable names should not be JS reserved keywords</p>");



//Chapter 5

//Question 1

// var a = 3;
// var b = 5;
// var sum = a+b;
// document.write("Sum of 3 and 5 is ",sum)

//Question 2 

// var a = 3;
// var b = 5;
// var subtract = a-b;
// document.write("Subtract of 3 and 5 is ",subtract)
// var a = 3;
// var b = 5;
// var divide = a/b;
// document.write("<br/>Divide of 3 and 5 is ",divide)
// var a = 3;
// var b = 5;
// var Multiplication = a*b;
// document.write("<br/>Multiplication of 3 and 5 is ",Multiplication)
// var a = 3;
// var b = 5;
// var Modulus = a%b;
// document.write("<br/>Modulus of 3 and 5 is ",Modulus)

//Question 3 

// // a. Declare a variable.
// var myVar;

// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is: " + myVar + "<br>");

// // c. Initialize the variable with some number.
// myVar = 5;

// // d. Show the value of variable in your browser like “Initial value: 5”.
// document.write("Initial value: " + myVar + "<br>");

// // e. Increment the variable.
// myVar++;

// // f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.write("Value after increment is: " + myVar + "<br>");

// // g. Add 7 to the variable.
// myVar += 7;

// // h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write("Value after addition is: " + myVar + "<br>");

// // i. Decrement the variable.
// myVar--;

// // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("Value after decrement is: " + myVar + "<br>");

// // k. Show the remainder after dividing the variable’s value by 3.
// var remainder = myVar % 3;

// // l. Output : “The remainder is : 0”.
// document.write("The remainder is : " + remainder + "<br>");

//Question 4

// var ticketPrice = 600;

// var totalCost = ticketPrice * 5;

// document.write("Total cost to buy 5 tickets to movie is " + totalCost + " PKR");

// Question 5

// var number = 7;

// document.write("<h3>Multiplication Table of " + number + ":</h3>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

//Question 6

// var celsiusTemp = 30; 

// var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
// fahrenheitTemp = 86; 
// celsiusTemp = (fahrenheitTemp - 32) * 5/9;
// document.write(fahrenheitTemp + "°F is " + celsiusTemp.toFixed(2) + "°C");


//Question 7

// var priceItem1 = 500;
// var priceItem2 = 300;
// var quantityItem1 = 3;
// var quantityItem2 = 2;
// var shippingCharges = 50;

// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// document.write("<h2>Shopping Cart Receipt</h2>");
// document.write("Price of item 1: " + priceItem1 + " PKR<br>");
// document.write("Quantity of item 1: " + quantityItem1 + "<br>");
// document.write("Price of item 2: " + priceItem2 + " PKR<br>");
// document.write("Quantity of item 2: " + quantityItem2 + "<br>");
// document.write("Shipping charges: " + shippingCharges + " PKR<br><br>");
// document.write("Total cost of your order is: " + totalCost + " PKR");

//Question 8

// var totalMarks = 500;
// var marksObtained = 420;

// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h2>Student Result</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");

//Question 9

// var totalPKR = (10 * 104.80) + (25 * 28);

// document.write("<h2>Currency Conversion</h2>");
// document.write("Total in Pakistani Rupees: " + totalPKR + " PKR");

// //Question 10

// var number = 8; // Initialize the variable with any number
// var result = ((number + 5) * 10) / 2;

// document.write("<h2>Arithmetic Operations Result</h2>");
// document.write("Initial number: " + number + "<br>");
// document.write("Result after performing all operations: " + result);

// //Question 11

// var currentYear = 2024; 
// var birthYear = 1995;   

// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// document.write("<h2>Age Calculator</h2>");
// document.write("They are either " + age2 + " or " + age1 + " years old.");

// //Question 12

// var radius = 7; 
// var pi = 3.142; 

// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.write("<h2>Circle Properties Calculator</h2>");
// document.write("The radius of the circle is: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

// //Question 13

// var favoriteSnack = "chips";
// var currentAge = 25;
// var maxAge = 80;
// var dailyAmount = 2;

// var totalAmount = (maxAge - currentAge) * 365 * dailyAmount;

// document.write("<h2>Lifetime Supply Calculator</h2>");
// document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");


// Chapter 6

// document.write("<h2>Result:</h2>");
// var a = 10;
// document.write("The value of a is: ",a);
// document.write("<hr/>");
// document.write("<br/>")
// document.write("The value of ++a is: ",++a);
// document.write("<br/>Now the value of a is: ",a);
// document.write("<br/>")
// document.write("<br/>")
// document.write("<br/>The value of a++ is: ",a++);
// document.write("<br/>Now the value of a is: ",a);
// document.write("<br/>")
// document.write("<br/>")
// document.write("<br/>The value of --a is: ",--a);
// document.write("<br/>Now the value of a is: ",a);
// document.write("<br/>")
// document.write("<br/>")
// document.write("<br/>The value of a-- is: ",a--);
// document.write("<br/>Now the value of a is: ",a);

//Question 2 

// var a = 2, b = 1;

//Explain the output at each stage:
// document.write(--a);
// document.write("<br/>",--b);
// document.write("<br/>",++b);
// document.write("<br/>",b--);

//Put all values for a answer
// var result = --a - --b + ++b + b--;
// document.write("<br/>",result)








