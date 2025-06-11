const problems = [
  { id: 1, title: 'Print "Hello, World!"', difficulty: 'easy' },
  { id: 2, title: 'Sum of two numbers', difficulty: 'easy' },
  { id: 3, title: 'Find maximum of two numbers', difficulty: 'easy' },
  { id: 4, title: 'Check if number is even or odd', difficulty: 'easy' },
  { id: 5, title: 'Factorial of a number', difficulty: 'medium' },
  { id: 6, title: 'Check if number is prime', difficulty: 'medium' },
  { id: 7, title: 'Fibonacci series up to n', difficulty: 'medium' },
  { id: 8, title: 'Reverse a string', difficulty: 'easy' },
  { id: 9, title: 'Check if string is palindrome', difficulty: 'medium' },
  { id: 10, title: 'Sort a list of integers', difficulty: 'hard' }
];

const problemList = document.getElementById('problemList');
const filterSelect = document.getElementById('difficultyFilter');
const languageSelect = document.getElementById('languageSelect');
const outputArea = document.getElementById('outputArea');
const basicsSection = document.getElementById('basicsSection');
const basicsBtn = document.getElementById('basicsBtn');

function displayProblems(filter = 'all') {
  problemList.innerHTML = '';
  const filtered = filter === 'all' ? problems : problems.filter(p => p.difficulty === filter);
  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = `problem ${p.difficulty}`;
    div.textContent = `Problem ${p.id}: ${p.title} [${p.difficulty}]`;
    problemList.appendChild(div);
  });
}

filterSelect.addEventListener('change', () => {
  displayProblems(filterSelect.value);
});

basicsBtn.addEventListener('click', () => {
  basicsSection.classList.toggle('hidden');
});

displayProblems(); // Initial load

// Setup CodeMirror
let editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
  lineNumbers: true,
  mode: "python",
  theme: "default"
});

// Language change
languageSelect.addEventListener('change', () => {
  const selectedLang = languageSelect.value;
  editor.setOption("mode", selectedLang);
});

// Submit Code
document.getElementById('submitCode').addEventListener('click', () => {
  const code = editor.getValue();
  const lang = languageSelect.value;

  outputArea.innerHTML = `
    <p><strong>Language:</strong> ${lang}</p>
    <p><strong>Submitted Code:</strong></p>
    <pre>${code}</pre>
    <p style="color: green;"><strong>[Demo]</strong> Code submitted successfully!</p>
  `;
});

// Reset Code
document.getElementById('resetCode').addEventListener('click', () => {
  editor.setValue("// Start coding...");
  outputArea.innerHTML = '';
});
