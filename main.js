
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4ANpEMQMl/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("model is loaded");
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log("gotResults")
}