function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('img/moshed1.gif')",
                 "url('img/moshed2.gif')",
                 "url('img/moshed3.gif')",
                 "url('img/moshed4.gif')",
                 "url('img/moshed5.gif')"];
  document.getElementById("body").style.backgroundImage=bigSize[random];
}

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
    'a library system that spreads and scales globally.',
    'a secret messaging service that can scale globally.',
    'a method of transportation that is silent and secret.',
    'a way to feed your populace. How do you produce and distribute food in your new world?',
    'a house that provides you and your clan comfort, safety, and other tools of survival.',
    'a social network that aids in distributing resources.',
    'a system that cares for the elderly in your society.',
    'a hospital system that accurately and secretly tracks patient data.',
    'an irrigation system that distributes water evenly to your society.',
    'a dating service that helps you find your true mate amidst the chaos.',
    'a fitness tool that secretly tracks your activity and makes sure you get enough sleep despite the chaos.',
    'a secret education system for your society.',
    'a meditation tool to keep your heart rate down.',
    'a tool that manages and tracks your nutrition and helps you find food in your broken world.',
    'a tool that teaches children how to read and improves societal literacy.',
    'a navigation tool for your world.'
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

    randombg()
}




