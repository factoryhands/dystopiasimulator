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
    'barren and riddled with famine. Locusts and an onslought of other invasive bugs eat the majority of the world\'s food and foliage.',
    'in the past. Dinosaurs have come back. They rule the land, sky, sea and air. Being outside is incredibly dangerous as humans are now no longer at the top of the food chain.',
    'there is no more public water resources. Only the rich are able to afford water.',
    'each consecutive week time rewinds 100 years and humanity is thrust backward into the past.',
    'rainy and cloudy. There is no sun.',
    'an arid desert without water.',
    'a flooded planet with no land.',
    'a nuclear winter that is cold and frozen.',
    'a frozen desert without foliage or organic food.',
    'a dark, cold and barren planet with no sun.',
    'a hot, cracked desert with scarce water and food.',
    'a mega city that has no habitable land left.',
    'completely underwater and society lives in a series of underwater tubes..',
    'in space on a network of space stations.',
    'has no night. The sun bakes the earth and water is scarce.',
    'is underground. Nuclear war has driven your society to seek safety under the earth.',
    'lonely. People are scarce as humanity has been wiped out by disease.',
    'violent. There is war. no children have been born in over 20 years.',
];

var controlArray = [
    'insects that infect you with a virius that takes away your memory.',
    'microtransactions for every part of life that you can never get ahead of. To keep up you have to always work with no time off.',
    'a ruling class that has banned all books and has made reading illegal.',
    'by a religious cult. Human relationships are illegal and all reproduction happens in the lab.',
    'destruction of roadways.',
    'the end of the monetary system.',
    'being considered an outcast and hunted by the overlords.',
    'what appears to be the wipeout of mankind.',
    'consistent weather disasters. Your region specifically is plauged by constant tornadoes that are unpredictable.',
    'the abolishment of stores, factories, and any item deemed to be superficial by the ruling class.',
    'your government. Emotion and artistic expression is illegal.',
    'your ruling class. Memory is illegal and your brain is wiped daily by the government.',
    'your government. You are sorted into factions based on the resources in your location. Transportation is illegal and you are a prison of your faction.',
    // 'clones. Your clone who mainly uses you as a hard laborer to do their bidding.',
    // 'vampires that have enslaved humanity and forced everyone into mandatory blood drives.',
    // 'people come back from the dead, and resources are scarce.',
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
    'a way to record your thoughts.',
    'a way to secret way to communicate between factions.',
    'a secret way to communicate.',
];

var shuffle = document.getElementById('shuffle-button');
shuffle.onclick = function() {


  randomScenario = scenarioArray[Math.floor(Math.random() * scenarioArray.length)];
  // randomControl = controlArray[Math.floor(Math.random() * controlArray.length)];
  // randomTask= taskArray[Math.floor(Math.random() * taskArray.length)];
  var randomArrayNumber = Math.floor(Math.random() * controlArray.length);
  console.log(randomArrayNumber)


    document.getElementById('scenarioScript').innerHTML = randomScenario;
    document.getElementById('controlScript').innerHTML = controlArray[randomArrayNumber];
    document.getElementById('taskScript').innerHTML = taskArray[randomArrayNumber];

    randombg()
}




