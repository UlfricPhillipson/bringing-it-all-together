/*class polygon {
    constructor (sides) {
        this.sides = sides;
    }
    // alert that tells the ammount of sides of the polugon
    alertSides(){
        alert ("This polygon has " + this.sides);
    }
    //alert that tells the area of the polygon
    alertFormula()
        {
        alert ( "the area of this object is... ");
    }
} 

class square extends polygon {
    constructor (length) {
        //the super method allows us to access the attributes of polygon class
        super(4);
        this.length = length;
    }

    area(){
        alert(this.length * this.length)
         
    }
    alertFormula(){
        super.alertFormula();
        alert("... length squared. ");
    }

}*/

function palindrome() {
   //sets str to the value of the forms input
    let str = document.getElementById("palCheck").value;
    console.log(str);
    //sets lenths to be the length of the input
    let length = str.length;
    console.log(length);
    //if i is less than half of length, this loop will run
    for(let i = 0 ; i< length /2; i++){
        //checks if first and last are the same then checks the next letter in line
        if(str[i] != str[length - 1 -i]){
            alert("This is not a palindrome!");
            alert("Thanks for playing");
            return;
        }
        alert("This is a palindrome!");
        alert("Thanks for playing");
        return;
    }

}

const failAttempts=[];
var fLastValid = 1;
var zipValid = 1;
function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);   
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);

     let firstlast = firstName + " " + lastName;
    console.log(firstlast);

    console.log(firstlast.length);
    //changed to 10 characters because my name is only 12 characters should be 20 characters
    if(firstlast.length < 20){
        alert("Not enough characters., Your first and last name must have at least 20 characters");
        let fLastValid = 0;
        return;
    }

    if(zip.length != 5 || (!Number.isInteger(zip) && parseInt(zip) < 9999)) {
        alert("Invalid Zip, Must be 5 numbers");
        console.log(typeof zip);
        failAttempts.push(zip);
        console.log(failAttempts.length);
        let zipValid = 0;

        return ;
    }
    console.log("valid zip")

    if(zipValid != 0 && fLastValid != 0 ){
        //if first last and zip are valid take them to home page
        alert("Access Granted")
        location.replace("week11.html")
            }

}


window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm")
    if(form){
        form.addEventListener('submit', validateInput);
    }

    const checker = document.getElementById("palChecker")
    if(checker){
        checker.addEventListener('submit', palindrome);
    }

    /*var poly = new polygon(8);
    poly.alertFormula();
    poly.alertSides();
    
    var srq = new square(3);
    srq.alertFormula();// polymorphism via overiding method
    srq.area();*/
});    