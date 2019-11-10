let generateEl = document.getElementById("generate");
let passwordEl = document.getElementById("password");
let copyEl = document.getElementById("copy");
let enterEl = document.getElementById("enter");

function myFunction(){
    let characterCount = prompt("How many characters for password?");
     if(characterCount <= 5){
         alert("invalid response min: 5 characters");
         return myFunction()
    } else if(characterCount >=10){
        alert("invalid response max: 10 characters");
        return myFunction()
    } else{
    }
    let specialCharacter = confirm("Do you want special characters?");
    let numCharacter = confirm("Any numerical characters?");
    let upLowCase = confirm("Upper and Lower case characters?");

    if(specialCharacter || numCharacter || upLowCase == true){
        alert("Here's your generated password!");
        return document.getElementById("password").value = password;
    }else{
        alert("One field is required! Try Again.");
    }
} 

function create(){

let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

let password = ""

for(var i =0; i <= characterCount; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
}

}
 

let characterCount = "";
let specialCharacter = true;
let numCharacter = true;
let upLowCase = true; 
