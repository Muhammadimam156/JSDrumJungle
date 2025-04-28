
window.addEventListener('keydown', function(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!key || !audio) return; // Stop the function if no key or audio found

  key.classList.add('playing');
  audio.currentTime = 0; // Rewind to the start
  audio.play();
});

function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // Skip if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


