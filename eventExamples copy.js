//UlfricParry
/*function sayLol(timestamp) {
    document.write("<input type='button' value='lol'>");
    
    
    //requestAnimationFrame(sayLol);
}*/

/*function addButton(){
    var inputElements = document.createElement("input");
    inputElements.setAttribute("type", "button");
    inputElements.setAttribute("Value", "New Button");  
    // buttonText = document.createTextNode("New Button");
    //inputElements.appendChild(buttonText);

    var parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElements);
    var newParagraph = document.createElement("p");
    var parText = document.createTextNode("New Paragraph");
    parent.appendChild(newParagraph);
}*/

const employees =["Bob", "Joe", "Anne"]

console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);

for(i = 0; i < employees.length; i++){
    console.log(employees[i]);

}

const scores =[]
scores[0] = 2.5
scores[1] = 8.3
scores[2] = 6.5
scores.push(4.0)
scores.push(5.2)

let total = 0

let average = 0

for( i = 0; i < scores.length; i++){
    total = total + scores[i]
}
average = total / scores.length;
console.log(average)


function addButton(){
    console.log("Adding Start and Stop buttons");
    let addButton = document.getElementById("addButton");
    addButton.setAttribute("disabled","true");
    
    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id","startButton")
    inputElementStart.setAttribute("onclick", "startButton();");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id","stopButton")
    inputElementStop.setAttribute("onclick", "stopButton();");
    inputElementStop.setAttribute("disabled","true");


    let parent = document.getElementById("addButton");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);

    

}

function startButton(){
    console.log("Pressed Start");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled","true");
 
    
    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");
    
    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "2s";
    
   

}

function stopButton(){
    console.log("Pressed Stop");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");
    
    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");
    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "0s";

}
//creates a variable for when the mouse is clicked
var clicked = false;
//checks to see if mouse has been clicked in the window
window.addEventListener("click",(event) =>{
    if(!clicked){
        //when clicked, play music and set clicked to true
        let audioSources = ["European_Dragon_Roaring_and_breathe_fire-daniel-simon.wav", "hyena-laugh_daniel-simion.mp3", "heros-time-paulo-kalazzi-main-version-01-51-2639.mp3" ];

        let audioElement = document.getElementById("backgroundAudio");

        audioElement.src = audioSources[2];
        audioElement.loop = true
        audioElement.play();
        audioElement.volume = 0.2  

        clicked = true


        
    }

});

