const moods = {
  happy: {
    color: '#fff9c4',
    quote: 'Sunshine fills your soul today!',
    sound: 'https://freesound.org/data/previews/245/245645_4284998-lq.mp3' // Example sound URL
  },
  calm: {
    color: '#b3e5fc',
    quote: 'Breathe deep, let peace flow.',
    sound: 'https://freesound.org/data/previews/316/316857_4939433-lq.mp3'
  },
  energetic: {
    color: '#ffccbc',
    quote: 'Your energy lights up the world!',
    sound: 'https://freesound.org/data/previews/152/152408_2684598-lq.mp3'
  },
  dreamy: {
    color: '#e1bee7',
    quote: 'Drift among the stars tonight.',
    sound: 'https://freesound.org/data/previews/196/196171_3537747-lq.mp3'
  }
};

const quoteEl = document.getElementById('quote');
const audioEl = document.getElementById('sound');
const buttons = document.querySelectorAll('.mood-buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.dataset.mood;
    const vibe = moods[mood];

    // Update background and quote
    document.body.style.backgroundColor = vibe.color;
    quoteEl.textContent = vibe.quote;

    // Play sound
    audioEl.src = vibe.sound;
    audioEl.play().catch(() => console.log('Audio play failed'));
  });
});
