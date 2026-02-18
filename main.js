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
  const isDark = document.body.classList.toggle('dark-mode');
  const theme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeButtonText(isDark);
}

function updateThemeButtonText(isDark) {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.textContent = isDark ? 'White Mode' : 'Dark Mode';
  }
}

// Apply theme on load
(function() {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
  updateThemeButtonText(isDark);
})();