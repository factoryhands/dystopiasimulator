var scenarioArray = [
    'there are floods. The land is gone.',
    'locusts. They eat the world\'s food and foliage.',
    'aliens have found you. They have remade the world and enslaved humanity.',
    'dinosaurs have come back. They rule the land, sky, sea and air. Humans are food.',
    'there is disease and half of the population has become zombies.',
    'there are clones. You are your clone\'s personal laborer. You exist to do their bidding.',
    'there are vampires. Humans exist for their blood to be farmed.',
    'there are no more children. Humanity has stopped being able to reproduce.',
    'organic food has vanished, and the earth will not produce.',
    'earth has been long dead, and humanity lives in space in a network of space stations.',
    'artificial intelligence has become sentient and now algorythmically controls life and humanity.',
    'people come back from the dead, and resources are scarce.',
    'there is no more public water resources. Only the rich are able to afford water.',
    'each consecutive week time rewinds 100 years and humanity is thrust backward into the past.',
    'it only rains, and there is no sun.',
    'the sun has died. Water and food are running out.',
];
var randomScenario = scenarioArray[Math.floor(Math.random() * scenarioArray.length)];

var controlArray = [
    'chips that have been implanted into your brain by the ruling class.',
    'insects that infect you with a virius that takes away your memory.',
    'microtransactions for every part of life that you can never get ahead of. To keep up you have to always work with no time off.',
    'a ruling class that has banned all books and has made reading illegal.',
    'the state that has banned and made illegal all forms of communication.',
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