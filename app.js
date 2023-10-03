function celebrateWin() {
  const congratulationsDiv = document.querySelector('.congratulations');
  congratulationsDiv.style.display = 'block';

  setTimeout(() => {
      congratulationsDiv.style.display = 'none';
  }, 5000); // Hide the animation after 5 seconds
}

// Call celebrateWin() when the player wins the game
