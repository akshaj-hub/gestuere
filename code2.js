Webcam.set({
    width:350,
    hieght:300,
    image_format : 'png',
    png_qaulity:90
});


    camera = document.getElementById("camera");

Webcam.attach( '#camera' )

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"'+data_uri+'"/>';
    });
}
    console.log('ml5 version', ml5.version);

    classifier = ml5.imageClassifier('',modelLoaded);
                                    //^
                                    //teachable machine link  

 function modelLoaded() {
    console.log('modelLoaded!')
 }                                   


 function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + Prediction_1;
    speak_data_2 = "And the second prediction is" + Prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);

 }