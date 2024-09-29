//                                        Question No.1

// let studentNames = [];

//                                        Question No.2

// let studentData = {
//     names: []
// };

//                                        Question No.3

// let stringArray = ["Alia", "Bazil", "zia", "tahir"];

//                                        Question No.4

// let numbersArray = [1, 2, 3, 4, 5];

//                                        Question No.5

// let booleanArray = [true, false, true, false];

//                                        Question No.6

// let mixedArray = [42, "hello", true, { name: "Alice", age: 30 }, [1, 2, 3]];

//                                        Question No.7

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Education Qualifications in Pakistan</h1>");
// document.write("<ol>");
// qualifications.forEach(function(qualification) {
//     document.write("<li>" + qualification + "</li>");
// });
// document.write("</ol>");

//                                       Question No.8

// let studentNames = ["Alia", "Bazil", "salar"];
// let studentScores = [420, 375, 450];
// let totalMarks = 500;

// document.write("<h1>Student Results</h1>");

// studentNames.forEach(function(name, index) {
//     let score = studentScores[index];
//     let percentage = (score / totalMarks) * 100;

//     document.write("<p>Name: " + name + "<br>");
//     document.write("Score: " + score + " out of " + totalMarks + "<br>");
//     document.write("Percentage: " + percentage.toFixed(2) + "%</p><br>");
// });

//                                      Question No.9

// let colors = ["Red", "Green", "Blue", "Yellow"];
// alert("Initial Colors: " + colors.join(", "));

// let colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddBeginning);
// alert("After adding to the beginning: " + colors.join(", "));

// let colorToAddEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddEnd);
// alert("After adding to the end: " + colors.join(", "));

// colors.unshift("Orange", "Purple");
// alert("After adding two more colors to the beginning: " + colors.join(", "));

// colors.shift();
// alert("After deleting the first color: " + colors.join(", "));

// colors.pop();
// alert("After deleting the last color: " + colors.join(", "));

// let indexToAdd = parseInt(prompt("Enter the index at which to add a new color:"));
// let colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// alert("After adding a color at index " + indexToAdd + ": " + colors.join(", "));

// let indexToDelete = parseInt(prompt("Enter the index at which to delete colors:"));
// let numberToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numberToDelete);
// alert("After deleting " + numberToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", "));

//                                      Question No.10

// let scores = [78, 92, 85, 69, 95, 70];

// document.write("<h1>Student Scores</h1>");
// document.write("<h2>Original Scores</h2>");
// document.write("<p>" + scores.join(", ") + "</p>");

// scores.sort((a, b) => a - b);

// document.write("<h2>Sorted Scores</h2>");
// document.write("<p>" + scores.join(", ") + "</p>");

//                                        Question No.11

// let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
// let selectedCities = cities.slice(0, 3); // Selecting the first three cities

// document.write("<h1>City Arrays</h1>");
// document.write("<h2>All Cities</h2>");
// document.write("<p>" + cities.join(", ") + "</p>");
// document.write("<h2>Selected Cities</h2>");
// document.write("<p>" + selectedCities.join(", ") + "</p>");

//                                        Question No.12

// let arr = ["This", "is", "my", "cat"];
// let sentence = arr.join(" ");

// document.write("<h1>Array:</h1><h3>" + arr + "</h3>");
// document.write("<h1>String:</h1><h3>" + sentence + "</h3>");

//                                        Question No.13

// let fifo = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h1>Devices:</h1>" + fifo);

// fifo.forEach(function(device) {
//     document.write("<h1>Out:</h1>" + device);
// });

//                                        Question No.14

// let lifo = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h1>Devices:</h1><h2>" + lifo + "</h2>");

// while(lifo.length > 0) {
//     let device = lifo.pop();
//     document.write("<h1>Out:</h1><h2>" + device + "</h2>");
//     document.write("<h1>Remaining Devices:</h1><h2>" + lifo + "</h2>");
// }

//                                        Question No.15

// let phManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<h1>Drop Down / Select Menu</h1><Select>");
// phManufacturer.forEach(function(manufacturer) {
//     document.write("<option>" + manufacturer + "</option>");
// });
// document.write("</select>");
