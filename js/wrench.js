  var wrenchArray = [
    'The sun died and electricity has run out.',
    'You find a dog alone wandering and hungry. He is super friendly and you decide to make him a part of your group. Now you have to keep this dog alive!',
    'You get caught! The government finds out what you\'re doing and half of your team is imprisoned.',
    'Communication cannot be relied upon, in paritciularly cellular, sattelite and other forms of wireless communication.',
    'The sun has died and light cannot be relied upon. All objects must be fully functional in the dark.',
    'Your group becomes paranoid and turns against eachother. How do you rebuild trust?',
    'Your society has lost the ability to speak more than two words per hour.',
    'Your government is now controlled by cats.',
    'It is illegal to not use the buddy system, and you must now travel in pairs.',
  ];


function randombg(){
  var random= Math.floor(Math.random() * 5) + 0;
  var bigSize = ["url('img/moshed1.gif')",
                 "url('img/moshed2.gif')",
                 "url('img/moshed3.gif')",
                 "url('img/moshed4.gif')",
                 "url('img/moshed5.gif')"];
  document.getElementById("body").style.backgroundImage = bigSize[random];
}


randomWrench = wrenchArray[Math.floor(Math.random() * wrenchArray.length)];
console.log(randomWrench)


document.getElementById('wrenchScript').innerHTML = randomWrench;