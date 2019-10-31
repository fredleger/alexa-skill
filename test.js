var date = new Date();
var currentDay = date.getDay()
var speakOutput;

currentDay = 3

switch (true) {
    case (currentDay == 3):
        speakOutput = `Ca s'approche assez rapidement`;
        break;
    case (currentDay == 4):
        speakOutput = `Humm ... demain soir non ?`;
        break;
    case (currentDay == 5):
        speakOutput = `Oui, très bientôt !`;
        break;
    case (currentDay >= 6):
        speakOutput = `Heuu ... il a déjà commencé en fait !`;
        break;
    default:
        speakOutput = `Désolée mais non ...`;
        break;
}

console.log("out=" + speakOutput + "/" + currentDay)