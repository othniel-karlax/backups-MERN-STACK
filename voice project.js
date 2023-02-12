function listen() {
    let inputArea = document.getElementById('input-area')
    let outputArea = document.getElementById('output-area')

    let recognition = new webkitSpeechRecognition();
    recognition.lang= "en-GB" ;
    recognition.start();

    recognition.onresult= function(event){
        let transcript = event.results[0][0].transcript;
        if(transcript.includes ("hello"))
        {
            outputArea.innerHTML = "hello,gomathi!"
        }
        else if(transcript.includes("weather")){
            window.open("https://www.google.com/search?q=weather")
        }
        else if(transcript.includes("no")||transcript.includes("go")){
            outputArea.innerHTML = "mchael , is a boy from adayakarungulam....having more than 60,70 girl friends if we ask who is your lover, or what about madhu?, he always say all are my friend, madhu is also my friend, we dont cross our limits,he said."
        }
        inputArea.innerHTML=event.results[0][0].transcript;
    }
}
