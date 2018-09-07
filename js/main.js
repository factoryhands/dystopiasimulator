var scenarioArray = [
    'Aliens from another planet have invaded and set up their own global government. Humans have been subjugated and now serve the aliens doing hard labor.',
    'Dinosaurs are back and terrorize the global population during daylight hours. They are big, they are mean, and they mean business. Theyve made going outside during the daytime absolutely impossible for humans.',
    'The globe has flooded and land is gone. Those who already owned boats have shaken out to be the leaders of the new global society.'
];
var randomScenario = scenarioArray[Math.floor(Math.random() * scenarioArray.length)];

var controlArray = [
    'All communication between humans is illegal and banned. This includes written, verbal, and electronic forms of communication.',
    'All existing forms of transportation have vanished, and humans are only able to get to where they need to go by walking.',
    'You are being watched. Survillance chips have been implanted into every human brain and they are used to monitor thought and action. Weekly, at the same time the system goes down for maintenance at a secret time. How can you exploit this? '
];
var randomControl = controlArray[Math.floor(Math.random() * controlArray.length)];

var taskArray = [
    'Build a library system that spreads and scales globally.',
    'Build a secret messaging service that can scale globally.',
    'Build a method of transportation that is silent and secret.'
];
var randomTask= taskArray[Math.floor(Math.random() * taskArray.length)];


var shuffle = document.getElementById('shuffle-button');
shuffle.onclick = function() {
    document.getElementById('scenarioScript').innerHTML = randomScenario;
    document.getElementById('controlScript').innerHTML = randomControl;
    document.getElementById('taskScript').innerHTML = randomTask;
}