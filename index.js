//console.log(Hello World)
let button = document.createElement('button')
button.innerText = 'click here to     speak...'
button.style.backgroundColor = 'pink'
button.style.height = "300px"
button.style.width = "600px"
button.style.marginLeft = '450px'
button.style.marginTop = "220px"
button.style.fontFamily = "serif"
button.style.fontSize = "50px"
button.style.backgroundImage = "url('asfghjkl.jpg')"
document.body.append(button)



//create a function that does all the steps by calling the name of the function
let say = (text) => {
    let utterance = new SpeechSynthesisUtterance(text) //object that the browser recognizes as sound create the thing to say
    window.speechSynthesis.speak(utterance) //"" tell us that it is a string say that thing
}

let listen = () => {
    return new Promise ((resolve) => {//I don't have any thing to return yet. wait for the value that is coming
        const recognition = new webkitSpeechRecognition()
        recognition.addEventListener('result', (e) => { //turn what they said into a string
        let result = event.results[event.resultIndex]
        resolve(result[0].transcript)
    })
    recognition.start()

    })
    
}

button.addEventListener('click', async () => {
    say('what can i do for you...')
    let whatTheUserSaid = await listen()
    //say(whatTheUserSaid)
    switch(whatTheUserSaid){
        case 'repeat':
            say('What do you want me to repeat?')
            let wordsToRepeat = await listen()
            say(wordsToRepeat)
        break;
        case "what is your name":
            case "your name":
            case "name":
            say('my name is othniel and i am from Talento Academy')
        break;
        case `what's the time now`:
            let now = new Date
            let hours = now.getHours()
            if(hours > 12){
                hours = hours - 12
            }
            say(hours+ ' '+now.getMinutes())
        break;
        case "how are you":
            say("i am fine and hope you are fine")
        break;
        case "what\'s the weather like":
            window.open('https://weather.com/weather/today/')
        break;
        default:
            say('wait a minute sridhar bro...')
            window.open('https://www.google.com/search?q=' + whatTheUserSaid)//can comment out 
        break;
    }
})