var scenarioArray = [
    'barren and riddled with famine. Locusts and an onslaught of other invasive bugs eat the majority of the world\'s food and foliage.',
    'in the past. Dinosaurs have come back. They rule the land, sky, sea, and air. Being outside is incredibly dangerous as humans are no longer at the top of the food chain.',
    'time traveling. Time rewinds 100 years each consecutive week, and humanity is thrust backward into the past.',
    'rainy and dark. There is no sun.',
    'an arid desert without water.',
    'a flooded planet with no land.',
    'a nuclear winter that is cold and frozen.',
    'a frozen desert without foliage or organic food.',
    'a dark, cold, and barren planet with no sun.',
    'a hot, cracked desert with scarce water and food.',
    'all one giant mega city that has no habitable land left.',
    'completely underwater, and society lives in a series of underwater tubes.',
    'in space on a network of space stations.',
    'surviving without nightfall. The sun bakes the earth and water is scarce.',
    'underground. Nuclear war has driven your society to seek safety under the earth.',
    'lonely. People are scarce as humanity has been wiped out by disease.',
    'violent. There is war. No children have been born in over 20 years.',
    'suddenly larger. All humans and animals have shrunk to 10% of their previous size.',
    'red. All other colors have vanished',
];

var controlArray = [
    'insects that infect you with a virus that takes away your memory.',
    'microtransactions for every part of life that you can never get ahead of. To keep up you have to always work with no time off.',
    'a ruling class that has banned all books and made reading illegal.',
    'by a religious cult. Human relationships are illegal and all reproduction happens in the lab.',
    'destruction of roadways.',
    'the end of the monetary system.',
    'being considered an outcast and hunted by the overlords.',
    'what appears to be the wipeout of mankind.',
    'consistent weather disasters. Your region specifically is plauged by constant tornadoes that are unpredictable.',
    'the abolishment of stores, factories, and any item deemed to be superficial by the ruling class.',
    'your government. Emotion and artistic expression are illegal.',
    'your ruling class. Memory is illegal and your brain is wiped daily by the government.',
    'your government. You are sorted into factions based on the resources in your location. Transportation is illegal and you are a prisoner of your faction.',
    'artificial intelligence has become sentient and now algorithmically controls your schedule because it thinks it knows what/’s best for you.',
    'people come back from the dead, and all they want to do is party.',
    'clones. Every person suddenly has several clones, each claiming to be the original.',
    // 'vampires that have enslaved humanity and forced everyone into mandatory blood drives.',
    // 'artificial intelligence has become sentient and now algorythmically controls life and hummanity.',
    // 'the state that has banned and made illegal all forms of communication.',
];

var taskArray = [
    'a way to keep track of your daily life.',
    'a sytem that helps you save or generate more money.',
    'a secret library.',
    'a secret dating service that helps you find your true mate amidst the chaos.',
    'a mode of transportation.',
    'a way to exchange goods and services with others.',
    'a shelter that can be concealed and easily transported.',
    'a way to find others you can form an alliance with.',
    'a preparedness toolkit.',
    'a method of purchasing non-essential supplies that have been outlawed.',
    'a way to create, view, and share art secretly.',
    'a way to record and share your thoughts to help you and your society remember you lives.',
    'a way to secret way to trade goods between factions.',
    'a way to trick the AI into scheduling what you want.',
    'a way to keep the undead happy, while keeping the rest of humanity productive.',
    'a way for people to own and verify their identities.',
];

var wrenchArray = [
    'The sun died and electricity has run out.',
    'You find a dog alone wandering and hungry. He is super friendly and you decide to make him a part of your group. Now you have to keep this dog alive!',
    'You get caught! The government finds out what you\'re doing and you\'re in prison now.',
    'Communication cannot be relied upon, in particularly cellular, satellite, and other forms of wireless communication.',
    'The sun has died and light cannot be relied upon. All objects must be fully functional in the dark.',
];

function randombg(){
  var random= Math.floor(Math.random() * 5) + 0;
  var bigSize = ["url('img/moshed1.gif')",
                 "url('img/moshed2.gif')",
                 "url('img/moshed3.gif')",
                 "url('img/moshed4.gif')",
                 "url('img/moshed5.gif')"];
  document.getElementById("body").style.backgroundImage=bigSize[random];
}


var shuffle = document.getElementById('shuffle-button');
shuffle.onclick = function() {


  randomScenario = scenarioArray[Math.floor(Math.random() * scenarioArray.length)];
  var randomArrayNumber = Math.floor(Math.random() * controlArray.length);
  console.log(randomArrayNumber)


    document.getElementById('scenarioScript').innerHTML = randomScenario;
    document.getElementById('controlScript').innerHTML = controlArray[randomArrayNumber];
    document.getElementById('taskScript').innerHTML = taskArray[randomArrayNumber];

    randombg()
}




