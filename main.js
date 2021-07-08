var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

//var john = new Human()

function start()
{
    document.getElementById("textbox").innerHTML = ""; 

    //john.speak()
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

    console.log(Content);


   
  //Part 1 -
    if (Content == "take my selfie"){
        speak()
    }
}


function speak(){
    var synth = window.speechSynthesis;
//Part 2-
    speak_data = "I DONT WORK";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
setTimeout(function(){
    takepic()
    save()
},5000)


 
}
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function takepic(){
Webcam.snap(function(data_uri){
document.getElementById("output").innerHTML = "<img id='my_selfie' src='"+data_uri+"'>"
})
}
function save(){
    image=document.getElementById("my_selfie").src
    link=document.getElementById("link")
    link.href=image
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
    link.click()
    takepic()
}