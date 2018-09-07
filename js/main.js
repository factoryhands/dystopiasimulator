var scenarioArray = [
    'Aliens from another planet have invaded and set up their own global government. Humans have been subjugated and now serve the aliens doing hard labor.',
    'Dinosaurs are back and terrorize the global population during daylight hours. They are big, they are mean, and they mean business. Theyve made going outside during the daytime absolutely impossible for humans.',
    'The globe has flooded and land is gone. Those who already owned boats have shaken out to be the leaders of the new global society.',
    'Pandemic! Half of the population is now zombies. At night they come out and want to eat the other half of the population. Every. Single. Night.',
    'Evil clones have taken over, and your clone is looking for you and is tasked with your destruction. The clones want to be in charge so they have to get rid of their copy.',
    'People in the world cant have babies anymore and society is slated to end eventually.',


];
var randomScenario = scenarioArray[Math.floor(Math.random() * scenarioArray.length)];

var controlArray = [
    'All communication between humans is illegal and banned. This includes written, verbal, and electronic forms of communication.',
    'All existing forms of transportation have vanished, and humans are only able to get to where they need to go by walking.',
    'You are being watched. Survillance chips have been implanted into every human brain and they are used to monitor thought and action. Weekly, at the same time the system goes down for maintenance at a secret time. How can you exploit this?',
    'Cameras everywhere watch what you do and report back to watchers what you are up to. All acts of rebellion are usually quelled immediately and the detracters snuffed out. You have no idea who is on your side and who is not.',
    'People cant have families or friends. Society is individualized and it is illegal to band together to form any kind of network. All social activity is monitered and litigated with detractors being immediately snuffed out.'
];
var randomControl = controlArray[Math.floor(Math.random() * controlArray.length)];

var taskArray = [
    'Build a library system that spreads and scales globally.',
    'Build a secret messaging service that can scale globally.',
    'Build a method of transportation that is silent and secret.',
    'Feed your populace. How do you produce and distribute food in your new world?',
    'Build a house that provides you and your clan comfort, safety, and other tools of survival.',
    'Build a social network',
    'Build a system that cares for the elderly in your society.',
    'Build a hospital system.',
    'Build an irrigation system.',
    'Build a dating service',
    'Build a fitness tool that tracks your activity',
    'Build an education system',
    'Build a meditation tool to keep your heart rate down.',
    'Build a tool that manages and tracks your nutrition.',
    'Build a tool that teaches children how to read and improves societal literacy.',
    'Build a navigation tool for your new society.'
];
var randomTask= taskArray[Math.floor(Math.random() * taskArray.length)];

var shuffle = document.getElementById('shuffle-button');
shuffle.onclick = function() {

  //HERE IS THE NEW JAVASCRIPT

  randomScenario = scenarioArray[Math.floor(Math.random() * scenarioArray.length)];
  randomControl = controlArray[Math.floor(Math.random() * controlArray.length)];
  randomTask= taskArray[Math.floor(Math.random() * taskArray.length)];

  //END OF NEW JAVASCRIPT

    document.getElementById('scenarioScript').innerHTML = randomScenario;
    document.getElementById('controlScript').innerHTML = randomControl;
    document.getElementById('taskScript').innerHTML = randomTask;
}