function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  const lottoNumbersDiv = document.getElementById('lotto-numbers');
  lottoNumbersDiv.innerHTML = '';
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
  for (const number of sortedNumbers) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('lotto-number');
    numberDiv.textContent = number;
    lottoNumbersDiv.appendChild(numberDiv);
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Apply theme on load
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
})();