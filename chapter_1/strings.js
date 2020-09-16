// strings
console.log("Hi, Brian");
let email = "brightkoech@libranconsult.com";

// concatanation
console.log(email);
let firstname = "Brian";
let lastname = "Koech";

let fullname = firstname + " " + lastname;
console.log(fullname);

// get single characters
console.log(fullname[0]);

// String Methods
console.log(fullname.length);

// string methods
console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();
console.log(result);

// find index
let index = email.indexOf('@');
console.log(index);

// more methods
secondaryEmail = "brightkoech@gmail.com";
let char = secondaryEmail.lastIndexOf('r');
console.log(char);
let cut = secondaryEmail.slice(0,5);
console.log(cut);
let cut2 = secondaryEmail.substr(4, 8);
console.log(cut2);
let replacedStr = secondaryEmail.replace("m", "w");
console.log(replacedStr);