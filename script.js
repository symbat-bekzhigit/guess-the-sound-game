var noodlesAudio = document.getElementById('noodles');
var noodlesPlaying = false;

var sodaAudio = document.getElementById('soda');
var sodaPlaying = false;

var appleAudio = document.getElementById('apple');
var applePlaying = false;

var bookAudio = document.getElementById('book');
var bookPlaying = false;

var bubblewrapAudio = document.getElementById('bubblewrap');
var bubblewrapPlaying = false;


var cuttingAudio = document.getElementById('cutting');
var cuttingAltAudio = document.getElementById('cutting-alternate');
var cuttingPlaying = false;
var cuttingAltPlaying = false;


var fryingAudio = document.getElementById('frying');
var fryingAltAudio = document.getElementById('frying-alternate');
var fryingPlaying = false;
var fryingAltPlaying = false;


var keyboardAudio = document.getElementById('keyboard');
var keyboardAltAudio = document.getElementById('keyboard-alternate');
var keyboardPlaying = false;
var keyboardAltPlaying = false;


var zipAudio = document.getElementById('zip');
var zipAltAudio = document.getElementById('zip-alternate');
var zipPlaying = false;
var zipAltPlaying = false;


var chipsAudio = document.getElementById('chips');
var chipsAltAudio = document.getElementById('chips-alternate');
var chipsPlaying = false;
var chipsAltPlaying = false;


function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}

document.addEventListener('click', function() {
  playAudio('intro');
  playAudio('background-music');
});

document.addEventListener('click', function(event) {
  // Check if the clicked element is noodles sound
  if (event.target.matches('#noodles-sound')) {
    if (noodlesPlaying) {
      noodlesAudio.pause(); // Pause the audio
    } else {
      noodlesAudio.play(); // Start playing the audio
    }
    noodlesPlaying = !noodlesPlaying; // Toggle the playing state
  }

  else if (event.target.matches('#soda-sound')) {
    if (sodaPlaying) {
      sodaAudio.pause(); // Pause the audio
    } else {
      sodaAudio.play(); // Start playing the audio
    }
    sodaPlaying = !sodaPlaying; // Toggle the playing state
  }

  else if (event.target.matches('#apple-sound')) {
    if (applePlaying) {
      appleAudio.pause(); // Pause the audio
    } else {
      appleAudio.play(); // Start playing the audio
    }
    applePlaying = !applePlaying; // Toggle the playing state
  }

  else if (event.target.matches('#book-sound')) {
    if (bookPlaying) {
      bookAudio.pause(); // Pause the audio
    } else {
      bookAudio.play(); // Start playing the audio
    }
    bookPlaying = !bookPlaying; // Toggle the playing state
  }


  else if (event.target.matches('#bubblewrap-sound')) {
    if (bubblewrapPlaying) {
      bubblewrapAudio.pause(); // Pause the audio
    } else {
      bubblewrapAudio.play(); // Start playing the audio
    }
    bubblewrapPlaying = !bubblewrapPlaying; // Toggle the playing state
  }


  // Check if the clicked element is cutting sound
  else if (event.target.matches('#cutting-sound')) {
    if (cuttingPlaying) {
      cuttingAudio.pause(); // Pause the audio
    } else {
      cuttingAudio.play(); // Start playing the audio
    }
    cuttingPlaying = !cuttingPlaying; // Toggle the playing state
  }
  else if (event.target.matches('#cutting-alternate-sound')) {
    if (cuttingAltPlaying) {
      cuttingAltAudio.pause(); // Pause the audio
    } else {
      cuttingAltAudio.play(); // Start playing the audio
    }
    cuttingAltPlaying = !cuttingAltPlaying; // Toggle the playing state
  }



  // Check if the clicked element is frying sound
  else if (event.target.matches('#frying-sound')) {
    if (fryingPlaying) {
      fryingAudio.pause(); // Pause the audio
    } else {
      fryingAudio.play(); // Start playing the audio
    }
    fryingPlaying = !fryingPlaying; // Toggle the playing state
  }
  else if (event.target.matches('#frying-alternate-sound')) {
    if (fryingAltPlaying) {
      fryingAltAudio.pause(); // Pause the audio
    } else {
      fryingAltAudio.play(); // Start playing the audio
    }
    fryingAltPlaying = !fryingAltPlaying; // Toggle the playing state
  }


  // Check if the clicked element is keyboard sound
  else if (event.target.matches('#keyboard-sound')) {
    if (keyboardPlaying) {
      keyboardAudio.pause(); // Pause the audio
    } else {
      keyboardAudio.play(); // Start playing the audio
    }
    keyboardPlaying = !keyboardPlaying; // Toggle the playing state
  }
  else if (event.target.matches('#keyboard-alternate-sound')) {
    if (keyboardAltPlaying) {
      keyboardAltAudio.pause(); // Pause the audio
    } else {
      keyboardAltAudio.play(); // Start playing the audio
    }
    keyboardAltPlaying = !keyboardAltPlaying; // Toggle the playing state
  }


  // Check if the clicked element is zip sound
  else if (event.target.matches('#zip-sound')) {
    if (zipPlaying) {
      zipAudio.pause(); // Pause the audio
    } else {
      zipAudio.play(); // Start playing the audio
    }
    zipPlaying = !zipPlaying; // Toggle the playing state
  }
  else if (event.target.matches('#zip-alternate-sound')) {
    if (zipAltPlaying) {
      zipAltAudio.pause(); // Pause the audio
    } else {
      zipAltAudio.play(); // Start playing the audio
    }
    zipAltPlaying = !zipAltPlaying; // Toggle the playing state
  }


  // Check if the clicked element is chips sound
  else if (event.target.matches('#chips-sound')) {
    if (chipsPlaying) {
      chipsAudio.pause(); // Pause the audio
    } else {
      chipsAudio.play(); // Start playing the audio
    }
    chipsPlaying = !chipsPlaying; // Toggle the playing state
  }
  else if (event.target.matches('#chips-alternate-sound')) {
    if (chipsAltPlaying) {
      chipsAltAudio.pause(); // Pause the audio
    } else {
      chipsAltAudio.play(); // Start playing the audio
    }
    chipsAltPlaying = !chipsAltPlaying; // Toggle the playing state
  }





});
